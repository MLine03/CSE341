const { ObjectId } = require('mongodb');
const { getDB } = require('../db/connect');

const getAllContacts = async (req, res) => {
  try {
    const db = getDB();
    const data = await db.collection('contacts').find().toArray();

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getContact = async (req, res) => {
  try {
    const db = getDB();

    const data = await db.collection('contacts').findOne({
      _id: new ObjectId(req.params.id)
    });

    if (!data) {
      return res.status(404).json({
        message: 'Contact not found'
      });
    }

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createContact = async (req, res) => {
  try {
    const db = getDB();

    const result = await db
      .collection('contacts')
      .insertOne(req.body);

    res.status(201).json({
      message: 'Contact created successfully',
      id: result.insertedId
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: err.message
    });
  }
};

const updateContact = async (req, res) => {
  try {
    const db = getDB();

    const result = await db
      .collection('contacts')
      .replaceOne(
        { _id: new ObjectId(req.params.id) },
        req.body
      );

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
};

const deleteContact = async (req, res) => {
  try {
    const db = getDB();

    const result = await db
      .collection('contacts')
      .deleteOne({
        _id: new ObjectId(req.params.id)
      });

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
};

module.exports = {
  getAllContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact
};