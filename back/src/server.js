let http = require("http");
let getCharById = require("./controllers/getCharById");
let getCharDetail = require("./controllers/getCharDetail");

const PORT = 3001;

http
.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    if(req.url.includes("onsearch")){
        const id = req.url.split("/").pop();

        getCharById(res,id);
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