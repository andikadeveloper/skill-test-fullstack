const mongoose = require('mongoose');

const { MONGODB_URL } = process.env;

exports.connect = () => {
    mongoose
    .connect(MONGODB_URL)
    .then(() => {
        console.log('Successfully connected to database');
    })
    .catch((error) => {
        console.log('database connection failed. exiting now...');
        console.log(error);
        process.exit(1);
    });
};