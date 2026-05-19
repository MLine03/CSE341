module.exports = {
  openapi: "3.0.0",
  info: {
    title: "Contacts API",
    version: "1.0.0",
    description: "Simple Contacts API"
  },
  servers: [
    {
      url: "http://localhost:3000"
    }
  ],
  paths: {
    "/contacts": {
      post: {
        summary: "Create contact",
        responses: {
          "201": {
            description: "Created"
          }
        }
      }
    },
    "/contacts/{id}": {
      put: {
        summary: "Update contact",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true
          }
        ],
        responses: {
          "204": {
            description: "Updated"
          }
        }
      },
      delete: {
        summary: "Delete contact",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true
          }
        ],
        responses: {
          "204": {
            description: "Deleted"
          }
        }
      }
    }
  }
};