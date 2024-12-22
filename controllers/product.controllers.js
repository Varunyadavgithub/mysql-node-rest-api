import { create, deleteRecord, find, findById, update } from "../db/queries.js";

export const getAllProducts = async (_, res) => {
  try {
    const products = await find();
    return res
      .status(200)
      .json({ products, message: "Fetch all products", success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error occured while fetching all products",
      success: false,
    });
  }
};

export const getProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await findById(id);
    return res
      .status(200)
      .json({ product, message: "Fetched product by id.", success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error occured while fetching products by their id.",
      success: false,
    });
  }
};

export const createProduct = async (req, res) => {
  const { title, description, price } = req.body;
  if (!title || !description || !price) {
    return res.status(403).json({
      message: "Input parameters were not provided",
      success: false,
    });
  }
  try {
    const product = await create(title, description, price);
    return res.status(201).json({
      message: "Product created successfully",
      success: true,
      product,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error occured while creating a product.",
      success: false,
    });
  }
};

export const updateProduct = async (req, res) => {
  const { title, description, price } = req.body;
  const id = req.params.id;
  if (!title || !description || !price) {
    return res.status(403).json({
      message: "Input parameters were not provided",
      success: false,
    });
  }
  try {
    const product = await update(title, description, price, id);
    return res.status(201).json({
      message: "Product updated successfully",
      success: true,
      product,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error occured while updating a product.",
      success: false,
    });
  }
};

export const deleteProducts = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await deleteRecord(id);
    return res.status(200).json({
      message: "Product deleted successfully",
      success: true,
      product,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error occured while deleting a product.",
      success: false,
    });
  }
};
