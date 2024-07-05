const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.use(express.static('views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded( {extended: true}));


const today = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = today.toLocaleDateString('en-US', options);

let newItems = [];
app.get('/', function(req, res){
    res.render('list', {amazingDay: formattedDate, userItems: newItems});
});

app.post('/', function(req, res){
    const item = req.body.item;

    newItems.push(item);
    
    res.redirect('/');

});


app.listen(5000, function(){
    console.log("server is live on port 5000");
});