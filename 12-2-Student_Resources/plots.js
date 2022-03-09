function randomNumbersBetween0and9(n) {
    var randomNumberArray = [];

    for (var i = 0; i < n; i++) {
        var randomNumber = Math.floor(Math.random() * 10);

        randomNumberArray.push(randomNumber);

    }
    return randomNumberArray;
}

var trace1 = {
    x: [1, 2, 3, 4, 5],
    y: randomNumbersBetween0and9(5),
    type: "scatter",
}

var trace2= {
    x: [1, 2, 3, 4, 5],
    y: randomNumbersBetween0and9(5),
    type: "scatter",
}

console.log(randomNumbersBetween0and9(5));

var data = [trace1, trace2];

Pllotly.newPlot("plot", data);

