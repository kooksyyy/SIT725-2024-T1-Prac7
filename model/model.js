
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const uri = "mongodb+srv://kooksyyy:Pandapenguin13!@cluster13.aj1wlnp.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    depreciationErrors: true,
  },
});

const connectDB = async () => {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");
    collection = client.db("database1").collection("Cat");
  } catch (err) {
    console.error(err);
  }
};

const getAllCats = async () => {
  const cursor = collection.find();
  return await cursor.toArray();
};

const postCat = async (formData) => {
  await collection.insertOne(formData);
};

module.exports = { connectDB, getAllCats, postCat };