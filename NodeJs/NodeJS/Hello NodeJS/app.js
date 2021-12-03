const http = require('http');

const server = http.createServer((req,res) =>{

    res.write('HELLO NODEJS')

    res.end()
});

server.listen(3000)