const Contact = require('../models/contact');

const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (err) {
    console.error('GET ALL ERROR:', err);
    res.status(500).json({ message: err.message });
  }
};

const getContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    res.status(200).json(contact);
  } catch (err) {
    console.error('GET CONTACT ERROR:', err);
    res.status(500).json({ message: err.message });
  }
};

const createContact = async (req, res) => {
  console.log('POST /contacts reached');
  console.log('Request Body:', req.body);

  try {
    const contact = await Contact.create(req.body);

    console.log('Contact created successfully:', contact);

    res.status(201).json({
      message: 'Contact created successfully',
      id: contact._id
    });
  } catch (err) {
    console.error('CREATE CONTACT ERROR:', err);
    console.error('STACK TRACE:', err.stack);

    res.status(500).json({
      message: err.message
    });
  }
};

const updateContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    res.status(200).json({
      message: 'Contact updated successfully',
      contact
    });
  } catch (err) {
    console.error('UPDATE CONTACT ERROR:', err);
    res.status(500).json({ message: err.message });
  }
};

const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    res.status(200).json({
      message: 'Contact deleted successfully'
    });
  } catch (err) {
    console.error('DELETE CONTACT ERROR:', err);
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact
};