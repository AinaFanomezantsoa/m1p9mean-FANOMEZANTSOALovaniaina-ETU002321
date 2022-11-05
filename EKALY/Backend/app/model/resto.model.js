const mongoose = require('mongoose');

var schemaResto = new mongoose.Schema({
    nomResto:{
        type: String,
        required: true
    },
    adResto:{
        type: String,
        required: true,
        unique: true
    },
    numResto: String
})
const Restodb = mongoose.model('restodb', schemaResto);


module.exports = Restodb;