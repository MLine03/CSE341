const express = require('express');
const mongodb = require('./data/database');
const contactsRoutes = require('./db/contact');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/contacts', contactsRoutes);

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => {
      console.log(`Connected to DB and running on port ${port}`);
    });
  }
});