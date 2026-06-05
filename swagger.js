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
    '/contacts': {
      get: {
        summary: 'Get all contacts',
        responses: {
          200: {
            description: 'Success'
          }
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
          201: {
            description: 'Created'
          }
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
            schema: {
              type: 'string'
            }
          }
        ],
        responses: {
          200: {
            description: 'Success'
          }
        }
      },

      put: {
        summary: 'Update contact',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: {
              type: 'string'
            }
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
          200: {
            description: 'Updated'
          }
        }
      },

      delete: {
        summary: 'Delete contact',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: {
              type: 'string'
            }
          }
        ],
        responses: {
          200: {
            description: 'Deleted'
          }
        }
      }
    },

    '/users': {
      get: {
        summary: 'Get all users',
        responses: {
          200: {
            description: 'Success'
          }
        }
      },
      post: {
        summary: 'Create user',
        responses: {
          201: {
            description: 'Created'
          }
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
            schema: {
              type: 'string'
            }
          }
        ],
        responses: {
          200: {
            description: 'Success'
          }
        }
      },

      put: {
        summary: 'Update user',
        responses: {
          200: {
            description: 'Updated'
          }
        }
      },

      delete: {
        summary: 'Delete user',
        responses: {
          200: {
            description: 'Deleted'
          }
        }
      }
    },

    '/users/register': {
      post: {
        summary: 'Register a new user',
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
                  password: { type: 'string' }
                }
              }
            }
          }
        },
        responses: {
          201: {
            description: 'User registered'
          }
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
                properties: {
                  email: { type: 'string' },
                  password: { type: 'string' }
                }
              }
            }
          }
        },
        responses: {
          200: {
            description: 'Login successful'
          }
        }
      }
    }
  }
};