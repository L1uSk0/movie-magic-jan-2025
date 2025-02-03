import {Schema,model , Types} from "mongoose";
import bcrypt from 'bcrypt';

const userSchema = new Schema({
    email:{
        type:String,
        match:/\@[a-zA-Z]+.[a-zA-Z]+$/,
        minLength:10,
    },
    password:{
        type:String,
        match:/^[A-Za-z0-9]+$/,
        minLength:6,
    },
});

// 
userSchema.virtual('rePassword')
.set(function(rePassword){
    if(rePassword !== this.password){
        throw new Error('Password missmatch')
    }
});

userSchema.pre('save' , async function(){
    //TODO: fix update user bug
    this.password = await bcrypt.hash(this.password , 10);
});

const User = model('User',userSchema)

export default User;