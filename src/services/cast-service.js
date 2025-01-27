import Cast from "../models/Cast.js";

export default {
    getAll(){
        return Cast.find({});
    },
    create(castData){
        //todo create cast return
        return Cast.create(castData);

    }
};