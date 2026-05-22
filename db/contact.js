const router = require('express').Router();

const {
  getAllContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact
} = require('../controllers/contacts');

const validateContact = require('../middleware/validateContact');

router.get('/', getAllContacts);
router.get('/:id', getContact);

router.post('/', validateContact, createContact);
router.put('/:id', validateContact, updateContact);

router.delete('/:id', deleteContact);

module.exports = router;