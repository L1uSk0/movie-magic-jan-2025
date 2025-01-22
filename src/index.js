import express from 'express';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';

import routes from './routes.js';
import showRatingHelper from './helpers/ratingHelper.js';

const app = express();

//db configuration
try {
    const uri = 'mongodb://localhost:27017/magic-movies-jan2025'
    await mongoose.connect(uri);

    console.log('db connected successfully');
} catch (error) {
    console.log('db cannont connect to DB');
    console.error(err.message);
}

//handlebars configuration
app.engine('hbs' , handlebars.engine({
    extname:'hbs',
    runtimeOptions:{
        allowProtoPropertiesByDefault :true,
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

app.use(routes);

app.listen(5000, () => console.log('Server  is listening on https://localhost:5000...'));