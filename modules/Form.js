import {searchPerson, searchMovies} from "./ApiRequest.js";
import {populateTableWithMoviesForSearch, populateTableWithPeople} from "./PopulateTable.js";

function createForm(){
    const forms = document.querySelectorAll('form');

    forms[0].addEventListener('submit', (e) => {
        e.preventDefault();
        const input = forms[0].querySelector('input');
        const list = forms[0].querySelector('select');

        switch(list.value){
            case "movie":

                searchMovies(input.value)
                    .then(populateTableWithMoviesForSearch)
                break;
            case "person":
                searchPerson(input.value)
                    .then(populateTableWithPeople);
        }
    })
}

export { createForm };