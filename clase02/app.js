const http = require('http');

const server = http.createServer((req,resp)=>{
    resp.writeHead(200,{"Content-type":"application/json"});
    resp.write('');
    resp.end();

});


server.listen(8080);

