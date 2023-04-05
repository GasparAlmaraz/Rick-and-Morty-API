require('dotenv').config();
const axios = require('axios');
const { URL, APIKEY } = process.env;

const getCharById = async (req, res) => {

    try {
        const { id } = req.params;
        const response = await axios.get(`${URL}/character/${id}?key=${APIKEY}`)

        const obj = {
            id: response.data.id,
            name: response.data.name,
            species: response.data.species,
            image: response.data.image,
            gender: response.data.gender
        }
        res.status(200).json(obj);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}



module.exports = getCharById;
