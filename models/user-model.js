const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    fullName:String,
    email:String,
    password:String,
    contact:Number,
    isAdmin:Boolean,
    order:{
        type:Array,
        default:[]
    },
    cart:{
        type:Array,
        default:[]
    },
    picture:String
})

module.exports = mongoose.model('user', userSchema);