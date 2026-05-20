const express = require('express');
const app = express();

require('dotenv').config();

const connectDB = require('./db/connect');
const contactsRoutes = require('./routes/contacts');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger');

app.use(express.json());

// ✅ Root route (prevents "Cannot GET /")
app.get('/', (req, res) => {
  res.send('CSE341 Contacts API is running');
});

// Routes
app.use('/contacts', contactsRoutes);

// Swagger docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 3000;

// Start AFTER DB connects
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Database connection failed:', err);
  });