// import movies from "../movies.js";
import { v4 as uuid} from 'uuid'
import Movie from '../models/Movie.js'


export default {
    getAll(filter = {}){
        let result = Movie.find({});
        // let result = movies;

        // if (filter.search){
        //     result = result.filter(movie => movie.title.toLowerCase().includes(filter.search.toLowerCase())); 
        // }

        // if(filter.genre){
        //     result = result.filter(movie => movie.genre.toLowerCase() === filter.genre.toLowerCase());    
        // }

        // if(filter.year){
        //     result = result.filter(movie => movie.year === filter.year);
        // }

        return result;
    },

    getOne(movieId){
        const result = Movie.findById(movieId);

        return result;
    },
    create(movieData){

        const newId = uuid();

        //todo add IDs
        movies.push({
            id:newId,
            ...movieData,
            rating: Number(movieData.rating),
        });
        return newId;
    }
    
}