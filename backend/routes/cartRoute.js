import express from "express";
import { addToCart, getUserCart, updateCart } from "../controllers/cartController.js";
import authUser from "../middleware/auth.js";

const cartRouter = express.Router();

// GET USER CART (POST is better here)
cartRouter.post("/get", authUser, getUserCart);

// ADD TO CART
cartRouter.post("/add", authUser, addToCart);

// UPDATE CART
cartRouter.post("/update", authUser, updateCart);

export default cartRouter;
