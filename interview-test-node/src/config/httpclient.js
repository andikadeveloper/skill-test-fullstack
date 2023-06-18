const axios = require('axios').default;

const httpClient = axios.create({
    baseURL: process.env.DANS_API_BASE_URL
});

module.exports = httpClient;