import userModel from "../models/userModel.js";


// add products to user cart
const addToCart = async (req, res) => {
    try {
        const { itemId, size } = req.body;
        const userId = req.userId;

        const userData = await userModel.findById(userId);
        let cartData = await userData.cartData;

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }

        await userModel.findByIdAndUpdate(userId, { cartData });

        res.json({ success: true, message: "Added To Cart" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}


// update user cart
const updateCart = async (req, res) => {
    try {
        const { itemId, size, quantity } = req.body;
        const userId = await req.userId;

        const userData = await userModel.findById(userId);
        let cartData = await userData.cartData;

        cartData[itemId][size] = quantity;

        await userModel.findByIdAndUpdate(userId, { cartData });
        res.json({ success: true, message: "Added To Cart" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });

    }
}


// get user cart data
const getUserCart = async (req, res) => {
    try {
        const userId = req.userId;

        const userData = await userModel.findById(userId);
        let cartData = await userData.cartData;

        res.json({ success: true, cartData });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });

    }
}

export { addToCart, updateCart, getUserCart };


// import userModel from "../models/userModel.js";

// // Add product to cart
// const addToCart = async (req, res) => {
//     try {
//         const { itemId, size } = req.body;
//         const userId = req.userId;

//         const userData = await userModel.findById(userId);
//         let cartData = userData.cartData;

//         if (cartData[itemId]) {
//             cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;
//         } else {
//             cartData[itemId] = { [size]: 1 };
//         }

//         await userModel.findByIdAndUpdate(userId, { cartData });

//         res.json({ success: true, message: "Added To Cart", cartData });

//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: error.message });
//     }
// }

// // Update cart item quantity
// // const updateCart = async (req, res) => {
// //     try {
// //         const { itemId, size, quantity } = req.body;
// //         const userId = req.userId;

// //         const userData = await userModel.findById(userId);
// //         let cartData = userData.cartData;

// //         if (!cartData[itemId]) cartData[itemId] = {};
// //         cartData[itemId][size] = quantity;

// //         await userModel.findByIdAndUpdate(userId, { cartData });
// //         res.json({ success: true, message: "Quantity Updated", cartData });

// //     } catch (error) {
// //         console.log(error);
// //         res.json({ success: false, message: error.message });
// //     }
// // }

// const updateCart = async (req, res) => {
//   try {
//     const { itemId, size, quantity } = req.body;
//     const userId = req.userId;

//     const user = await userModel.findById(userId);
//     user.cartData[itemId][size] = quantity;

//     await user.save();
//     res.json({ success: true });

//   } catch (err) {
//     res.json({ success: false, message: err.message });
//   }
// };


// // Remove item from cart
// const removeCartItem = async (req, res) => {
//     try {
//         const { itemId, size } = req.body;
//         const userId = req.userId;

//         const userData = await userModel.findById(userId);
//         let cartData = userData.cartData;

//         if (cartData[itemId]) {
//             delete cartData[itemId][size];
//             if (Object.keys(cartData[itemId]).length === 0) delete cartData[itemId];
//         }

//         await userModel.findByIdAndUpdate(userId, { cartData });
//         res.json({ success: true, message: "Item Removed", cartData });

//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: error.message });
//     }
// }

// // Get user cart data
// const getUserCart = async (req, res) => {
//     try {
//         const userId = req.userId;

//         const userData = await userModel.findById(userId);
//         let cartData = userData.cartData;

//         res.json({ success: true, cartData });

//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: error.message });
//     }
// }

// export { addToCart, updateCart, removeCartItem, getUserCart };
