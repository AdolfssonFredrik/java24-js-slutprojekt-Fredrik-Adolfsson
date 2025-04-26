import {createForm} from "./modules/Form.js";
import PopularMovies from "./classes/movie/PopularMovies.js";
import TopRatedMovies from "./classes/movie/TopRatedMovies.js";

const buttons = document.querySelectorAll("button");

createForm();

TopRatedMovies.addEventListener(buttons[0]);
PopularMovies.addEventListener(buttons[1]);
