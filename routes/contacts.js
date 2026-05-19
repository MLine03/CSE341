const express = require('express');
const router = express.Router();

const Contact = require('../models/contact');
const {
  createContact,
  updateContact,
  deleteContact
} = require('../controllers/contactsController');


// ✅ GET ALL CONTACTS
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// ✅ GET CONTACT BY ID
router.get('/:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    res.json(contact);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// CREATE
router.post('/', createContact);

// UPDATE
router.put('/:id', updateContact);

// DELETE
router.delete('/:id', deleteContact);

module.exports = router;