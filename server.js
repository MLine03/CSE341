require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { connectDB } = require('./db/connect');

const contactsRoutes = require('./routes/contacts');
const usersRoutes = require('./routes/users');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json'); // ✅ FIXED

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('API Running');
});

// Swagger (MUST be before or after routes — this is fine here)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use('/contacts', contactsRoutes);
app.use('/users', usersRoutes);

const PORT = process.env.PORT || 4000;

const start = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error('Database connection failed:', err);
    process.exit(1);
  }
};

start();