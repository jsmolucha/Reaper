const http = require('http')
const express = require('express')
const path = require('path')


//requiring the dotenv module to handle environment variables.=
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.static("express"));

//URL for the website
app.use('/', function(req, res) {
    // '__' handles the project folder name resolution
    res.sendFile(path.join(__dirname+'/express/index.html'));

});

///////////////////////////////////////// MYSQL DB CONNECTION
var mysql2 = require('mysql2');

var con = mysql2.createConnection({
    host: "localhost",
    user: process.env.CLIENT_USER,
    password: process.env.CLIENT_SECRET,
    database: "autotracker"
});
    
con.connect(function(err) {
    if (err) throw err
    console.log ("Connected to MySQL!")
    console.log(con.query("SELECT DEAL FROM saleslog WHERE STORE_NAME ='Napleton Hyundai'", function (err, result, fields) {
        if (err) throw err;
        console.log(result)
    }))
    //const status = document.getElementById('db_status')
    //status.style.color = 'green';
    //status.innerHTML = "DB Connected"
})
const server = http.createServer(app);
const port = 3000;
server.listen(port);

console.debug('server listening on port ' + port);

