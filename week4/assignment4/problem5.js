// Problem 5: Array Manipulator (10 points)
// Create utility functions for array manipulation.

function reverseArray(arr) {
    // Return a new array with elements in reverse order
    // Don't use the built-in reverse() method!
    // Don't modify the original array
}

function removeDuplicates(arr) {
    // Return a new array with duplicates removed
    // Maintain original order of first occurrence
}

function rotateArray(arr, positions) {
    // Rotate array to the right by 'positions'
    // Handle positions larger than array length
}

function findSecondLargest(numbers) {
    // Find and return the second largest number
    // Return null if array has less than 2 unique values
}
// Test Cases:
console.log(reverseArray([1, 2, 3, 4])); // [4, 3, 2, 1]
console.log(reverseArray(["a", "b", "c"])); // ["c", "b", "a"]
console.log(reverseArray([])); // []
console.log(removeDuplicates([1, 2, 2, 3, 1, 4])); // [1, 2, 3, 4]
console.log(removeDuplicates(["a", "b", "a", "c"])); // ["a", "b", "c"]
console.log(rotateArray([1, 2, 3, 4], 1)); // [4, 1, 2, 3]
console.log(rotateArray([1, 2, 3, 4], 2)); // [3, 4, 1, 2]
console.log(rotateArray([1, 2, 3], 4)); // [3, 1, 2] (4 % 3 = 1 rotation)
console.log(findSecondLargest([10, 20, 30, 40])); // 30
console.log(findSecondLargest([5, 5, 5])); // null
console.log(findSecondLargest([100, 50, 100, 75])); // 75