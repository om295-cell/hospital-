const { MongoClient } = require('mongodb');

const url = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const dbName = 'hospital';

const client = new MongoClient(url);

async function connectDB() {
  await client.connect();
  console.log('Connected to MongoDB');
  return client.db(dbName);
}

module.exports = { connectDB, client };
