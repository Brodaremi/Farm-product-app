const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

const Product = require("./models/product");

mongoose.connect('mongodb://0.0.0.0:27017/farmStand', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("Mongo connection open");
})
.catch(err =>{
    console.log('Mongo connection error');
    console.log(err);
})




app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

const categories = ["fruits", "vegetable", "diary"];

app.get("/products", async (req, res) => {
    const {categories} = req.query;
    if(categories){
        const products = await Product.find({categories})
        res.render('products/index', {products, categories})
    } else {
        const products = await Product.find({});
        res.render('products/index', {products, categories: "All"})
    }
   
});

app.get("/products/new", (req, res) => {
    res.render("products/new", {categories})
})

app.post("/products", async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`);
})

app.get("/products/:id", async (req, res) => {
    const {id} = req.params;
    const foundProduct = await Product.findById(id);
    res.render("products/show", {foundProduct})
})
app.get("/products/:id/edit", async (req, res) => {
    const {id} = req.params;
    const foundProduct = await Product.findById(id);
    res.render("products/edit", {foundProduct, categories})
})

app.put("products/:id", async (req, res) => {
    console.log(req.body);
    res.send("PUTT");
})

app.delete("product/:id", async (req, res) =>{
    const {id} = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect("/products")
})




app.listen(3000, () => {
    console.log("App is listening on port 3000!");
});



