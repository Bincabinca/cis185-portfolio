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
Test Cases:
reverseArray([1, 2, 3, 4]) → [4, 3, 2, 1]
reverseArray(["a", "b", "c"]) → ["c", "b", "a"]
reverseArray([]) → []
removeDuplicates([1, 2, 2, 3, 1, 4]) → [1, 2, 3, 4]
removeDuplicates(["a", "b", "a", "c"]) → ["a", "b", "c"]
rotateArray([1, 2, 3, 4], 1) → [4, 1, 2, 3]
rotateArray([1, 2, 3, 4], 2) → [3, 4, 1, 2]
rotateArray([1, 2, 3], 4) → [3, 1, 2] (4 % 3 = 1 rotation)
findSecondLargest([10, 20, 30, 40]) → 30
findSecondLargest([5, 5, 5]) → null
findSecondLargest([100, 50, 100, 75]) → 75

