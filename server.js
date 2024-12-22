import express from "express";
import productRouter from "./routes/product.routes.js";
import dotenv from "dotenv";
import { connectToDatabase } from "./db/connectdb.js";

dotenv.config();

const app = express();

// middlewares
app.use(express.json());

// APIs
app.use("/api/v1/products", productRouter);

const PORT = process.env.PORT || 5000;

connectToDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on PORT ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error occured with mysql connection. Error: ", err);
    process.exit(0);
  });
