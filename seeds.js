const mongoose = require("mongoose");
const Product = require("./models/product");

mongoose.connect('mongodb://0.0.0.0:27017/farmStand', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("Mongo connection open");
})
.catch(err =>{
    console.log('Mongo connection error');
    console.log(err);
})

// const p = new Product({
//     name: "Ruby grapefruit",
//     price: 1.99,
//     categories: 'fruit'
// });
// p.save()
// .then (p => {
//     console.log(p);
// })
// .catch(e => {
//     console.log(e);
// })

const seedProducts = [
    {
        name: "fairy Eggplant",
        price: 1.00,
        categories: "vegetable"
    },
    {
        name: "Organic Goddess Melon",
        price: 4.99,
        categories: "fruit"
    },
    {
        name: "Ogranic Mini Seedless Watermelon",
        price: 3.99,
        categories: "fruit"
    },
    {
        name: "Organic Celery",
        price: 1.50,
        categories: "vegetable"
    },
    {
        name: "Chocolate Whole Milk",
        price: 2.69,
        categories: "diary"
    }
]

Product.insertMany(seedProducts)
.then(res => {
    console.log(res);
})
.catch(err => {
    console.log(err);
})