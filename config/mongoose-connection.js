const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/snatch")
.then(function(){
    console.log("connected to databse");
})
.catch(function(err){
    console.error(err,"unable to connect to the database");
})
module.exports = mongoose.connection;