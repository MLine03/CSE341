const connectDB = require('../db/connect');
const { ObjectId } = require('mongodb');

async function getAllContacts(req, res) {
  const db = await connectDB();
  const contacts = await db.collection('contacts').find().toArray();
  res.json(contacts);
}

async function getContact(req, res) {
  const db = await connectDB();
  const contact = await db.collection('contacts').findOne({
    _id: new ObjectId(req.params.id)
  });
  res.json(contact);
}

module.exports = { getAllContacts, getContact };