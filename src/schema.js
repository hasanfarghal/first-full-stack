var mongoose = require("mongoose");
var schema = mongoose.Schema
var objectToSale = new schema({
    title: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true,
    },

    date: {
        type: Date,
        default: Date.now
    },

    price: {
        type: String,
        required: true
    },

    telephone: String

})
module.exports = mongoose.model("ObjectToSale", objectToSale);