var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');


const route = require('./routes/route.js');  //require route.js file
app.use(cors());
app.use(bodyparser.json());
app.use('/api', route);




mongoose.connect('mongodb://localhost:27017/basketdb',{ useNewUrlParser: true }); //to connect to basketdb database
mongoose.connection.on('connected',() => {
    console.log('mongodb connected');
});
mongoose.connection.on('error',(err) => {
    console.log(err);
});






const PORT = 3000;
app.listen(PORT, () => {
    console.log('you are on port ' + PORT);
});

app.get('/',(req, res, next) => {
    res.send('you are on node js server with port ' + PORT);
});
