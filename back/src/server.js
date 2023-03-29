require('dotenv').config();

const express = require('express');
const server = express();
const PORT = 3001;
let getCharById = require("./controllers/getCharById");
let getCharDetail = require("./controllers/getCharDetail");
const router = require("./routers");
const morgan = require("morgan");
const cors = require("cors");

server.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});
server.use(express.json());
server.use(morgan("dev"));
server.use(cors());

server.use("/", router);

server.listen(PORT, () => {
    console.log("Server raised in port " + PORT);
});

module.exports = server;