import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    `mongodb+srv://koigorfogbawa:DO7tVR7mQcskXaG1@cluster0.ayecy5t.mongodb.net/auth-demo?retryWrites=true&w=majority&appName=Cluster0`
  );

  return client;
}
