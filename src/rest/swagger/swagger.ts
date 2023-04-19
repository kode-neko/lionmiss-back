import swaggerJsdoc from "swagger-jsdoc";

const optionsSwaggerJsdoc: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Lion Miss API REST",
      version: "0.1.0",
      description: "The Lion Miss API REST online shop",
      contact: {
        name: "Kode Neko",
        url: "https://www.kodeneko.com",
        email: "gema.mo.est@email.com",
      },
    },
  },
  apis: [
    "./src/rest/swagger/tags.yaml",
    "./src/rest/swagger/components/*.yaml",
    "./src/rest/swagger/paths/routesProducts.yaml",
    "./src/rest/swagger/paths/routesLocale.yaml",
    "./src/rest/swagger/paths/routesCountry.yaml",
  ],
};

const swaggerSpecs: object = swaggerJsdoc(optionsSwaggerJsdoc);

export default swaggerSpecs;
