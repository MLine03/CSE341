module.exports = {
  openapi: '3.0.0',
  info: {
    title: 'CSE341 API',
    version: '1.0.0',
    description: 'Contacts and Users API'
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
                properties: {
                  firstName: { type: 'string' },
                  lastName: { type: 'string' },
                  email: { type: 'string' },
                  favoriteColor: { type: 'string' },
                  birthday: { type: 'string' }
                },
                example: {
                  firstName: 'Jane',
                  lastName: 'Smith',
                  email: 'jane@example.com',
                  favoriteColor: 'Purple',
                  birthday: '1995-08-10'
                }
              }
            }
          }
        },
        responses: {
          201: { description: 'Created' },
          400: { description: 'Validation Error' }
        }
      }
    },

    '/contacts/{id}': {
      get: {
        summary: 'Get contact by ID',
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
          200: { description: 'Success' },
          404: { description: 'Not Found' }
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
          200: { description: 'Updated' },
          400: { description: 'Validation Error' }
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
          200: { description: 'Deleted' },
          404: { description: 'Not Found' }
        }
      }
    }
  }
};