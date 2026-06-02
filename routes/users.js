const router = require('express').Router();

const controller = require('../controllers/users');
const validate = require('../middleware/validateUser');

// Authentication Routes
router.post('/register', controller.registerUser);
router.post('/login', controller.loginUser);

// User CRUD Routes
router.get('/', controller.getAllUsers);
router.get('/:id', controller.getUser);
router.post('/', validate, controller.createUser);
router.put('/:id', validate, controller.updateUser);
router.delete('/:id', controller.deleteUser);

module.exports = router;