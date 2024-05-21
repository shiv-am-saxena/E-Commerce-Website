const mongoose = require('mongoose');
const ownerSchema = mongoose.Schema({
    fullName:String,
    email:String,
    password:String,
    contact:Number,
    products:{
        type:Array,
        default:[]
    },
    isAdmin:Boolean,
    picture:String
})

module.exports = mongoose.model('owner', ownerSchema);