let http = require("http");
let fs = require("fs");
let data = require("./utils/data");
let {getCharById} = require("./controllers/getCharById");
let {getCharDetail} = require("./controllers/getCharDetail");

const PORT = 3001;

http
.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    if(req.url.includes("onsearch")){
        const id = req.url.split("/").pop();

        getCharById(res,id);

        // const character = data.find((c) => c.id == id);

        // if (character) {
        //     res.setHeader("Content-Type", "application/json");
        //     res.end(JSON.stringify(character));
        // } else {
        //     res.statusCode = 404;
        //     res.end("Personaje no encontrado");
        // }
    } else if(req.url.includes("detail")){
        const id = req.url.split("/").pop();
        getCharDetail(res,id);
    } else {
        res.statusCode = 404;
        res.end("Recurso no encontrado");
    }
})
.listen(PORT, "localhost")
;