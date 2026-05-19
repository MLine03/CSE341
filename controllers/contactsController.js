const Contact = require('../models/contact');

// CREATE
const createContact = async (req, res) => {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json({ id: contact._id });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// UPDATE
const updateContact = async (req, res) => {
  try {
    await Contact.findByIdAndUpdate(req.params.id, req.body);
    res.status(204).send();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE
const deleteContact = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  createContact,
  updateContact,
  deleteContact
};