import {getPopularMovies} from "../../modules/ApiRequest.js";
import {populateTableWithMoviesForTopTen} from "../../modules/PopulateTable.js";

class PopularMovies {
    constructor(){}

    static addEventListener(button){
        button.addEventListener("click", ()=>{
            getPopularMovies().then(populateTableWithMoviesForTopTen);
    });
}
}
export default PopularMovies;