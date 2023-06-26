const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;
const host = 'localhost';
const usersApi = 'https://jsonplaceholder.typicode.com/users';

const authMiddleware = require('./middleware/auth');
const notFound = require('./middleware/404');
const errorHandler = require('./middleware/error');
const { formatData, paginate } = require('./utils/summary-utils');

app.use(authMiddleware);
app.use(express.urlencoded({ extended: false }));

app.get('/users', async (req, res, next) => {
    try {
        const format = req.query.format || 'json';
        const offset = Number(req.query.offset) || 0;
        const limit = Number(req.query.limit) || 2;

        const response = await axios(usersApi);
        const paginated = paginate(response.data, offset, limit);
        const formatted = formatData(paginated, format);

        return res.setHeader('Content-Type', `application/${format}`).send(formatted);
    } catch (err) {
        next(err);
    }
});

app.use(notFound);
app.use(errorHandler);

app.listen(port, host, () => {
    console.log(`Example app listening on port ${port}`);
});
