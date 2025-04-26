import {makeMovieSearchTableEntry, makeMovieTopTenTableEntry, makePersonTableEntry} from "./MakeTableEntry.js";

function makeTableHeader(tableHeaders){
    const tableHeadEl = document.querySelector("tr");
    tableHeadEl.innerHTML = "";

    for(const header of tableHeaders) {
        const row = document.createElement("th");
        row.innerText = header;
        tableHeadEl.appendChild(row);
    }
}
function sortTableEntries(tableEntries){
    const table = document.querySelectorAll('form');
    const sortChoice = table[1].querySelector('select').value;
    switch(sortChoice){
        case "name_asc":
            if(tableEntries[0].title === undefined){
                return tableEntries.sort(function(a, b){
                    if(a.name < b.name){
                        return -1;
                    }
                    if(a.name > b.name){
                        return 1;
                    }
                    return 0;
                });
            }
            else{
                return tableEntries.sort(function(a, b){
                    if(a.title < b.title){
                        return -1;
                    }
                    if(a.title > b.title){
                        return 1;
                    }
                    return 0;
                });
                            }
        case "name_desc":
            if(tableEntries[0].title === undefined){
                return tableEntries.sort(function(a, b){
                    if(a.name < b.name){
                        return 1;
                    }
                    if(a.name > b.name){
                        return -1;
                    }
                    return 0;
                });
            }
            else{
                return tableEntries.sort(function(a, b){
                    if(a.title < b.title){
                        return 1;
                    }
                    if(a.title > b.title){
                        return -1;
                    }
                    return 0;
                });
            }
        case "popularity_asc":
            if(tableEntries[0].vote_average === undefined){
                return tableEntries.sort(function(a, b){
                    return parseFloat(a.popularity) - parseFloat(b.popularity);
                });
            }
            else{
                return tableEntries.sort(function(a, b){
                    return parseFloat(a.vote_average) - parseFloat(b.vote_average);
                });
            }
        case "popularity_desc":
            if(tableEntries[0].vote_average === undefined){

                return tableEntries.sort(function(a, b){
                    return parseFloat(a.popularity) + parseFloat(b.popularity);
                });
            }
            else{
                return tableEntries.sort(function(a, b){
                    return parseFloat(a.vote_average) + parseFloat(b.vote_average);
                });
            }
        default:
            return tableEntries;
    }
}
function checkIfEmpty(arr){
    if(arr.length === 0 ){
        alert("There were no results!");
        return true;
    }
    return false;
}
function populateTableWithMoviesForTopTen(movies) {
    if(!checkIfEmpty(movies)){
        movies = sortTableEntries(movies);
        const tableHeaders = ["Poster", "Title", "Release Date", "Rating"];

        makeTableHeader(tableHeaders);

        document.querySelector("tbody").innerHTML = "";
        for(const entry of movies){
            makeMovieTopTenTableEntry(entry);
        }
    }

}

function populateTableWithMoviesForSearch(movies) {
    if(!checkIfEmpty(movies)){
        movies = sortTableEntries(movies);
        const tableHeaders = ["Poster", "Title", "Release Date", "Rating", "Description"];

        makeTableHeader(tableHeaders);

        document.querySelector("tbody").innerHTML = "";
        for(const entry of movies){
            makeMovieSearchTableEntry(entry);
        }
    }
}

function populateTableWithPeople(people) {
    if(!checkIfEmpty(people)) {
        people = sortTableEntries(people);

        const tableHeaders = ["Picture", "Name", "Popularity", "Department", "Known For"];

        makeTableHeader(tableHeaders);

        document.querySelector("tbody").innerHTML = "";
        for (const entry of people) {
            makePersonTableEntry(entry);
        }
    }
}

export {populateTableWithMoviesForTopTen, populateTableWithMoviesForSearch, populateTableWithPeople};