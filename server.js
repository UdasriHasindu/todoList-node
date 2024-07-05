const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();
app.use(express.static('views'));
app.set('view engine', 'ejs');


const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const D = new Date();
var today = D.getDay();

app.get('/', function(req, res){
    res.render('list', {amazingDay: weekdays[today]});
})


app.listen(5000, function(){
    console.log("server is live on port 5000");
});