const express = require('express');
const app = express();

require('dotenv').config();

const contactsRoutes = require('./routes/contacts');
const connectDB = require('./db/connect'); // ✅ FIXED

app.use(express.json());

// Routes
app.use('/contacts', contactsRoutes);

// Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger'); // ✅ FIXED (single file)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 3000;

// Start server AFTER DB connects
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Database connection failed:', err);
  });