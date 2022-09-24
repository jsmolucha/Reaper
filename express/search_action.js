var mysql2 = require('mysql2');

var connect = mysql2.createConnection({
    host: "localhost",
    user: process.env.CLIENT_USER,
    password: process.env.CLIENT_SECRET,
    database: "autotracker"
});

function querytest() {
    console.log(connect.query(`SELECT DEAL FROM saleslog WHERE STORE_NAME ='${document.getElementById("dealer_list").value}'`, function (err, result, fields) {
        if (err) throw err;
        console.log(result)
    }))
}



function testing() {
    console.log("this does nothing")
}

function getSearchValue() {
    var location_dropdown = document.getElementById("dealer_list")
    var make_dropdown = document.getElementById("make_list")
    var model_dropdown = document.getElementById("model_list")
    
    var locVal = location_dropdown.value;
    var makeVal = make_dropdown.value;
    var modelVal = model_dropdown.value;

    console.log("location: " + document.getElementById("dealer_list").value + " - model: " + makeVal + " - model: " + modelVal)
}

