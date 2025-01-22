import { ExpressHandlebars } from "express-handlebars";
import {Schema,model} from "mongoose";

//create schema

const movieSchema = new Schema({
    title:String,
    category:String,
    genre:String,
    director:String,
    year:Number,
    imageUrl:String,
    rating:Number,
    description:String,
});

//create model

const Movie = model('Movie' , movieSchema);

export default Movie;