import MovieTableEntry from "../classes/movie/MovieTableEntry.js";
import PersonTableEntry from "../classes/person/PersonTableEntry.js";
function makeMovieTopTenTableEntry(movie) {

    const tableBody = document.querySelector("tbody");

    const tableEntry = new MovieTableEntry(movie.title, Math.floor(movie.vote_average), movie.release_date, movie.poster_path, movie.id);

    tableBody.appendChild(tableEntry.createMovieTopTenTableEntry());
}

function makeMovieSearchTableEntry(movie){
    const tableBody = document.querySelector("tbody");

    const tableEntry = new MovieTableEntry(movie.title, Math.floor(movie.vote_average), movie.release_date, movie.poster_path, movie.id, movie.overview);

    tableBody.appendChild(tableEntry.createMovieSearchTableEntry());
}

function makePersonTableEntry(person) {
    const tableBody = document.querySelector("tbody");

    const tableEntry = new PersonTableEntry(person.name, person.profile_path, person.popularity, person.known_for_department, person.known_for, person.id);

    tableBody.appendChild(tableEntry.createPersonSearchTableEntry());
}

export {makeMovieTopTenTableEntry, makeMovieSearchTableEntry, makePersonTableEntry};