const { Favorite } = require("../DB_connection");

const getFav = (req, res) => {
    try {
        const favorites = Favorite.findAll();
        res.status(200).json(favorites);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

module.exports = getFav;