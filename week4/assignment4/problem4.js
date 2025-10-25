// Problem 4: Pattern Generator (10 points)
// Write functions that use loops to generate text patterns.
// Each function should return the full pattern as a single string,
// with each line separated by a \n character.

//💡 Hint: For the pyramid: - Spaces = height - row - 1 - Stars = 2 * row + 1
// Combine each line with \n at the end.

function createPyramid(height) {
    // Build a centered pyramid of asterisks (*)
    let result = "";
    for (let i = 0; i < height; i++) {
        // Add spaces
        for (let j = 0; j < height - i - 1; j++) {
            result += " ";
        }
        // Add stars
        for (let k = 0; k < 2 * i + 1; k++) {
            result += "*";
        }
        result += "\n";
    }
    return result;
}

function createNumberStaircase(steps) {
    // Build a staircase of increasing numbers
    let result = "";
    for (let i = 1; i <= steps; i++) {
        for (let j = 1; j <= i; j++) {
            result += j;
        }
        result += "\n";
    }
    return result;
}

function createCheckerboard(size) {
    let result = "";
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if ((i + j) % 2 === 0) {
                result += "X";
            } else {
                result += "O";
            }
        }
        result += "\n";
    }
    return result;
}

//Expected Outputs:
console.log(createPyramid(3));
//   *
//  ***
// *****

console.log(createPyramid(4));
//    *
//   ***
//  *****
// *******

console.log(createNumberStaircase(5));
// 1
// 12
// 123
// 1234
// 12345

console.log(createCheckerboard(4));
// XOXO
// OXOX
// XOXO
// OXOX