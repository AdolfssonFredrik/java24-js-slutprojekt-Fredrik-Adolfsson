import ApiKey from "../classes/api/ApiKey.js";

async function getTopRatedMovies() {
    try{
        return fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + new ApiKey().getApiKey(),
            }
        })
            .then(response => {
                console.log(response);
                if(response.ok) return response.json();
                throw Error("Something went wrong!");
            })
            .then(json => {
                if(json.results.length > 0) return json.results;
                throw Error("No results found!");
            })
            .catch(alert);
    }
    catch(err) {
        alert("Something went wrong!");
    }



}

async function getPopularMovies(){
    try{
        return fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + new ApiKey().getApiKey(),
            }
        })
            .then(response => {
                if(response.ok) return response.json();
                throw new Error("Something went wrong!");
            })
            .then(json => {
                if(json.results.length > 0) return json.results;
                throw new Error("No results found!");
            })
            .catch(alert);
    }
    catch (err){
        alert("Something went wrong!");
    }

}

async function searchMovies(searchInput){
    try{
        return fetch(`https://api.themoviedb.org/3/search/movie?query=${searchInput}&include_adult=false&language=en-US&page=1`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + new ApiKey().getApiKey(),
            }
        })
            .then(response => {
                if(response.ok) return response.json();
                throw new Error("Something went wrong!");
            })
            .then(json => {
                if(json.results.length > 0) return json.results;
                throw new Error("No results found!");
            })
            .catch(alert);
    }
    catch(err){
        alert("Something went wrong!");
    }
}


async function searchPerson(searchInput){
    try{
        return fetch(`https://api.themoviedb.org/3/search/person?query=${searchInput}&include_adult=false&language=en-US&page=1`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + new ApiKey().getApiKey(),
            }
        })
            .then(response => {
                if(response.ok) return response.json();
                throw new Error("Something went wrong!");
            })
            .then(json => {
                if(json.results.length > 0) return json.results;
                throw new Error("No results found!");
            })
            .catch(alert);
    }
    catch (err){
        alert("Something went wrong!");
    }
}

async function getMovieById(movieId){
    try{
        return fetch(`https://api.themoviedb.org/3/movie/${movieId}?append_to_response=1&language=en-US`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + new ApiKey().getApiKey(),
            }
        } )
            .then(response => {
                if(response.ok) return response.json();
                throw new Error("Something went wrong!");
            })
            .then(json => {
                return json;
            })
            .catch(alert);
    }
    catch(error){
        alert("Something went wrong!");
    }

}

async function getPersonById(personId){
    try{
        return fetch(`https://api.themoviedb.org/3/person/${personId}?append_to_response=1&language=en-US`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + new ApiKey().getApiKey(),
            }
        } )
            .then(response => {
                if(response.ok) return response.json();
                throw new Error("Something went wrong!");
            })
            .then(json => {
                return json;
            })
            .catch(alert);
    }
    catch (error){
        alert("Something went wrong!");
    }
}
export { getTopRatedMovies, getPopularMovies, searchMovies, searchPerson, getMovieById, getPersonById };