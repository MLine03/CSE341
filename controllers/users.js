const { ObjectId } = require('mongodb');
const { getDB } = require('../db/connect');

const getAllUsers = async (req, res) => {
  try {
    const db = getDB();
    const data = await db.collection('users').find().toArray();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getUser = async (req, res) => {
  try {
    const db = getDB();
    const id = req.params.id;

    const data = await db.collection('users').findOne({
      _id: new ObjectId(id)
    });

    if (!data) return res.status(404).json({ message: 'Not found' });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createUser = async (req, res) => {
  try {
    const db = getDB();
    const result = await db.collection('users').insertOne(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const db = getDB();
    const id = req.params.id;

    const result = await db.collection('users').replaceOne(
      { _id: new ObjectId(id) },
      req.body
    );

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const db = getDB();
    const id = req.params.id;

    const result = await db.collection('users').deleteOne({
      _id: new ObjectId(id)
    });

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
};