import express from 'express';
import { addProduct, listProducts, removeProduct, singleProduct } from '../controllers/productController.js';
import upload from '../middleware/multer.js';
import adminAuth from '../middleware/adminAuth.js';

const productRouter = express.Router();

productRouter.post('/add', adminAuth, upload.fields([{ name: 'imageUrl1', maxCount: 1 }, { name: 'imageUrl2', maxCount: 1 }, { name: 'imageUrl3', maxCount: 1 }, { name: 'imageUrl4', maxCount: 1 }]), addProduct);
productRouter.delete('/remove/:id', adminAuth, removeProduct);
productRouter.get('/single/:productId', singleProduct);
productRouter.get('/list', listProducts);


export default productRouter;