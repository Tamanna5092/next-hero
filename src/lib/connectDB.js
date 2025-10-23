import { MongoClient, ServerApiVersion } from "mongodb";

let client;
let db;

const connectDB = async () => {
  if (db) return db;

  try {
    const uri = process.env.NEXT_PUBLIC_MONGODB_URL;
    if (!uri) throw new Error("MongoDB URI missing in .env.local");
    client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    
    await client.connect();
    db = client.db("next-hero");
    console.log("MongoDB connected successfully", db.databaseName);
    return db;
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

export default connectDB;
