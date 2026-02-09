const moongoose = require('mongoose');

const connectDB = async () => {
    try {
        await moongoose.connect(process.env.CONNECTION_STRING);
        console.log("Connected to MongoDB");
    } catch (err) {
        console.log("Error connecting to MongoDB", err);
        process.exit(1);
    }
};   

module.exports = connectDB;