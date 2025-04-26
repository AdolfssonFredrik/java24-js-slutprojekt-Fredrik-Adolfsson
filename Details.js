import {getMovieById, getPersonById} from "./modules/ApiRequest.js";
import {styleWithPersonInfo, styleWithMovieInfo} from "./modules/StyleDetailsPage.js";

let paramString = window.location.href.split('?')[1];
let queryString = new URLSearchParams(paramString);

let type;
for (let pair of queryString.entries()) {
    if(pair[0] === "type" && pair[1] === "movie") {
        type = "movie";
    }
    else if(pair[0] === "type" && pair[1]=== "person") {
        type = "person";
    }
    if(type === "movie" && pair[0] === "id") {
        getMovieById(pair[1]).then(styleWithMovieInfo);
    }
    else if(type === "person" && pair[0] === "id") {
        getPersonById(pair[1]).then(styleWithPersonInfo);
    }
}
