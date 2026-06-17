const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "API Bibliothèque",
    version: "1.0.0",
    description: "Documentation de l'API Bibliothèque",
  },
  servers: [
    {
      url: "http://localhost:5000",
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;