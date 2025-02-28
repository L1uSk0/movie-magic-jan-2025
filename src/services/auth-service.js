import User from "../models/User.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const SECRET = process.env.JWT_SECRET || 'BASICSECRET';

export default {
    async register (userData){
        //validate if password and rePass are the same
        // if(userData.password !== userData.rePassword){
        //     throw new Error('password missmatch');
        // }

        //validate if email exists
        const userCount = await User.countDocuments({email:userData.email})
        if(userCount > 0){
            throw Error('Email already exists');
        }

        return User.create(userData);
    },
    async login (email,password){
        //check if user exists
            const user = await User.findOne({email});
            if(!user){
                throw new Error('Invalid email or password');
            }

        //check password is correct
            const isValid = await bcrypt.compare(password , user.password);
            if(!isValid){
                throw new Error('Invalid password');
            }
        //generate token
        const payload = {
            id: user.id,
            email: user.email,
        };

        //TO DO : use async option
            const token = jwt.sign(payload , SECRET, {expiresIn:'2h'});
        //return token

        return token;
    }
}