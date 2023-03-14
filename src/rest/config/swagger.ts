import swaggerJsdoc from 'swagger-jsdoc';

const optionsSwaggerJsdoc = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Lion Miss API REST",
      version: "0.1.0",
      description:
        "The Lion Miss API REST online shop",
      contact: {
        name: "Kode Neko",
        url: "https://www.kodeneko.com",
        email: "gema.mo.est@email.com",
      },
    },
  },
  apis: ["./src/rest/config/**/*.yaml"],
};

const swaggerSpecs = swaggerJsdoc(optionsSwaggerJsdoc);

export default swaggerSpecs;
