class Person {
    #Name
    #Profile_path
    #Popularity
    #Know_For_Department
    #Known_For
    #Id

    constructor(Name, Profile_path, Popularity, Know_For_Department, Known_For, id) {
        this.#Name = Name;
        this.#Profile_path = Profile_path;
        this.#Popularity = Popularity;
        this.#Know_For_Department = Know_For_Department;
        this.#Known_For = Known_For;
        this.#Name = Name;
        this.#Profile_path = Profile_path;
        this.#Popularity = Popularity;
        this.#Know_For_Department = Know_For_Department;
        this.#Known_For = Known_For;
        this.#Id = id;
    }


    getPropArray(){
        return [this.#Popularity, this.#Know_For_Department ];
    }

    getName() {
        return this.#Name;
    }

    setName(value) {
        this.#Name = value;
    }

    getProfile_path() {
        return this.#Profile_path;
    }

    setProfile_path(value) {
        this.#Profile_path = value;
    }

    getPopularity() {
        return this.#Popularity;
    }

    setPopularity(value) {
        this.#Popularity = value;
    }

    getKnow_For_Department() {
        return this.#Know_For_Department;
    }

    setKnow_For_Department(value) {
        this.#Know_For_Department = value;
    }

    getKnown_For() {
        return this.#Known_For;
    }

    setKnown_For(value) {
        this.#Known_For = value;
    }
    getId(){
        return this.#Id;
    }
    setId(id) {
        this.#Id = id;
    }
}

export default Person;