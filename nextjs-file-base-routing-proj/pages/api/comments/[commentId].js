import {
  getFileData,
  getFilePath,
  writeDataToFile,
} from "../../../utils/helpers";

export default function commentHandler(req, res) {
  const eventId = req.query.commentId;
  console.log(eventId);

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
      id: new Date().toISOString(),
      email,
      name,
      text,
    };
    console.log(newComment);

    const filePath = getFilePath("eventComments.json");
    console.log(filePath);
    const fileData = getFileData(filePath);
    console.log(fileData);
    fileData.push(newComment);
    writeDataToFile(filePath, fileData);

    res.status(201).json({ status: "Success", data: newComment });
  }

  if (req.method === "GET") {
    const filePath = getFilePath("eventComments.json");
    console.log(filePath);
    const data = getFileData(filePath);
    console.log(data);

    res.status(200).json({
      status: "Success",
      data,
      length: data.length,
    });
  }
}
