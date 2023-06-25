const fs = require('fs');

try {
    console.log(fs.readFileSync('read.txt', 'utf8'));
} catch (err) {
    console.log(err);
}