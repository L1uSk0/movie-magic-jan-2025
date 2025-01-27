// import movies from "../movies.js";
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

        const result = Movie.create({ 
            ...movieData,
            rating: Number(movieData.rating),
            year:Number(movieData.year),
        });
        return result;
    },

   async  attachCast(movieId , castId){
    const movie = await Movie.findById(movieId);
    movie.casts.push(castId);
    await movie.save();

    return movie;
    }
    
}