module.exports = {
  openapi: '3.0.0',
  info: {
    title: 'CSE341 API',
    version: '1.0.0',
    description: 'Contacts and Users API'
  },
  servers: [
    {
      url: 'http://localhost:4000'
    }
  ],
  paths: {
    '/contacts': {
      get: {
        summary: 'Get all contacts',
        responses: {
          200: { description: 'Success' }
        }
      },
      post: {
        summary: 'Create contact',
        responses: {
          201: { description: 'Created' }
        }
      }
    },

    '/contacts/{id}': {
      get: {
        summary: 'Get contact by id',
        responses: {
          200: { description: 'Success' }
        }
      },
      put: {
        summary: 'Update contact',
        responses: {
          200: { description: 'Updated' }
        }
      },
      delete: {
        summary: 'Delete contact',
        responses: {
          200: { description: 'Deleted' }
        }
      }
    },

    '/users': {
      get: {
        summary: 'Get all users',
        responses: {
          200: { description: 'Success' }
        }
      },
      post: {
        summary: 'Create user',
        responses: {
          201: { description: 'Created' }
        }
      }
    },

    '/users/{id}': {
      get: {
        summary: 'Get user by id',
        responses: {
          200: { description: 'Success' }
        }
      },
      put: {
        summary: 'Update user',
        responses: {
          200: { description: 'Updated' }
        }
      },
      delete: {
        summary: 'Delete user',
        responses: {
          200: { description: 'Deleted' }
        }
      }
    },

    '/users/register': {
      post: {
        summary: 'Register user',
        responses: {
          201: { description: 'User registered' }
        }
      }
    },

    '/users/login': {
      post: {
        summary: 'Login user',
        responses: {
          200: { description: 'Login successful' }
        }
      }
    }
  }
};