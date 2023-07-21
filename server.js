const http = require("http");
const getReq = require("./methods/get-request");
let movies = require("./data/movies.json");
require("dotenv").config();

const PORT = process.env.PORT || 5001;

const server = http.createServer((req, res) => {
    req.movies = movies;
    switch(req.method){
        case "GET":
            getReq(req, res);
            break;
        case "POST":
            postReq(req, res);
            break;
        case "DELETE":
            deleteReq(req, res);
            break;
        case "PUT":
            putReq(req, res);
            break;
        default:
            res.statusCode = 404;
            res.setHeader("Content-Type", "application/json");
            res.write(JSON.stringify({
                title: "Not found",
                message: "Belajar Node JS",
            }));
            res.end();
    }
    
    
});
// console.log(PORT);

server.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});