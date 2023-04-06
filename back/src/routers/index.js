const { Router } = require("express");
const router = Router();
const { login, postUser, getCharById, getCharDetail, postFav, getFav, deleteFav } = require("../controllers");



router.get("/login", login);
router.post("/login", postUser);

router.get("/onsearch/:id", getCharById);

router.get("/detail/:id", getCharDetail);

router.post("/rickandmorty/fav", postFav);


router.get('/rickandmorty/fav', getFav);

router.delete('/rickandmorty/fav/:id', deleteFav);
module.exports = router;