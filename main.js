import {createForm} from "./modules/Form.js";
import {makeApiRequest} from "./modules/ApiRequest.js";
import {createTableEntry} from "./modules/MakeTableEntry.js";
require("dotenv").config();

const apiKey = process.env.API_KEY;

const results = await makeApiRequest(accessToken);
console.log(results);


for(const data of results) {
    createTableEntry(data);
}

createForm();
