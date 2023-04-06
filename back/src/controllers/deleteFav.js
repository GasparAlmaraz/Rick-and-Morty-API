const { Favorite } = require("../DB_connection");

const deleteFav = async (req, res) => {
    try {
        const { id } = req.params;
        const favToDelete = await Favorite.findOne({ where: { id: id } });
        await favToDelete.destroy();
        const favorites = await Favorite.findAll();
        res.status(200).json(favorites);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

module.exports = deleteFav;