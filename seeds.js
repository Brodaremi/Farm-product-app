const mongoose = require("mongoose");
const Product = require("./models/product");
const Farm = require("./models/farms");

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

// const seedProducts = [
//     {
//         name: "fairy Eggplant",
//         price: 1.00,
//         categories: "vegetable"
//     },
//     {
//         name: "Organic Goddess Melon",
//         price: 4.99,
//         categories: "fruit"
//     },
//     {
//         name: "Ogranic Mini Seedless Watermelon",
//         price: 3.99,
//         categories: "fruit"
//     },
//     {
//         name: "Organic Celery",
//         price: 1.50,
//         categories: "vegetable"
//     },
//     {
//         name: "Chocolate Whole Milk",
//         price: 2.69,
//         categories: "diary"
//     }
// ]

// Product.insertMany(seedProducts)
// .then(res => {
//     console.log(res);
// })
// .catch(err => {
//     console.log(err);
// })

const seedFarms = [
    {
        name: "So mai sonka Farms Limited",
        city: "Gwandara",
        email: "somaisonka@gmail.com"
    },
    {
        name: "Igbudu Farms Limited",
        city: "Igbudu market",
        email: "igbudufarms@gmail.com"
    },
    {
        name: "Bushy Farms Limited",
        city: "Bush, auchi",
        email: "bushyfarms@gmail.com"
    },
    {
        name: "My neigbors Farms Limited",
        city: "Niegborhood, bauchi",
        email: "somaisonka@gmail.com"
    },
    {
        name: "Unique internation Farms Limited",
        city: "Dutse, abuja",
        email: "uniquefarms@gmail.com"
    },
    {
        name: "Excellent choice Farms Limited",
        city: "Gwarinpa, abuja",
        email: "excellentfarms@gmail.com"
    },
    {
        name: "Always right Farms Limited",
        city: "ughelli, delta",
        email: "alwaysrightfarms@gmail.com"
    },
    {
        name: "People's choice Farms Limited",
        city: "Dutse, Jigawa",
        email: "speopleschoicefarms@gmail.com"
    },
    {
        name: "ManyaGobe international Farms Limited",
        city: "Masaka, Nasarawa",
        email: "manyagobefarms@gmail.com"
    },
    {
        name: "Supreme Farms Limited",
        city: "GRA, Benin",
        email: "supremefarms@gmail.com"
    }
]

Farm.insertMany(seedFarms)
.then(res => {
    console.log(res);
})
.catch(err => {
    console.log(err);
})