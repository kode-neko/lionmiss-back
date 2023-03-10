import swaggerJsdoc from 'swagger-jsdoc';

const optionsSwaggerJsdoc = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "LogRocket Express API with Swagger",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
      contact: {
        name: "LogRocket",
        url: "https://logrocket.comm",
        email: "info@email.com",
      },
    },
  },
  apis: ["./src/config/**/*.yaml"],
};

const swaggerSpecs = swaggerJsdoc(optionsSwaggerJsdoc);

export default swaggerSpecs;
