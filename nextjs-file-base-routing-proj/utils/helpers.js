import fs from "fs";
import path from "path";

export function getFilePath(jsonFile) {
  const filePath = path.join(process.cwd(), "data", jsonFile);
  return filePath;
}

export function getFileData(filePath) {
  const fileData = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(fileData);
  return data;
}

export function writeDataToFile(filePath, fileData) {
  fs.writeFileSync(filePath, JSON.stringify(fileData));
}
