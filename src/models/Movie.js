import { ExpressHandlebars } from "express-handlebars";
import {Schema,model , Types} from "mongoose";

//create schema

const movieSchema = new Schema({
    title:{
        type:String,
        required:[true,'Title is required'],
        minLength:5,
        maxLength:250,
        match: [/^[A-Za-z 0-9]+$/ , 'Title should be alphanumeric , digits and whitespaces'],
    },
    category:String,
    genre:{
        type:String,
        required:[true,'Genre is required'],
        minLength:5,
        maxLength:250,
        match: [/^[A-Za-z 0-9]+$/ , 'Genre should be alphanumeric , digits and whitespaces'],
    },
    director:{
        type:String,
        required:[true,'Director is required'],
        minLength:5,
        maxLength:250,
        match: [/^[A-Za-z 0-9]+$/ , 'Director should be alphanumeric , digits and whitespaces'],
    },
    year:{
        type:Number,
        min:1900,
        max:2025,
    },
    imageUrl:{
        type:String,
        match:/^https?:\/\//,
    },
    rating:{
        type:Number,
        min:1,
        max:10,
    },
    description:{
        type:String,
        minLength:20,
        match:/^[A-Za-z 0-9]+$/,
    },
    casts:[{
        type:Types.ObjectId,
        ref:'Cast',
    }],
    creator:{
        type:Types.ObjectId,
        ref:'User',
    }
});

//create model

const Movie = model('Movie' , movieSchema);

export default Movie;