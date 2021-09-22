
const http  = require('http');
const fs = require('fs');
const lodash = require('lodash');
const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const port = 3000;


app.use(express.json());
app.use(express.urlencoded ({extended: true}));

mongoose.connect('mongodb+srv://ccapdev2021:2021ccapdev@cluster0.k7z9k.mongodb.net/test');


const server = http.createServer(function (req, res){
	response.end();
});

server.listen(port,'localhost',function(){
	
	
});



app.listen(port, function(){
	console.log('app listening at port ' + port);
})

app.use(express.static(__dirname + '/public'));




app.set("view engine", "hbs");
app.engine("hbs", exphbs({extname:"hbs"}));


app.get('/myAccount', function(req, res){
	res.render("myAccount");
	
})

app.get('/soldItems', function(req, res){
	res.render("soldItems");
	
})