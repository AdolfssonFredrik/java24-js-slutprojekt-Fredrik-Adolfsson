import Movie from "./Movie.js"

class MovieTableEntry {
    #movie
    constructor(title, popularity, releaseDate, poster_path, id, description) {
        this.#movie = new Movie(title, popularity, releaseDate, poster_path, id, description);
    }

    createMovieTopTenTableEntry(){

        const entry = document.createElement("tr");

        const poster = document.createElement("img");
        if(this.#movie.getPosterPath() === null || this.#movie.getPosterPath() === "" ){
            poster.src = "./../assets/images/300px-No_image_available.svg-32520558.png";
        }
        else{
            poster.src = `https://image.tmdb.org/t/p/w500${this.#movie.getPosterPath()}`;
        }
        poster.alt = "Poster For " + this.#movie.getTitle();
        poster.id = "moviePoster"
        const posterEntry = document.createElement("td");
        posterEntry.appendChild(poster);
        entry.appendChild(posterEntry);

        const detailsLink = document.createElement("a");
        detailsLink.href = `./pages/DetailsForMovie.html?type=movie&id=${this.#movie.getId()}`;
        detailsLink.innerText = this.#movie.getTitle();
        const titleEl = document.createElement("td");
        titleEl.appendChild(detailsLink);
        entry.appendChild(titleEl);

        for(const movieData of this.#movie.getPropArray()){
            const data = document.createElement("td");
            data.innerText = movieData;
            entry.appendChild(data);
        }

        const stars = document.createElement("td");
        for(let i = 0; i < this.#movie.getVoteAverage(); i++){
            const fullStar = document.createElement("i");
            fullStar.classList.add("fa-solid");
            fullStar.classList.add("fa-star");
            stars.appendChild(fullStar);
        }
        for(let i = 0; i < 10-this.#movie.getVoteAverage(); i++){
            const emptyStar = document.createElement("i");
            emptyStar.classList.add("fa-regular");
            emptyStar.classList.add("fa-star");
            stars.appendChild(emptyStar);
        }


        entry.appendChild(stars);

        return entry;
    }

    createMovieSearchTableEntry(){
        const entry = this.createMovieTopTenTableEntry();

        const description = document.createElement("td");
        description.appendChild(document.createTextNode(this.#movie.getDescription()));
        entry.appendChild(description);

        return entry;
    }

}
export default MovieTableEntry;

