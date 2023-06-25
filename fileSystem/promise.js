const fs = require('fs/promises');

(async () => {
    try {
        const content = await fs.readFile('read.txt', 'utf8');
        console.log(content);
    } catch (err) {
        console.log(err);
    }
})();