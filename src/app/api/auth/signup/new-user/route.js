import connectDB from "@/lib/connectDB";

export const POST = async (request) => {
  try {
    const db = await connectDB();
    console.log("Database connected successfully", db);
    const userCollection = db.collection("users");
    const newUser = await request.json();
    const res = await userCollection.insertOne(newUser);
    return new Response(
      JSON.stringify({ message: "User Created Successfully" })
    );
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ message: "Something went wrong!" }));
  }
};
