const express = require('express');
const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const router = express.Router();

// GET ALL CONTACTS
router.get('/', async (req, res) => {
  try {
    const result = await mongodb
      .getDb()
      .db()
      .collection('contacts')
      .find();

    const contacts = await result.toArray();

    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET ONE CONTACT
router.get('/:id', async (req, res) => {
  try {
    const contactId = new ObjectId(req.params.id);

    const result = await mongodb
      .getDb()
      .db()
      .collection('contacts')
      .find({ _id: contactId });

    const contact = await result.toArray();

    res.status(200).json(contact[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;