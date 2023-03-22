const axios = require('axios');

const URL = "https://rickandmortyapi.com/api/character";

const getCharById = (res, ID) => {
    
    axios.get(`${URL}/${ID}`)
    .then((res)=>{
        const obj = {
            id: res.data.id,
            image: res.data.image,
            name: res.data.name,
            gender: res.data.gender,
            species: res.data.species
        }
        res.writeHead(200, "Content-Type: application/json");
        res.end(JSON.stringify(obj));
    })
    .catch((err)=>{
        res.writeHead(500, "Content-Type: text/plain");
        res.end(err.message);
    })
}

module.exports = {
    getCharById
}