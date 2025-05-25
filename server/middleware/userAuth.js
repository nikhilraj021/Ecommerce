import jwt from 'jsonwebtoken';

const userAuth = async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return res.status(401).json({ success: false, message: "Unauthorized, Login Again" });
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
        if (tokenDecode.id) {
            // Ensure req.body exists before setting properties on it
            if (!req.body) req.body = {};
            req.body.userId = tokenDecode.id;
        } else {
            return res.status(401).json({ success: false, message: "Unauthorized, Login Again" });
        }

        next();

    } catch (error) {
        return res.status(401).json({ success: false, message: error.message });

    }
}

export default userAuth;