require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { connectDB } = require('./db/connect');

const contactsRoutes = require('./routes/contacts');
const usersRoutes = require('./routes/users');

// ✅ Swagger imports (THIS FIXES /api-docs)
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Swagger route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use('/contacts', contactsRoutes);
app.use('/users', usersRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('API Running');
});

const PORT = process.env.PORT || 4000;

const start = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error('Database connection failed:', err);
  }
};

start();