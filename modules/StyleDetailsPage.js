function styleWithMovieInfo(movie){
    setBackgroundImage(movie.backdrop_path);
    console.log(movie)

    document.title = `Details - ${movie.title}`;

    const titleEl = document.getElementById('title');
    checkIfNotNull(titleEl, movie.title);

    const runtimeEl = document.getElementById('runtime');
    if(movie.runtime !== null){
        const runtimeMM = movie.runtime;
        const runtimeHH = Math.floor(runtimeMM / 60);
        runtimeEl.innerText = `${runtimeHH}h ${runtimeMM%60}m`;
    }
    else{
        runtimeEl.innerText = "N/A";
    }


    const releaseDateEl = document.getElementById('releaseDate');
    checkIfNotNull(releaseDateEl, movie.release_date);

    const imdbLinkEl = document.getElementById('imdbLink');
    if(movie.imdb_id !== null) {
        imdbLinkEl.href = `https://www.imdb.com/title/${movie.imdb_id}`
    }
    else{
        imdbLinkEl.innerText = "No IMDB link found.";
    }

    const imgEl = document.getElementById('poster');
    if(movie.poster_path !== null) {
        imgEl.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    }
    else{
        imgEl.src = ".././assets/images/300px-No_image_available.svg-32520558.png";
    }

    const descriptionEl = document.getElementById('description');
    checkIfNotNull(descriptionEl, movie.overview);

    const budgetEl = document.getElementById('budget');
    if(movie.budget !== null && movie.budget !== 0){
        budgetEl.innerText = `$ ${(movie.budget).toLocaleString(undefined, { minimumFractionDigits: 2 })}`;
    }
    else{
        budgetEl.innerText = "N/A";
    }

    const revenueEl = document.getElementById('revenue');
    if(movie.revenue !== null && movie.revenue !== 0){
        revenueEl.innerText = `$ ${(movie.revenue).toLocaleString(undefined, { minimumFractionDigits: 2 })}`;
    }
    else{
        revenueEl.innerText = "N/A";
    }

    const voteAverageEl = document.getElementById('voteAverage');
    checkIfNotNull(voteAverageEl, movie.vote_average);

    const orignialLanguageEl = document.getElementById('originalLanguage');
    checkIfNotNull(orignialLanguageEl, movie.original_language);

    const genresEl = document.getElementById('genres');
    if(movie.genres.length > 0) {
        for(const genre of movie.genres){
            const genreEl = document.createElement('p');
            genreEl.classList.add('pr-2');
            if(genre !== movie.genres[movie.genres.length - 1]){

                genreEl.innerText = genre.name + ", ";

            }
            else{
                genreEl.innerText = genre.name;
            }
            genresEl.appendChild(genreEl);
        }
    }
    else{
        const genreEl = document.createElement('p');
        genreEl.innerText = 'N/A';
        genresEl.appendChild(genreEl);
    }

}

function styleWithPersonInfo(person) {
    document.title = `Details - ${person.name}`;

    const nameEl = document.getElementById('name');
    checkIfNotNull(nameEl, person.name)

    const knownForEl = document.getElementById('knownFor');
    checkIfNotNull(knownForEl, person.known_for_department)


    const birthDayEl = document.getElementById('birthDay');
    if(person.birthday !== null){
        birthDayEl.innerText = "Born on: " + person.birthday;
    }
    else{
        birthDayEl.innerText = "Born on: N/A";
    }

    if (person.deathday !== null) {
        const deathdayEl = document.getElementById('deathday');
        deathdayEl.innerText = `Died on: ${person.deathday}`
    }

    const imdbLinkEl = document.getElementById('imdbLink');
    if(person.imdb_id !== null) {
        imdbLinkEl.href = `https://www.imdb.com/name/${person.imdb_id}`
    }
    else{
        imdbLinkEl.innerText = "No IMDB link found.";
    }

    const imgEl = document.getElementById('img');
    if(person.profile_path !== null) {
        imgEl.src = `https://image.tmdb.org/t/p/w500${person.profile_path};`
    }
    else{
        imgEl.src = ".././assets/images/300px-No_image_available.svg-32520558.png";
    }

    const biographyEl = document.getElementById('biography');
    checkIfNotNull(biographyEl, person.biography);

    const placeOfBirthEl = document.getElementById('placeOfBirth');
    checkIfNotNull(placeOfBirthEl, person.place_of_birth);

    const popularityEl = document.getElementById('popularity');
    checkIfNotNull(popularityEl, person.popularity);
}

function setBackgroundImage(imagePath){
    document.body.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500${imagePath})`;
}

function checkIfNotNull(element, variable){
    if(variable === null || variable === 0 || variable === '' || variable === undefined){
        element.innerText = 'N/A';
    }
    else{
        element.innerText = variable;
    }
}

export { styleWithMovieInfo , styleWithPersonInfo };