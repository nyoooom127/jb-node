const howManyCandlesCallback = (dayNumber, callback) => {
    if (dayNumber < 1) {
        return callback('day cannot be smaller than 1');
    }

    if (dayNumber > 8) {
        return callback('No Isro Chag for Hannukah!');
    }

    return callback(null, dayNumber + 1);
}

const howManyCandles = async (dayNumber) => {
    return new Promise((resolve, reject) => {
        howManyCandlesCallback(dayNumber, (err, result) => {
            if (err) {
                return reject(err);
            }
            return resolve(result);
        })
    });
}

// const func = (dayNum, numCandlesT) => {
//     howManyCandles(dayNum)
//     .then(num => func(dayNum + 1, numCandlesT + num))
//     .catch(err => console.log(numCandlesT));
// }

// func(1, 0);

const promises = [...Array(8).keys()].map(i => howManyCandles(i + 1));

Promise.all(promises).then(result => {
    console.log(result.reduce((prev, curr) => prev + curr, 0));
}).catch(err => console.log(err));