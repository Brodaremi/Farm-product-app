const mongoose = require("mongoose");
const {Schema} = mongoose;
const productSchema = new Schema({
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
    },
    farm: {
        type: Schema.Types.ObjectId,
        ref: 'Farm'
    }
})

const Product = mongoose.model("Product", productSchema);

module.exports = Product;