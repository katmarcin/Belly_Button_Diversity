function init() { //renders initial visualization
    data = [{
      x: [1, 2, 3, 4, 5],
      y: [1, 2, 4, 8, 16] 
    }];
    Plotly.newPlot("plot", data); // x and y plot
  };
  
  d3.selectAll("#dropdownMenu").on("change", updatePlotly); // when user creates an event 
  function updatePlotly() {
    var dropdownMenu = d3.select("#dropdownMenu");
    var dataset = dropdownMenu.property("value");
  
    var xData = [1, 2, 3, 4, 5];
    var yData = [];
  
    if (dataset === 'dataset1') {
      yData = [1, 2, 4, 8, 16];
    };
  
    if (dataset === 'dataset2') {
      yData = [1, 10, 100, 1000, 10000];
    };
  
    var trace = {
      x: [xData],
      y: [yData],
    };
    Plotly.restyle("plot", trace); // restyle accepts an object (trace) instead of array as the argument. Used to re-render the page on the browser.   
  };  //plot refers to HTML div, trace refers to JS object cotnaing the data 
  
  init();