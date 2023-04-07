import * as dotenv from "dotenv";
import express, { Express } from "express";
import {
  routesCart,
  routesCountry,
  routesLocale,
  routesProducts,
  routesShipping,
  routesUser,
} from "./routes/index.js";
import cors from 'cors';
import helmet from 'helmet';
import xssPurge from 'xss-purge';
import hpp from 'hpp';
import i18next from 'i18next';
import i18nextMiddleware from 'i18next-http-middleware';
import swaggerUi from 'swagger-ui-express';
import swaggerSpecs from "./config/swagger/swagger.js";
import i18Config from "./config/i18next/index.js";

dotenv.config();

const app: Express = express();

// Seguridad
app.use(cors());7
app.use(helmet());
app.use(xssPurge());
app.use(hpp());

// i18Next
i18next
  .use(i18nextMiddleware.LanguageDetector)
  .init(i18Config);
app.use(i18nextMiddleware.handle(i18next));

// Swagger
app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpecs)
);

// Rutas
app.use("/cart", routesCart);
app.use("/country", routesCountry);
app.use("/locale", routesLocale);
app.use("/products", routesProducts);
app.use("/shipping", routesShipping);
app.use("/user", routesUser);

// Json
app.use(express.json());

// Init server
app.listen(process.env.SERVER_PORT);
