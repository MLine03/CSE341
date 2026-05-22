require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { connectDB } = require('./db/connect');

const contactsRoutes = require('./routes/contacts');
const usersRoutes = require('./routes/users');

const app = express();

app.use(cors());
app.use(express.json());

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
    console.error(err);
  }
};

start();