require('dotenv').config()
const mongoose = require('mongoose')
const MONGO_URI = process.env.MONGO_URI
function connect() {
    try {
        mongoose.connect(MONGO_URI)
            .then(() => { console.log("DB-Connection Successful") })
    } catch (error) {
        console.log("MongoDB Error", error);
    }
}

module.exports = { connect }