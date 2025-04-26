class ApiKey {
    #apikey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTJhYTQ4NGRlOWM2ZGFmZjhiYjdhYjU5ZTFjNzkxMCIsIm5iZiI6MTc0NDgyOTcyMS44NzIsInN1YiI6IjY3ZmZmZDE5Yzc3ZmQxZGY3NGFjZmUwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RWp4-JS3dN6xmJ9sIhmPffAwGcTibS42hyuJ0T7tX3o";
    constructor(){}

    getApiKey(){
        return this.#apikey;
    }

}

export default ApiKey