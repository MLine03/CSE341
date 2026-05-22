const { body, validationResult } = require('express-validator');

module.exports = [
  body('name').notEmpty(),
  body('email').isEmail(),
  body('role').notEmpty(),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];