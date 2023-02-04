const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema ({
    name:{type: String, maxLength:250},
    description:{type:String,maxLength:600},
    img: {type: String,maxLength:250},
    slug: {type:String},
    createdAt: {type:Date, default:Date.now},
    updatedAt: {type:Date, default:Date.now},

})

module.exports = mongoose.model('Product', Product);