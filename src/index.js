const express = require('express')
const app = express()
const path = require('path');
const publicDirPath = path.join(__dirname, "../public");
const viewPath = path. join(__dirname, "../templates/views");

app.set("view engine", "hbs");
app.set("views", viewPath);
app.use(express.static(publicDirPath));


app.get('/', function (req, res) {
    res.render('login');
})

app.get('/vendor/add', function (req, res) {
    res.render('addvendor');
})

app.get('/user/add', function (req, res) {
    res.render('adduser');
})
app.get('/admin/add', function (req, res) {
    res.render('addadmin');
})

app.get('/product/add', function (req, res) {
    res.render('addproduct');
})

app.get('/registration', function (req, res) {
    res.render('registration');
})

app.get('/ad', function (req, res) {
    res.render('ad');
})
app.get('/user', function (req, res) {
    res.render('user');
})

app.get('/product', function (req, res) {
    res.render('product');
})

app.get('/home', function (req, res) {
    res.render('home');
})

app.get('/admin', function (req, res) {
    res.render('admin');
})

app.get('/user', function (req, res) {
    res.render('user');
})
app.get('/vendor', function (req, res) {
    res.render('vendor');
})

app.get('/forgot_pwd', function (req, res) {
    res.render('forgot_pwd');
})


app.listen(8081, function(){
    console.log("the server is upon port 8081")
})