const { createServer } = require('http');

const HOST = 'localhost';
const PORT = '8080';

const requestListener = function (req, res) {
    if (req.url === '/name' && req.method === 'POST') {
        res.writeHead(200);
        res.end('name');
    } else if (req.url === '/age' && req.method === 'GET') {
        res.writeHead(200);
        res.end('age');
    } else {
        res.writeHead(404).end();
    }
};

const server = createServer(requestListener);

server.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});