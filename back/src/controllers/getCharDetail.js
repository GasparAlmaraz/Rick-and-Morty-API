const axios = require('axios');

const URLBASE = "https://be-a-rym.up.railway.app/api";
const APIKEY = "67f45d299611.46234457e8c467c632bb"

const getCharDetail = async (req, res) => {
    
    try {
        const { id } = req.params;
        const URL = "https://be-a-rym.up.railway.app/api";
        const APIKEY = "67f45d299611.46234457e8c467c632bb";
        const response = await axios.get(`${URL}/character/${id}?key=${APIKEY}`)

        const obj = {
            id: response.data.id,
            name: response.data.name,
            species: response.data.species,
            image: response.data.image,
            gender: response.data.gender,
            origin: response.data.origin
        }
        res.status(200).json(obj);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = getCharDetail;
