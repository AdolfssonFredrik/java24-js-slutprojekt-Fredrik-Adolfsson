import Movie from"./Movie.js"

class MovieTableEntry {
    #movie
    constructor(title, popularity, releaseDate) {
        this.#movie = new Movie(title, popularity, releaseDate);
    }

    createTableEntry(){
        const entry = document.createElement("tr");

        for(const movieData of this.#movie.getPropArray()){
            const data = document.createElement("td");
            data.innerText = movieData;
            entry.appendChild(data);
        }

        return entry;
    }


    getMovie(){
        return this.#movie;
    }

    setMovie(movie) {
        this.#movie = movie;
    }
}
export default MovieTableEntry;

