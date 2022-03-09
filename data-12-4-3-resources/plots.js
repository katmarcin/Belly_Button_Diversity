function init() {    // creates a dropdown menu of ID numbers dynamically 
    var selector = d3.select("#selDataset"); // used to select dropdown menu, assigned to variable "selector"

    d3.json("samples.json").then((data) => { // d3.json is used to read the data from samples.json, that data is assigned arbitrary argument name "data"
      console.log(data);
      var sampleNames = data.names; // "names" array contains ID numebrs of all the study participants
      sampleNames.forEach((sample) => { //  forEach called on the sampleNamples array, in each element, dropdown menu "option" is appended "sample"
        selector 
          .append("option")
          .text(sample) // text of each dropdown menu is the ID
          .property("value", sample); //value property is also assigned the ID, ex: [1:941], assigned 1. Value and Text assigned 941.
      });
  })}

function optionChanged(newSample) { // refers to value of the selected menu option. "this.value" and " newSample" are equivalent
    buildMetadata(newSample);
    buildCharts(newSample);
}

function buildMetadata(sample) { //  takes in sample (ID #, as its argument (when dropdown menu option is selected, the ID # is passed in as sample)
    d3.json("samples.json").then((data) => {
      var metadata = data.metadata;
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample); // filter object in array for whose id property matches input (sample). Each metadata array contains info on 1 person.
      var result = resultArray[0]; // results are returned as an array so we are assigning variable "result"
      var PANEL = d3.select("#sample-metadata"); // d3.select is used to select the div and the variable PANEL assigned to it. "sampleMETADATA" is the id of the demo info panel
  
      PANEL.html(""); // ensures content of panel are cleared when next input is processed
      PANEL.append("h6").text(result.location); // append and text methods are chained to append an H6 heading and print the volunteer location to the panel    
    });
}
  
  init();  // code is called in this last line 
