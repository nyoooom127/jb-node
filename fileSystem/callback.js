const fs = require('fs');

fs.readFile('read.txt', 'utf8', (err, content) => {
    if (err) {
        return console.log(err);
    }
    return console.log(content);
});