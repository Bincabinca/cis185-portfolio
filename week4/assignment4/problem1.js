// Problem 1: Temperature Converter Suite (10 points)
// Create a comprehensive temperature conversion system with multiple functions.

function celsiusToFahrenheit(celsius) {
    // Convert Celsius to Fahrenheit
    // Formula: (C × 9/5) + 32
    let temperature = (celsius * 9/5) + 32;
    return temperature;
}

function fahrenheitToCelsius(fahrenheit) {
    // Convert Fahrenheit to Celsius
    // Formula: (F - 32) × 5/9
    let temperature = (fahrenheit - 32) * 5/9;
    return temperature;
}

function getTemperatureDescription(temperature) {
    // Return description based on temperature
    // Below 32: "Freezing"
    if (temperature < 32) {
        return "Freezing";
    }

    // 32-50: "Cold"
    if (temperature >= 32 && temperature <= 50) {
        return "Cold";
    }

    // 51-70: "Cool"
    if (temperature >= 51 && temperature <= 70) {
        return "Cool";
    }

    // 71-85: "Warm"
    if (temperature >= 71 && temperature <= 85) {
        return "Warm";
    }
    
    // Above 85: "Hot"
    if (temperature > 85) {
        return "Hot";
    }
}

// Test Cases:
console.log(celsiusToFahrenheit(0)); // 32
console.log(celsiusToFahrenheit(100)); // 212
console.log(celsiusToFahrenheit(-40)); // -40
console.log(fahrenheitToCelsius(32)); // 0
console.log(fahrenheitToCelsius(68)); // 20
console.log(fahrenheitToCelsius(212)); // 100
console.log(getTemperatureDescription(25)); // "Freezing"
console.log(getTemperatureDescription(75)); // "Warm"
console.log(getTemperatureDescription(95)); // "Hot"