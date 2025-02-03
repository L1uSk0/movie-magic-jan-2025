import {Schema,model , Types } from "mongoose";
import bcrypt from 'bcrypt';

const userSchema = new Schema({
    email:{
        type:String,
        required:true,
        match:/\@[a-zA-Z]+.[a-zA-Z]+$/,
        lowercase:true,
        minLength:10,
    },
    password:{
        type:String,
        match:/^[A-Za-z0-9]+$/,
        minLength:[6, 'Password should be atleast 6 caracters'],
    },
});

// 
userSchema.virtual('rePassword')
.set(function(rePassword){
    if(rePassword !== this.password){
        throw new Error('password missmatch');
    }
});

userSchema.pre('save' , async function(){
    //TODO: fix update user bug
    this.password = await bcrypt.hash(this.password , 10);
});

const User = model('User',userSchema)

export default User;