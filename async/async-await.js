const howManyCandlesCallback = (dayNumber, callback) => {
    if ( dayNumber < 1 ) {
        return callback ('day cannot be smaller than 1');
    }

    if ( dayNumber > 8 ) {
        return callback ('No Isro Chag for Hannukah!');
    }

    return callback ( null, dayNumber + 1 );
}

const howManyCandles = ((numDays) => {
    return new Promise((resolve, reject) => {
        howManyCandlesCallback(numDays, (err, numCandles) => {
            if(err){
                return reject(err);
            }

            return resolve(numCandles);
        })
    })
})

(async () => {
    try{
        const result = await Promise.all(promises);
        console.log(result.reduce((prev, curr) => prev + curr, 0));
    }catch(err){
        console.error(err);
    }
})();