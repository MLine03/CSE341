const router = require('express').Router();

const controller = require('../controllers/contacts');
const validate = require('../middleware/validateContact');

router.get('/', controller.getAllContacts);
router.get('/:id', controller.getContact);
router.post('/', validate, controller.createContact);
router.put('/:id', validate, controller.updateContact);
router.delete('/:id', controller.deleteContact);

module.exports = router;