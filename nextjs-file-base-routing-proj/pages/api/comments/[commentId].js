import {
  getFileData,
  getFilePath,
  writeDataToFile,
} from "../../../utils/helpers";

import { MongoClient } from "mongodb";

export default async function commentHandler(req, res) {
  const eventId = req.query.commentId;
  // console.log(eventId);

  const client = await MongoClient.connect(
    "mongodb+srv://koigorfogbawa:8QIlbTObppSlCqhm@cluster0.bqbbl9p.mongodb.net/events?retryWrites=true&w=majority&appName=Cluster0"
  );

  if (req.method === "POST") {
    const { email, name, text } = req.body;

    if (
      !email ||
      email.trim() === "" ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }

    const newComment = {
      eventId,
      email,
      name,
      text,
    };
    // console.log(newComment);
    const db = client.db();
    const result = await db.collection("comments").insertOne(newComment);
    console.log(result);

    const filePath = getFilePath("eventComments.json");
    // console.log(filePath);
    const fileData = getFileData(filePath);
    // console.log(fileData);
    fileData.push(newComment);
    writeDataToFile(filePath, fileData);

    newComment.id = result.insertedId;

    res.status(201).json({ status: "Success", comment: newComment });
  }

  if (req.method === "GET") {
    const db = client.db();
    const data = await db
      .collection("comments")
      .find()
      .sort({ _id: -1 })
      .toArray();

    res.status(200).json({
      status: "Success",
      data,
      length: data.length,
    });
  }

  client.close();
}
