const howManyCandlesCallback = (dayNumber, callback) => {
    return setTimeout(() => {
        if (dayNumber < 1) {
            return callback('day cannot be smaller than 1');
        }

        if (dayNumber > 8) {
            return callback('No Isro Chag for Hannukah!');
        }

        return callback(null, dayNumber + 1);
    }, (Math.random() + 1) * 1000);

};


// let count = 0;

// for(let i=1; i < 9; i++){
//     howManyCandlesCallback(i, (err, numCandles) => {
//         if(err){
//             console.log(err);
//         }else{
//             count += numCandles;
//         }
//     });
// }

// console.log(count);

const func = (dayNum, numCandlesT) => {
    howManyCandlesCallback(dayNum, (err, numCandles) => {
        if (err) {
            console.log(numCandlesT);
        } else {
            return func(dayNum + 1, numCandlesT + numCandles);
        }
    });
}

func(1, 0);