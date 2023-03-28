const axios = require('axios');
const {URL, APIKEY} = process.env;

const getCharById = (req,res) => {
    
    const {id} = req.params;
    const URL ="https://be-a-rym.up.railway.app/api";
    const APIKEY = "67f45d299611.46234457e8c467c632bb";
    axios.get(`${URL}/character/${id}?key=${APIKEY}`)
    .then(response => {
        const {id, name, species, image, gender} = response.data
        res.status(200).json({id, name, species, image, gender});
    })
    .catch(error => res.status(500).json({error: error.message}));
}

module.exports = getCharById;
