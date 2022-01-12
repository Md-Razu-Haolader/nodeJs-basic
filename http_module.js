const httpModule = require('http');
const server = httpModule.createServer((req, res) => {
    if(req.url === '/'){
        res.write('You are on home page');
        res.end();

    }else if(req.url === '/product'){
        res.write('You are on product page');
        res.end();
    }
});

server.on('connection', (socket) => {
    console.log('Connection start..');
});

server.listen(3000);

console.log('Listening on port 3000');