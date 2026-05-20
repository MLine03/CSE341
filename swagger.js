module.exports = {
  openapi: "3.0.0",
  info: {
    title: "Contacts API",
    version: "1.0.0",
    description: "CSE341 Contacts API"
  },
  servers: [
    {
      url: "https://cse341-api-514n.onrender.com"
    }
  ],
  paths: {
    "/contacts": {
      get: {
        summary: "Get all contacts",
        responses: {
          "200": {
            description: "Success"
          }
        }
      },
      post: {
        summary: "Create a contact",
        responses: {
          "201": {
            description: "Created"
          }
        }
      }
    },

    "/contacts/{id}": {
      get: {
        summary: "Get contact by ID",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "string" }
          }
        ],
        responses: {
          "200": { description: "Success" },
          "404": { description: "Not found" }
        }
      },

      put: {
        summary: "Update contact",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "string" }
          }
        ],
        responses: {
          "204": { description: "Updated" }
        }
      },

      delete: {
        summary: "Delete contact",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "string" }
          }
        ],
        responses: {
          "204": { description: "Deleted" }
        }
      }
    }
  }
};