import swaggerJsdoc from "swagger-jsdoc";
import { Request, Response } from "express";



function getSwaggerSpecs(): object {
  const {SWAGGER_URL_REST} = process.env;
  const optionsSwaggerJsdoc: swaggerJsdoc.Options = {
    swaggerDefinition  : {
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
      servers: [
        {
          url: `${SWAGGER_URL_REST}`
        }
      ]
    },
    apis: [
      "./src/rest/swagger/tags.yaml",
      "./src/rest/swagger/components/*.yaml",
      "./src/rest/swagger/paths/routesProducts.yaml",
      "./src/rest/swagger/paths/routesLocale.yaml",
      "./src/rest/swagger/paths/routesCountry.yaml",
    ]
  };
  
  return swaggerJsdoc(optionsSwaggerJsdoc);
}

function ctrlSwaggerSpecsDocs(swaggerSpecs: object) {
  return (_: Request, res: Response) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpecs);
  }
}

export {
  getSwaggerSpecs,
  ctrlSwaggerSpecsDocs
};
