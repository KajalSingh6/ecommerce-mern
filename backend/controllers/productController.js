import productModel from '../models/productModel.js';
import { v2 as cloudinary } from "cloudinary";



// fuction for add product 
const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, subCategory, sizes, bestSeller } = req.body;

        const imageUrl1 = req.files.imageUrl1 && req.files.imageUrl1[0];
        const imageUrl2 = req.files.imageUrl2 && req.files.imageUrl2[0];
        const imageUrl3 = req.files.imageUrl3 && req.files.imageUrl3[0];
        const imageUrl4 = req.files.imageUrl4 && req.files.imageUrl4[0];

        const images = [imageUrl1, imageUrl2, imageUrl3, imageUrl4].filter((item) => item !== undefined);

        let imageUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' })
                return result.secure_url
            })
        )

        const productData = {
            name,
            description,
            category,
            subCategory,
            price: Number(price),
            bestSeller: bestSeller === "true" ? true : false,
            sizes: JSON.parse(sizes),
            imageUrl: imageUrl,
            date: Date.now()
        }

        const product = new productModel(productData);
        await product.save();
        res.json({ success: true, message: "Product Added" });


    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// fuction for list product 
const listProducts = async (req, res) => {
    try {
        const products = await productModel.find({});
        res.json({ success: true, products });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// fuction for remove product 
const removeProduct = async (req, res) => {
    try {
        const product = await productModel.findById(req.params.id);

        if (!product) {
            return res.json({success: false, message: "Product not found"});
        }
        await productModel.findByIdAndDelete(req.params.id);
        res.json({ success: true, message: "Product Removed" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// fuction for single product 
const singleProduct = async (req, res) => {
    try {
        const { productId } = req.params;
        const product = await productModel.findById(productId);
        res.json({ success: true, product });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}


export { listProducts, addProduct, removeProduct, singleProduct };



