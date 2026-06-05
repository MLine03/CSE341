module.exports = {
  openapi: '3.0.0',

  info: {
    title: 'Contacts API',
    version: '1.0.0',
    description: 'Contacts and Users API Documentation'
  },

  servers: [
    {
      url: 'https://cse341-api-514n.onrender.com'
    }
  ],

  paths: {

    // =========================
    // CONTACTS
    // =========================

    '/contacts': {
      get: {
        summary: 'Get all contacts',
        responses: {
          200: { description: 'Success' }
        }
      },

      post: {
        summary: 'Create contact',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['firstName', 'lastName', 'email', 'favoriteColor', 'birthday'],
                properties: {
                  firstName: { type: 'string' },
                  lastName: { type: 'string' },
                  email: { type: 'string' },
                  favoriteColor: { type: 'string' },
                  birthday: { type: 'string' }
                }
              }
            }
          }
        },
        responses: {
          201: { description: 'Created' }
        }
      }
    },

    '/contacts/{id}': {
      get: {
        summary: 'Get contact by id',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string' }
          }
        ],
        responses: { 200: { description: 'Success' } }
      },

      put: {
        summary: 'Update contact',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string' }
          }
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  firstName: { type: 'string' },
                  lastName: { type: 'string' },
                  email: { type: 'string' },
                  favoriteColor: { type: 'string' },
                  birthday: { type: 'string' }
                }
              }
            }
          }
        },
        responses: {
          200: { description: 'Updated' }
        }
      },

      delete: {
        summary: 'Delete contact',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string' }
          }
        ],
        responses: {
          200: { description: 'Deleted' }
        }
      }
    },

    // =========================
    // USERS
    // =========================

    '/users': {
      get: {
        summary: 'Get all users',
        responses: {
          200: { description: 'Success' }
        }
      },

      post: {
        summary: 'Create user',

        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['name', 'email', 'role'],
                properties: {
                  name: { type: 'string', example: 'John Smith' },
                  email: { type: 'string', example: 'john@email.com' },
                  role: { type: 'string', example: 'admin' }
                }
              }
            }
          }
        },

        responses: {
          201: { description: 'Created' },
          400: { description: 'Validation error' }
        }
      }
    },

    '/users/{id}': {
      get: {
        summary: 'Get user by id',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string' }
          }
        ],
        responses: {
          200: { description: 'Success' }
        }
      },

      put: {
        summary: 'Update user',

        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string' }
          }
        ],

        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['name', 'email', 'role'],
                properties: {
                  name: { type: 'string', example: 'John Smith' },
                  email: { type: 'string', example: 'john@email.com' },
                  role: { type: 'string', example: 'admin' }
                }
              }
            }
          }
        },

        responses: {
          200: { description: 'Updated' },
          400: { description: 'Validation error' }
        }
      },

      delete: {
        summary: 'Delete user',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string' }
          }
        ],
        responses: {
          200: { description: 'Deleted' }
        }
      }
    },

    // =========================
    // AUTH
    // =========================

    '/users/register': {
      post: {
        summary: 'Register a new user',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['firstName', 'lastName', 'email', 'password'],
                properties: {
                  firstName: { type: 'string' },
                  lastName: { type: 'string' },
                  email: { type: 'string' },
                  password: { type: 'string' }
                }
              }
            }
          }
        },
        responses: {
          201: { description: 'User registered' }
        }
      }
    },

    '/users/login': {
      post: {
        summary: 'Login user',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['email', 'password'],
                properties: {
                  email: { type: 'string' },
                  password: { type: 'string' }
                }
              }
            }
          }
        },
        responses: {
          200: { description: 'Login successful' }
        }
      }
    }

  }
};