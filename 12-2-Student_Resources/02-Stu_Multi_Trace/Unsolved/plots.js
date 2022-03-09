console.log(data); // use iether the map function method or the function anonymous method

// Trace1 for the Greek Data

const trace1 = greekName, greekSearchResults

const trace1 = {
    x: data.map(data => data.greekName),
    y: data.map (data => data.greekSearchResults),
    name: 'Greek',
    type: "bar",
  };

let pieData = [trace]



// Trace 2 for the Roman Data

Plotly.newPlot("pie", pieData, 
)
const trace2 = {
    x: data.map(data => data.romanName),
    y: data.map (data => data.romanSearchResults),
    name: 'Roman',
    type: "bar",
  };


// Combining both traces

const trace3 = [trace1, trace2];

// Apply the group barmode to the layout

var layout = {barmode: 'group'};


// Render the plot to the div tag with id "plot"
