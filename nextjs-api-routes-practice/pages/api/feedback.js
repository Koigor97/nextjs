import fs from "fs";
import path from "path";

import { data } from "../../data/dummyData";

// helper functions
function getFilePath() {
  return path.join(process.cwd(), "data", "feedback.json");
}

function getDataFromFile(filePath) {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
}

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
    const filePath = getFilePath();
    const data = getDataFromFile(filePath);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({
      status: "Success",
      data: newFeedback,
    });
  } else {
    res.status(200).json({
      status: "Success",
      data,
    });
  }
}

export default handler;
