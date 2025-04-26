import Person from "./Person.js";
class PersonTableEntry {
    #Person
    constructor(Name, Profile_path, Popularity, Know_For_Department, Known_For, id) {
        this.#Person = new Person(Name, Profile_path, Popularity, Know_For_Department, Known_For, id);
    }

    createPersonSearchTableEntry() {
        const entry = document.createElement("tr");


        const poster = document.createElement("img");
        if(this.#Person.getProfile_path() === null || this.#Person.getProfile_path() === "" ){
            poster.src = "./../assets/images/300px-No_image_available.svg-32520558.png";
        }
        else{
            poster.src = `https://image.tmdb.org/t/p/w500${this.#Person.getProfile_path()}`;
        }
        poster.alt = "Picture For " + this.#Person.getName();
        poster.id = "moviePoster"
        const posterEntry = document.createElement("td");
        posterEntry.appendChild(poster);
        entry.appendChild(posterEntry);

        const detailsLink = document.createElement("a");
        detailsLink.href = `./pages/DetailsForPerson.html?type=person&id=${this.#Person.getId()}`;
        detailsLink.innerText = this.#Person.getName();
        const titleEl = document.createElement("td");
        titleEl.appendChild(detailsLink);
        entry.appendChild(titleEl);


        for(const movieData of this.#Person.getPropArray()){
            const data = document.createElement("td");
            data.innerText = movieData;
            entry.appendChild(data);
        }

        const knowForEntry = document.createElement("td");
        knowForEntry.classList.add("knowFor");
        if(this.#Person.getKnown_For().length === 0){
            const p = document.createElement("p");
            p.innerText = "This person does not have any media attributed to them.";
            knowForEntry.appendChild(p);
        }else{
            for(const media of this.#Person.getKnown_For()){
                const p = document.createElement("p");
                if(media.title === undefined){
                    p.innerText = "Tv - " + media.name;
                }
                else{
                    p.innerText = "Movie - " + media.title;
                }
                knowForEntry.appendChild(p);
            }
        }
        entry.appendChild(knowForEntry);

        return entry;
    }
}
export default PersonTableEntry;