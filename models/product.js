const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    categories: {
        type: String,
        lowerCase: true,
        enum: ["fruit", "vegetable", "diary"]
    }
})

const Product = mongoose.model("Product", productSchema);

module.exports = Product;