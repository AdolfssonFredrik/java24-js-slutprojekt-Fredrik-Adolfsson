async function getTopRatedMovies(accessToken) {
    return fetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + accessToken,
        }
    })
        .then(response => response.json())
        .then(json => {
            console.log(json);
            return json.results;
        })

}

export { getTopRatedMovies };