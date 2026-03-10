import express from 'express';
import { loginUser, registerUser, adminLogin } from '../controllers/userController.js';
import { body } from 'express-validator';

const userRouter = express.Router();

userRouter.post('/register', [
    body('name', "Enter your name").isLength({ min: 3 }),
    body('email', "Enter your email").isEmail(),
    body("password", "Password can be atleast 6 characters!").isLength({ min: 6 }),
], registerUser);

userRouter.post('/login', [
    body('email', "Enter your email").isEmail(),
    body("password", "Password can not be blank!").notEmpty(),
], loginUser);

userRouter.post('/admin', adminLogin);

export default userRouter;