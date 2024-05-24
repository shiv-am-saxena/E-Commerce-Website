const mongoose = require('mongoose');
const dbgr = require('debug')("development:mongoose");
const config = require('config');
mongoose.connect(`${config.get("MONGODB_URI")}/snatch`)
.then(function(){
    dbgr("connected to databse");
})
.catch(function(err){
    dbgr(err,"unable to connect to the database");
})
module.exports = mongoose.connection;