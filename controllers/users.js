const { ObjectId } = require('mongodb');
const bcrypt = require('bcrypt');
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

    if (!data) {
      return res.status(404).json({ message: 'User not found' });
    }

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

const registerUser = async (req, res) => {
  try {
    const db = getDB();

    const existingUser = await db.collection('users').findOne({
      email: req.body.email
    });

    if (existingUser) {
      return res.status(400).json({
        message: 'Email already exists'
      });
    }

    const hashedPassword = await bcrypt.hash(
      req.body.password,
      10
    );

    const user = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashedPassword
    };

    const result = await db.collection('users').insertOne(user);

    res.status(201).json({
      message: 'User registered successfully',
      id: result.insertedId
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const db = getDB();

    const user = await db.collection('users').findOne({
      email: req.body.email
    });

    if (!user) {
      return res.status(401).json({
        message: 'Invalid email or password'
      });
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) {
      return res.status(401).json({
        message: 'Invalid email or password'
      });
    }

    res.status(200).json({
      message: 'Login successful'
    });
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
  registerUser,
  loginUser,
  updateUser,
  deleteUser
};