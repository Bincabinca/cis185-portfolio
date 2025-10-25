// Challenge: Number System Converter (+10 extra credit)
// Create functions to convert between number systems (binary, decimal, hexadecimal).

function decimalToBinary(decimal) {
    // Convert decimal number to binary string
    // Don't use toString(2)!
}

function binaryToDecimal(binary) {
    // Convert binary string to decimal number
    // Don't use parseInt(binary, 2)!
}

function decimalToHexadecimal(decimal) {
    // Convert decimal to hexadecimal string
    // Use 0-9 and A-F for digits
    // Don't use toString(16)!
}
// Test Cases:
console.log(decimalToBinary(10)); // "1010"
console.log(decimalToBinary(25)); // "11001"
console.log(decimalToBinary(0)); // "0"
console.log(binaryToDecimal("1010")); // 10
console.log(binaryToDecimal("11111")); // 31
console.log(binaryToDecimal("0")); // 0
console.log(decimalToHexadecimal(255)); // "FF"
console.log(decimalToHexadecimal(26)); // "1A"
console.log(decimalToHexadecimal(16)); // "10"