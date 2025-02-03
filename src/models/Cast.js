import {Schema,model} from "mongoose";

const castSchema = new Schema({
    name:{
        type:String,
        required:[true,'Name is required'],
        minLength:5,
        match: [/^[A-Za-z 0-9]+$/ , 'Name should be alphanumeric , digits and whitespaces'],
    },
    age:{
        type:Number,
        min:0,
        max:120,
       },
    born:{
        type:String,
        min:10,
        match: /^[A-Za-z 0-9]+$/,
       },
    imageUrl:{
        type:String,
        match:/^https?:\/\//,
    },
    
});

//create model

const Cast = model('Cast' , castSchema);

export default Cast;