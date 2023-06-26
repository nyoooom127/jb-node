const postLogger = (req, res, next) => {
    res.on('finish', () => {
        console.log(`Post request status: ${res.statusCode}`);
    });

    return next();
};

module.exports = postLogger;
