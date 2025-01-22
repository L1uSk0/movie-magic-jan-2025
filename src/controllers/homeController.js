import express from 'express';
import movieService from '../services/movie-service.js';


const router = express.Router();


router.get('/',(req,res) => {

    const movies = movieService.getAll();
    console.log(movies);
    res.render('home' ,{movies});
})
 
router.get('/about',(req,res) => {
    res.render('about');
});



export default router;