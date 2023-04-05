import * as dotenv from "dotenv";
import express, { Express } from "express";
import {
  routesCart,
  routesCountry,
  routesLocale,
  routesProducts,
  routesShipping,
  routesUserInfo,
} from "./routes/index.js";
import cors from 'cors';
import helmet from 'helmet';
import xssPurge from 'xss-purge';
import hpp from 'hpp';
import swaggerUi from 'swagger-ui-express';
import swaggerSpecs from "./config/swagger.js";

dotenv.config();

const app: Express = express();

// Seguridad
app.use(cors());
app.use(helmet());
app.use(xssPurge());
app.use(hpp());

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
app.use("/userInfo", routesUserInfo);

// Json
app.use(express.json());

// Init server
app.listen(process.env.SERVER_PORT);
