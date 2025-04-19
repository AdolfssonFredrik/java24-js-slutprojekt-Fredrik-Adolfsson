import TableEntry from "../classes/TableEntry.js";

function createTableEntry(movie) {

    const tableBody = document.querySelector("tbody");

    const tableEntry = new TableEntry(movie.original_title, movie.popularity, movie.release_date);

    tableBody.appendChild(tableEntry.createTableEntry());
}

export {createTableEntry};