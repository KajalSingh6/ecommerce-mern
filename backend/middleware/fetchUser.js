import jwt from 'jsonwebtoken';

const fetchUser = (req, res, next) => {

    const token = req.headers.authorization;
    if (!token) {
        return res.json({ success: false, message: "Not Authorized Login Again!" });
    }

    try {
        const data = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = data;
        next();
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export default fetchUser;