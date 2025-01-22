// import movies from "../movies.js";
import { v4 as uuid} from 'uuid'
import Movie from '../models/Movie.js'


export default {
    getAll(filter = {}){
        let query = Movie.find({});
        // let result = movies;

        if (filter.search){
            //todo : fix partial case insensitive search
            query = query.where({ title: filter.search}); 
        }

        if(filter.genre){
            query = query.where({ genre: filter.genre});    
        }

        if(filter.year){
            query = query.where({ year: Number(filter.year)})
        }

        return query;
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