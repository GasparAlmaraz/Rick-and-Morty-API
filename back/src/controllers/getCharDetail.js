const axios = require('axios');

const URLBASE = process.env.URL;
const APIKEY = process.env.APIKEY;

const succesH = (response, res)=>{
    const obj = {
        name: response.data.name,
        gender: response.data.gender,
        species: response.data.species,
        image: response.data.image,
        origin: response.data.origin
    }
    res.json(obj);
};

const errorH = (err, res)=>{
    res.status(500).json(err);
}

const getCharDetail = (req, res) => {
    
    const params = req.params;
    const ID = params.id;
    axios.get(`${URLBASE}/character/${ID}?key=${APIKEY}`)
    .then(response => succesH(response,res))
    .catch(error => errorH(error, res))
}

module.exports = getCharDetail;
