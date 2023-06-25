require('http').createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200).end(JSON.stringify({ message: 'My first minimal node web server!' }));
}).listen('8080', 'localhost');