const axios = require('axios');

const URLBASE = "https://be-a-rym.up.railway.app/api";
const APIKEY = "67f45d299611.46234457e8c467c632bb"

const getCharDetail = (req, res) => {
    
    const {id} = req.params;
    axios.get(`${URLBASE}/character/${id}?key=${APIKEY}`)
    .then(response => {
        const {id, name, species, image, gender, origin} = response.data
        res.status(200).json({id, name, species, image, gender, origin});
    })
    .catch(error => res.status(500).json({error: error.message}));
}

module.exports = getCharDetail;
