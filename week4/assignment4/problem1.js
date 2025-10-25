 //Create a comprehensive temperature conversion system with multiple functions.
// Complete these functions
let temperature = 0;

function celsiusToFahrenheit(celsius) {
    // Convert Celsius to Fahrenheit
    // Formula: (C × 9/5) + 32
    temperature = (celsius * 9/5) + 32;
    return temperature;
}

function fahrenheitToCelsius(fahrenheit) {
    // Convert Fahrenheit to Celsius
    // Formula: (F - 32) × 5/9
    temperature = (fahrenheit - 32) * 5/9;
    return temperature;
}

function getTemperatureDescription(fahrenheit) {
    // Return description based on temperature:
    switch(temperature) {
        // Below 32: "Freezing"
        case temperature < 32:
            return "Freezing";
            break;
        // 32-50: "Cold"
        case temperature >= 32 && temperature <= 50:
            return "Cold";
            break;
        // 51-70: "Cool"
        case temperature >= 51 && temperature <= 70:
            return "Cool";
            break;  
        // 71-85: "Warm"
        case temperature >= 71 && temperature <= 85:
            return "Warm";
            break;
        // Above 85: "Hot"
        case temperature > 85:
            return "Hot";
            break;  
    }
}

//Test Cases:
console.log(celsiusToFahrenheit(0)); // 32
console.log(celsiusToFahrenheit(100)); // 212
console.log(celsiusToFahrenheit(-40)); // -40
console.log(fahrenheitToCelsius(32)); // 0
console.log(fahrenheitToCelsius(68)); // 20
console.log(fahrenheitToCelsius(212)); // 100
console.log(getTemperatureDescription(25)); // "Freezing"
console.log(getTemperatureDescription(75)); // "Warm"
console.log(getTemperatureDescription(95)); // "Hot"