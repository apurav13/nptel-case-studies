var city = "Faridabad";
var temperature = 26;
var isRaining = false;
// function to print weather report
function weatherReport(place, temp, rain) {
    console.log("In " + place + ", it is " + temp + "°C. Is it raining? " + rain);
}
weatherReport(city, temperature, isRaining);
