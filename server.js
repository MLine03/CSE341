require('dotenv').config();

const express = require('express');
const cors = require('cors');
const session = require('express-session');
const passport = require('./config/passport');

const { connectDB } = require('./db/connect');

const contactsRoutes = require('./routes/contacts');
const usersRoutes = require('./routes/users');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Home Route
app.get('/', (req, res) => {
  res.send('API Running');
});

// GitHub OAuth Login
app.get(
  '/auth/github',
  passport.authenticate('github', {
    scope: ['user:email']
  })
);

// GitHub OAuth Callback
app.get(
  '/auth/github/callback',
  passport.authenticate('github', {
    failureRedirect: '/'
  }),
  (req, res) => {
    res.send('GitHub Login Successful');
  }
);

// Logout
app.get('/logout', (req, res) => {
  req.logout(function (err) {
    if (err) {
      return res.status(500).json({
        error: err.message
      });
    }

    res.redirect('/');
  });
});

// OAuth Test Route
app.get('/profile', (req, res) => {
  if (!req.isAuthenticated || !req.isAuthenticated()) {
    return res.status(401).json({
      message: 'Not logged in'
    });
  }

  res.status(200).json(req.user);
});

// Swagger Documentation
app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);

// API Routes
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