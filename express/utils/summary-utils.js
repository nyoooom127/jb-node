const paginate = (arr = [], offset = 0, limit = 2) => {
    return arr.slice(offset, offset + limit);
};

const formatData = (data, format = 'json') => {
    if (format === 'xml') {
        const { json2xml } = require('xml-js');

        return json2xml(JSON.stringify({ users: data }), { compact: true, spaces: 4 });
    }

    return data;
};

module.exports = {
    paginate,
    formatData
};