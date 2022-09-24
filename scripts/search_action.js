const { model } = require("mongoose");

function getSearchValue() {
    var location_dropdown = document.getElementById("dealer_dd_label")
    var make_dropdown = document.getElementById("make_dd_label")
    var model_dropdown = document.getElementById("model_dd_label")
    var locVal = location_dropdown.options[location_dropdown.selectedIndex].innerHTML;
    var makeVal = make_dropdown.options[make_dropdown.selectedIndex].innerHTML;
    var modelVal = model_dropdown.options[model_dropdown.selectedIndex].innerHTML;

    console.log("location: " + locVal + "model: " + makeVal + "model: " + modelVal)
}