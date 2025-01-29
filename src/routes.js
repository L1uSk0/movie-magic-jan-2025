import express from 'express';
import homeController from './controllers/homeController.js'
import movieController from './controllers/movieController.js';
import castController from './controllers/castController.js';
import authController from './controllers/auth-controller.js';


const routes = express.Router();

routes.use(homeController);
routes.use('/movies',movieController);
routes.use('/casts', castController);
routes.use('/auth',authController);

routes.get('*' , (req,res) => {
    res.render('404')
})

export default routes;