import express from 'express';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import 'dotenv/config';

import routes from './routes.js';
import showRatingHelper from './helpers/ratingHelper.js';
import { authMiddleware } from './middlewares/auth-middleware.js';


const app = express();

//db configuration
try {
    const defaultUri = 'mongodb://localhost:27017/magic-movies-jan2025';
    await mongoose.connect(process.env.DATABASE_URI ?? defaultUri);

    console.log('db connected successfully');
} catch (error) {
    console.log('db cannont connect to DB');
    console.error(err.message);
}

//handlebars configuration
app.engine('hbs' , handlebars.engine({
    extname:'hbs',
    runtimeOptions:{
        allowProtoMethodsByDefault :true,
    },
    helpers:{
        showRating: showRatingHelper,
    }
}));

app.set('view engine', 'hbs');
app.set('views','./src/views');

//express configuration
app.use('/static', express.static('src/public'));
app.use(express.urlencoded({extended:false})); //learn express to pars from data
app.use(cookieParser());
app.use(authMiddleware);


app.use(routes);

app.listen(5000, () => console.log('Server  is listening on https://localhost:5000...'));