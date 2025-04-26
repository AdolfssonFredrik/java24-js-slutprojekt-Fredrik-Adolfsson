import {getTopRatedMovies} from "../../modules/ApiRequest.js";
import {populateTableWithMoviesForTopTen} from "../../modules/PopulateTable.js";

class TopRatedMovies{
    constructor(){}

    static addEventListener(button){
        button.addEventListener("click",()=>{
            getTopRatedMovies().then(populateTableWithMoviesForTopTen);
        })
    }
}

export default TopRatedMovies;