// Sort the data by Greek search results. high values first
const sortedByGreekSearch = data.sort((a,b) => b.greekSearchResults - a.greekSearchResults

const slicedData = sortedByGreekSearch.slice(0,10);
// Slice the first 10 objects for plotting
console.log(sortedByGreekSearch)
// Reverse the array to accommodate Plotly's defaults
slicedData.reverse()
// Trace1 for the Greek Data
const names = slicedData.map(god => god.greekName);
const searchResults = slicedData.map(god => god.greekSearchResults);
// data

const trace1 = {
    x: searchResults,
    y: names,
    text: names,
    name: "Greek",
    type: "bar",
    orientation: "h",
};

// Apply the group bar mode to the layout
const myData = [trace1];

var layout = {
    title: "Greek gods search results",
    margin: {
        l: 100,
        r: 100,
        t: 100,
        b: 100,

    }
    ]

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", myxata, layout);