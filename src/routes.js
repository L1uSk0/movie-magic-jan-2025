import express from 'express';
import homeController from './controllers/homeController.js'

const routes = express.Router();

routes.use(homeController);

routes.get('*' , (req,res) => {
    res.render('404')
})

export default routes;