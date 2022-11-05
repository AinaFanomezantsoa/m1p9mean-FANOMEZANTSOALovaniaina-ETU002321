const mongoose = require('mongoose');
const schemaResto = require('../model/resto.model');

var schemaMenu = new mongoose.Schema({
    nomPlat:{
        type: String,
        required: true
    },
    ingredient:{
        type: String,
        required: true,
        unique: true
    },
    prixPlat: String,
    


})

const Menudb = mongoose.model('menudb', schemaMenu);

module.exports = Menudb;