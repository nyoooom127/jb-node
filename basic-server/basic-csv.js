require('http').createServer((req, res) => {
    res.setHeader('Content-Type', 'text/csv');
    res.writeHead(200).end("name,surname,age\ntamar,peles,20");
}).listen('8080', 'localhost');