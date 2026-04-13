let city: string = "Faridabad";
let temperature: number = 26;
let isRaining = false;

// function to print weather report
function weatherReport(place: string, temp: number, rain: boolean): void {
    console.log("In " + place + ", it is " + temp + "°C. Is it raining? " + rain);}

weatherReport(city, temperature, isRaining);