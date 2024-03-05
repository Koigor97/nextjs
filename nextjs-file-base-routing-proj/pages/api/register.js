import {
  getFileData,
  getFilePath,
  writeDataToFile,
} from "../../../utils/helpers";

function handler(req, res) {
  if (req.method === "POST") {
    console.log(req.body);
    const { email } = req.body;
    const { thePath } = req.body;

    if (!email || !email.includes("@")) {
      res.status(422).json({ message: "Invalid email address" });
      return;
    }

    const newsLetterData = {
      email,
    };

    const filePath = getFilePath(thePath);
    const fileData = getFileData(filePath);
    fileData.push(newsLetterData);
    writeDataToFile(filePath, fileData);

    res.status(201).json({
      status: "Success",
      data: newsLetterData,
    });
  }
}

export default handler;
