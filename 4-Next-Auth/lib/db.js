import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://vercel-admin-user:EZZ2VtxSi8VQjd0F@cluster0.eycphkp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
  return client;
}
