const http = require('http');

const server = http.createServer((req,resp)=>{
    resp.writeHead(200,{"Content-type":"text/plain"});
    resp.write("hola");
    resp.end();

});


server.listen(8080);

