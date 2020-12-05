const http = require('http')
const fs = require('fs') 

const server = http.createServer((req,resp)=>{
    
    if (req.method === "GET" && req.url === "/") {
        return index(req,resp)
    }
    
    resp.write("hola");
    resp.end();

});




function index(req,resp) {
    
    const stat = fs.statSync('./index.html');
    resp.writeHead(200,{
        'Content-type':'text/html',
        'Content-Length':stat.size
    })

    const readStream = fs.createReadStream('./index.html')

    readStream.pipe(resp)
}

server.listen(8080);