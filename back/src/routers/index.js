const { Router } = require("express");
let getCharById = require("../controllers/getCharById");
let getCharDetail = require("../controllers/getCharDetail");
const router = Router();
let favs = require('../utils/favs');

router.get("/onsearch/:id", getCharById);

router.get("/detail/:id", getCharDetail);

router.post("/rickandmorty/fav", (req, res) => {
    const character = req.body;
    favs.push(character);
    res.status(201).json({ message: 'Character added to favorites.' });
});


router.get('/rickandmorty/fav', (req, res) => {
    res.status(200).json(favs);
});


router.delete('/rickandmorty/fav/:id', (req, res) => {
    const id = req.params.id;
    const fav = favs.filter(fav => fav.id !== id);
    res.status(200).json(fav);
    
});
module.exports = router;