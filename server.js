const express = require('express');
const dotenv = require('dotenv');
const mongodb = require('./data/database');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Swagger Route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use('/contacts', require('./routes/contacts'));

// Home Route
app.get('/', (req, res) => {
  res.send('Contacts API is running');
});

// Database Connection
mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => {
      console.log(`Connected to database and listening on port ${port}`);
    });
  }
});