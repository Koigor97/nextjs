import fs from "fs";
import path from "path";

import { data } from "../../data/dummyData";

function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;
    const feedbackText = req.body.text;

    const newFeedback = {
      id: new Date().toISOString(),
      email,
      text: feedbackText,
    };

    // save the data to a data or file
    const filePath = path.join(process.cwd(), "data", "feedback.json");
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({
      status: "Success",
      data: newFeedback,
    });
  } else {
    res.status(200).json({
      status: "Success",
      message: "It worked",
    });
  }
}

export default handler;
