const router = require('express').Router();

const controller = require('../controllers/users');
const validate = require('../middleware/validateUser');
const isAuthenticated = require('../middleware/authenticate');

// Authentication Routes
router.post('/register', controller.registerUser);
router.post('/login', controller.loginUser);

// Public Routes
router.get('/', controller.getAllUsers);
router.get('/:id', controller.getUser);

// Protected Routes
router.post('/', isAuthenticated, validate, controller.createUser);
router.put('/:id', isAuthenticated, validate, controller.updateUser);
router.delete('/:id', isAuthenticated, controller.deleteUser);

module.exports = router;