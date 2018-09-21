var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('home');
});

app.get('/about', function(req, res){
    res.render('about');
});

app.listen(process.env.PORT || 3000, function(){
    console.log("The DeployingDemo App has started!");
});