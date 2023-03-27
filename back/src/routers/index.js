const { Router } = require("express");
let getCharById = require("../controllers/getCharById");
let getCharDetail = require("../controllers/getCharDetail");
const router = Router();
const favs = require('../utils/favs');

router.get("/onsearch/:id", (req, res) => {
    getCharById(req, res);
});

router.get("/detail/:id", (req, res) => {
    getCharDetail(req, res);
});

router.post("/rickandmorty/fav", (req, res) => {
    const character = req.body;
    favs.push(character);
    res.status(201).json({ message: 'Character added to favorites.' });
});


router.get('/fav', (req, res) => {
    res.json(favs);
});


router.delete('/fav/:id', (req, res) => {
    const id = req.params.id;
    const index = favs.findIndex((character) => character.id == id);
    if (index !== -1) {
        favs.splice(index, 1);
        res.json({ message: 'Character removed from favorites.' });
    } else {
        res.status(404).json({ error: 'Character not found in favorites.' });
    }
});
module.exports = router;