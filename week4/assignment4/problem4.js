// Problem 4: Pattern Generator (10 points)
// Write functions that use loops to generate text patterns.
// Each function should return the full pattern as a single string,
// with each line separated by a \n character.

//💡 Hint: For the pyramid: - Spaces = height - row - 1 - Stars = 2 * row + 1
// Combine each line with \n at the end.

function createPyramid(height) {
    // Build a centered pyramid of asterisks (*)
    // Example: height = 3 →
    //   *
    //  ***
    // *****
    // Return as a string with \n between lines
}

function createNumberStaircase(steps) {
    // Build a staircase of increasing numbers
    // Example: steps = 5 →
    // 1
    // 12
    // 123
    // 1234
    // 12345
}

function createCheckerboard(size) {
    // Create a checkerboard pattern of X and O
    // Example: size = 4 →
    // XOXO
    // OXOX
    // XOXO
    // OXOX
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