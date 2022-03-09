// Create an array of each country's numbers
var us = Object.values(data.us);
var uk = Object.values(data.uk);
var canada = Object.values(data.canada);

// Create an array of music provider labels

let musicProviders = Object.keys(data.us);
console.log(musicProviders)  // to test 
// Display the default plot
function init() {  // initilzation function

let trace = [{
  values: us,
  labels: musicProviders,
  type: "pie",
}];

 var layout = {
   jheight: 600,
   width: 800,
}

let pieData = [trace]

Plotly.newPlot("pie", pieData, trace, layout);

}
// On change to the DOM, call getData()

d3.selectAll(#selDataset").on("change"), getData());

// Function called by DOM changes

function getData() {
// Assign the value of the dropdown menu option to a variable
var dropdownMenu = d3.select(#selDataset"); 
var dataset = dropdownMenu.property("value");

// Initialize an empty array for the country's data

var countryData = []

// Update the restyled plot's values
if (dataset === "uk") {
  countryData = uk;
  else if (dataset === "canada") {
  countryData = canada;
  else if (dataset === "us") {
  countryData = us
}
Plotly.restyle("plot", "x", [countryData])
}

init();

