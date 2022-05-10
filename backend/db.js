const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017';
const connectToMongo = ()=>{
    mongoose.connect(mongoURI, {dbName:'login-signup'}, ()=>{
        console.log("Connected Successfully!");
    })
}

module.exports = connectToMongo;