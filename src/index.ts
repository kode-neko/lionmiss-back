import ProductModel from "./model/LMBProduct";
import { connect } from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

async function connectDb() {
  const encodeUser = encodeURIComponent(process.env.DB_USER);
  const encodePass = encodeURIComponent(process.env.DB_USER_PASS);
  const credentials = `${encodeUser}:${encodePass}`;
  const host = `${process.env.DB_HOST}:${process.env.DB_PORT}`;
  const path = `mongodb://${credentials}@${host}/${process.env.DB_NAME}`;
  await connect(path);
}

async function insertProduct() {
  await ProductModel.create({
    name: "test",
    price: 10,
    description: "test",
    details: [
      {
        key: "key",
        value: "value",
      },
    ],
    colors: [],
    unds: 20,
    isFav: false,
    imgs: [],
  });
}

connectDb()
  .then(insertProduct)
  .then(() => console.log("executed"))
  .catch((err) => console.error(err))
  .finally(() => console.log("Terminado"));
