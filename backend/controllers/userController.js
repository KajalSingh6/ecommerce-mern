import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { validationResult } from "express-validator";
import userModel from "../models/userModel.js";



// ===================== LOGIN USER =====================
const loginUser = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ msg: "Invalid Credentials!" });
    }

    const data = {
      id: user._id,
    };

    const token = jwt.sign(data, process.env.JWT_SECRET_KEY, { expiresIn: "7d" });

    if (token) {
      return res.status(200).json({ success: true, msg: "Login Successful!", token });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
}

// ===================== REGISTER USER =====================
const registerUser = async (req, res) => {
  try {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    const { name, email, password } = req.body;

    //  cheacking user already exists or not
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    const hashedPass = await bcrypt.hash(password, 10);

    const newUser = new userModel({
      name, email, password: hashedPass
    });
    const user = await newUser.save();

    const data = {
      id: user._id,
    };

    const token = jwt.sign(data, process.env.JWT_SECRET_KEY, { expiresIn: "7d" });

    res.status(201).send({ success: true, msg: "You're registered!", token, user: { id: user._id, name: user.name, email: user.email, } });


  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
}

// Route for admin login
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
      const token = jwt.sign({role: "admin"}, process.env.JWT_SECRET_KEY, {expiresIn:"7d"});
      res.json({ success: true, token });

    } else {
      res.json({ success: false, message: "Invalid Credentials!" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
}

export { loginUser, registerUser, adminLogin }