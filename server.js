const http = require('http')
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const Router = require('./routes')

const app = express();
app.use(express.json());
app.use(express.static("express"));

//URL for the website
app.use('/', function(req, res) {
    // '__' handles the project folder name resolution
    res.sendFile(path.join(__dirname+'/express/index.html'));

});

mongoose.connect('mongodb://localhost:27017/userdb'), {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology:true
}

const server = http.createServer(app);
const port = 3000;
server.listen(port);

console.debug('server listening on port ' + port);
