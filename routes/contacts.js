const router = require('express').Router();

const controller = require('../controllers/contacts');
const validate = require('../middleware/validateContact');
const isAuthenticated = require('../middleware/authenticate');

// Public Routes
router.get('/', controller.getAllContacts);
router.get('/:id', controller.getContact);

// Protected Routes
router.post('/', isAuthenticated, validate, controller.createContact);
router.put('/:id', isAuthenticated, validate, controller.updateContact);
router.delete('/:id', isAuthenticated, controller.deleteContact);

module.exports = router;