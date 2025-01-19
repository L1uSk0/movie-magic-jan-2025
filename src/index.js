import express from 'express';
import handlebars from 'express-handlebars';
import homeControler from './controllers/homeController.js'

const app = express();

app.engine('hbs' , handlebars.engine({
    extname:'hbs',
}));

app.set('view engine', 'hbs');
app.set('views','./src/views');

app.use(homeControler);

app.use('/static', express.static('src/public'));



app.get('*' , (req,res) => {
    res.render('404')
})

app.listen(5000, () => console.log('Server  is listening on https://localhost:5000...'));