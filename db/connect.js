const { MongoClient } = require('mongodb');

const client = new MongoClient(process.env.MONGODB_URI);

let db;

const connectDB = async () => {
  try {
    await client.connect();
    db = client.db('cse341');

    console.log('Connected to MongoDB');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

const getDB = () => db;

module.exports = { connectDB, getDB };