import express from 'express';
import { placeOrder, allOrders, userOrders, updateStatus} from '../controllers/orderController.js';

import adminAuth from '../middleware/adminAuth.js';
import authUser from '../middleware/auth.js';

const orderRouter = express.Router();

// Admin Features
orderRouter.post('/list', adminAuth, allOrders);
orderRouter.post('/status', adminAuth, updateStatus);

// Playment Features
orderRouter.post('/place', authUser, placeOrder);

// User Features
orderRouter.post('/userOrders', authUser, userOrders);


export default orderRouter;