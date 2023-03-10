import * as dotenv from "dotenv";
import express from "express";
import {
  routesCart,
  routesCountry,
  routesLocale,
  routesProducts,
  routesShipping,
  routesUserInfo,
} from "./routes";
import swaggerUi from 'swagger-ui-express';
import swaggerSpecs from "./config/swagger";

dotenv.config();

const app = express();
app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpecs)
);
app.use("/cart", routesCart);
app.use("/country", routesCountry);
app.use("/locale", routesLocale);
app.use("/products", routesProducts);
app.use("/shipping", routesShipping);
app.use("/userInfo", routesUserInfo);

app.use(express.json());
app.listen(process.env.SERVER_PORT);
