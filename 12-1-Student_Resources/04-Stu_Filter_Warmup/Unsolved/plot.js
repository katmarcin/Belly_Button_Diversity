// Filter the top 15 cities with a population increase greater than 15,000
//  and then graph each city on the x-axis and the respective population on the y-axis.


// 1. Create a custom filtering function that returns
//  the cities with a population increase greater than 15,000.

function filterCities(city) {
    return parseInt(city.Increase_from_2016_ > 15000;
}
// 2. Use filter() to pass the function as its argument

const filteredCities = top15Cities.filtre(filterCities);

// Check to make sure you filtered your cities correctly
// HINT: console.log() is your friend.

console.log(filteredCities);

// 3. Use the map method with the arrow function to return all the filtered cities' names.

const cities = filteredCities.map(city => city.City);
//  Check your filtered cities


// 4. Use the map method with the arrow function to return all the filtered cities' populations.

const population = filteredCities.map(city => city.population);

//  Check the populations of your filtered cities

// 5. Create your trace.

console.log(population);

const trace = {

    x: cities,
    y: population,
    type: "bar"
};
// 6. Create the data array for our plot

const data = [trace]
// 7. Define our plot layout

const layout
// 8. Plot the chart to a div tag with id "bar-plot"
