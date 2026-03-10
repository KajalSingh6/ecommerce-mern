import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Database connected successfully!');
    } catch (error) {
        console.log('Database disconnected!', error);
    }
}

export default connectDB;