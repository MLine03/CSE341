module.exports = {
  openapi: '3.0.0',
  info: {
    title: 'CSE341 Contacts API',
    version: '1.0.0',
    description: 'CRUD API for contacts'
  },
  servers: [
    {
      url: 'http://localhost:3000'
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
        responses: {
          201: {
            description: 'Created'
          }
        }
      }
    },
    '/contacts/{id}': {
      get: {
        summary: 'Get single contact',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true
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
        responses: {
          200: {
            description: 'Updated'
          }
        }
      },
      delete: {
        summary: 'Delete contact',
        responses: {
          200: {
            description: 'Deleted'
          }
        }
      }
    }
  }
};