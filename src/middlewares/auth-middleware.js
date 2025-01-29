import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'BASICSECRET';

export const authMiddleware = (req, res , next) => {
    //GET token
    const token = req.cookies['auth'];

    if(!token){
        return next(); 
    }
    //Validate Token
    try {
        const decodedToken = jwt.verify(token,SECRET);

        //Attach decoded token to request
        req.user = decodedToken;
        next();
    } catch (err) {
        // TO DO : Invalid token
        res.clearCookie('auth');
        res.redirect('/auth/login');
    }


};