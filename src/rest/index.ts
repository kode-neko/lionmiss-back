import * as dotenv from "dotenv";
import express, {Express} from "express";
import {
  routesCart,
  routesCountry,
  routesLocale,
  routesProducts,
  routesShipping,
  routesUser,
} from "./routes/index";
import {Mongoose, connect, set as setMongoose} from "mongoose";
import cors from "cors";
import helmet from "helmet";
import xssPurge from "xss-purge";
import hpp from "hpp";
import i18next from "i18next";
import i18nextMiddleware from "i18next-http-middleware";
import swaggerUi from "swagger-ui-express";
import swaggerSpecs from "./swagger/swagger";
import i18Config from "./config/i18next/index";
import { errorHandler, logHandler, midNotFound, midProtocol } from "./middleware";

// Select .env doc
if(process.env.NODE_ENV === 'development') {
  dotenv.config({path: '.env.dev'});
} else {
  dotenv.config();
}

const app: Express = express();

// Seguridad
app.use(cors());
app.use(helmet());
app.use(xssPurge());
app.use(hpp());

// Change https to http
app.use(midProtocol);

// i18Next
i18next.use(i18nextMiddleware.LanguageDetector).init(i18Config);
app.use(i18nextMiddleware.handle(i18next));

// Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// Json
app.use(express.json());

// Rutas
app.use(logHandler);
app.use("/cart", routesCart);
app.use("/country", routesCountry);
app.use("/locale", routesLocale);
app.use("/product", routesProducts);
app.use("/shipping", routesShipping);
app.use("/user", routesUser);

// Not Found
app.use(midNotFound);

// Error Handler
app.use(errorHandler);

const {
  REST_HOST,
  REST_PORT,
  DB_PORT,
  DB_HOST,
  DB_NAME,
  DB_USER,
  DB_USER_PASS
} = process.env;


// Init DB
setMongoose("strictQuery", true);
const promiseDB: Promise<Mongoose> = connect(
  `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=${DB_NAME}`,
  {
    user: DB_USER,
    pass: DB_USER_PASS,
  }
);

// Connect DB
promiseDB
  .then(() => {
    console.log("🗂️  Connected to DB");
    // Init server
    app.listen(REST_PORT, () =>
      console.log(`🚀  API REST is ready at ${REST_HOST}:${REST_PORT}`)
    );
  })
  .catch((err: Error) => console.log("💀  Error REST server:", err));


