class Movie {
    #Title
    #VoteAverage
    #ReleaseDate
    #PosterPath
    #Description
    #Id
    constructor(title, voteAverage, releaseDate, posterPath, id, description) {
        this.#Title = title;
        this.#VoteAverage = voteAverage;
        this.#ReleaseDate = releaseDate;
        this.#PosterPath = posterPath;
        if(description){
            this.#Description = description;
        }
        this.#Id = id;
    }

    getPropArray(){
        return [this.#ReleaseDate];
    }


    getTitle() {
        return this.#Title;
    }

    setTitle(value) {
        this.#Title = value;
    }

    getVoteAverage() {
        return this.#VoteAverage;
    }

    setVoteAverage(value) {
        this.#VoteAverage = value;
    }

    getReleaseDate() {
        return this.#ReleaseDate;
    }

    setReleaseDate(value) {
        this.#ReleaseDate = value;
    }

    getPosterPath() {
        return this.#PosterPath;
    }

    setPosterPath(value) {
        this.#PosterPath = value;
    }

    getDescription() {
        return this.#Description;
    }

    setDescription(value) {
        this.#Description = value;
    }
    getId() {
        return this.#Id;
    }
    setId(id) {
        this.#Id = id;
    }
}

export default Movie;