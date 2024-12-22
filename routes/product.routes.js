import { Router } from "express";
import {
  createProduct,
  deleteProducts,
  getAllProducts,
  getProduct,
  updateProduct,
} from "../controllers/product.controllers.js";

const appRouter = Router();

appRouter.get("/", getAllProducts);
appRouter.get("/:id", getProduct);
appRouter.post("/create", createProduct);
appRouter.put("/update/:id", updateProduct);
appRouter.delete("/delete/:id", deleteProducts);

export default appRouter;
