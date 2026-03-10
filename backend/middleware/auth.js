import jwt from 'jsonwebtoken';

const authUser = async (req, res, next)=> {

    const token = req.headers.authorization;

    if (!token) {
        return res.json({success: false, message: "Not Authorized Login Again!"});
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.userId = decoded.id;
        next();

    } catch (error) {
        console.log(error);
        res.json({success:false, message: error.message});
    }
}

export default authUser;