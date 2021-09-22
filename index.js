const express = require('express');
// const dotenv = require('dotenv');
const hbs = require('hbs');

app = express();
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// dotenv.config();
// hostname = process.env.HOSTNAME;
// port = process.env.PORT;

app.use(express.static('public'));
//app.use('/', routes);

app.get('/', function (req, res) {
    res.render('allItems');
});

app.get('/allItems', function (req, res) {
    res.render('allItems', {});
});

app.get('/viewItem', function (req, res) {
    res.render('viewItem', {});
});

app.get('/soldItems', function (req, res) {
    res.render('soldItems');
});
// app.get('/profile/:username', function (req, res) {
//     var person = {
//         username: req.params.username
//     };

//     res.render('profile', person);
// });

// app.get('/friends', function(req, res) {
//     res.render("friends", {
//         friends: [
//             {fn: 'Ned', ln: 'Stark'},
//             {fn: 'Cat', ln: 'Tully'}
//         ]
//     });

// });

// app.get('/home', function(req, res) {
//     res.render("home");

// });

var server = app.listen(3000, function() {
        console.log('Server is running at:');
        console.log('http://localhost:3000');
});
// app.listen(port, hostname, function() {
//     console.log('Server is running at:');
//     console.log('http://' + hostname + ':' + port);
// });