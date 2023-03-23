const axios = require('axios');

const URLBASE = "https://be-a-rym.up.railway.app/api";
const APIKEY = "67f45d299611.46234457e8c467c632bb";

const succesH = (response, res)=>{
    const obj = {
        name: response.data.name,
        gender: response.data.gender,
        species: response.data.species,
        image: response.data.image,
        origin: response.data.origin
    }
    res.writeHead(200, "Content-Type: application/json");
    res.end(JSON.stringify(obj));
};

const errorH = (err, res)=>{
    res.writeHead(500, "Content-Type: text/plain");
    res.end(err.message);
}

const getCharDetail = (res, ID) => {
    
    axios.get(`${URLBASE}/character/${ID}?key=${APIKEY}`)
    .then(response => succesH(response,res))
    .catch(error => errorH(error, res))
}

module.exports = getCharDetail;
