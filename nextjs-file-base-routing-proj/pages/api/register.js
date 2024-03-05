import {
  getFileData,
  getFilePath,
  writeDataToFile,
} from "../../../utils/helpers";
import { MongoClient } from "mongodb";

async function handler(req, res) {
  const client = await MongoClient.connect(
    "mongodb+srv://koigorfogbawa:8QIlbTObppSlCqhm@cluster0.bqbbl9p.mongodb.net/events?retryWrites=true&w=majority&appName=Cluster0"
  );

  if (req.method === "POST") {
    console.log(req.body);
    const { email } = req.body;
    const { thePath } = req.body;

    if (!email || !email.includes("@")) {
      res.status(422).json({ message: "Invalid email address" });
      return;
    }

    const db = client.db();
    const result = await db
      .collection("newsletter")
      .insertOne({ emailAddress: email });

    console.log(result);
    client.close();

    const newsLetterData = {
      email,
    };

    const filePath = getFilePath(thePath);
    const fileData = getFileData(filePath);
    fileData.push(newsLetterData);
    writeDataToFile(filePath, fileData);

    res.status(201).json({
      status: "Success",
      message: "Signed Up",
    });
  }
}

export default handler;
