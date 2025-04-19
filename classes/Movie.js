class Movie {
    #Title
    #Popularity
    #ReleaseDate
    constructor(title, popularity, releaseDate) {
        this.#Title = title
        this.#Popularity = popularity
        this.#ReleaseDate = releaseDate
    }

    getPropArray(){
        return [this.#Title, this.#Popularity, this.#ReleaseDate];
    }

    getTitle() {
        return this.#Title
    }
    getPopularity() {
        return this.#Popularity
    }
    getReleaseDate() {
        return this.#ReleaseDate
    }

    setTitle(title) {
        this.#Title = title
    }
    setPopularity(popularity) {
        this.#Popularity = popularity
    }
    setReleaseDate(releaseDate) {
        this.#ReleaseDate = releaseDate
    }
}

export default Movie;