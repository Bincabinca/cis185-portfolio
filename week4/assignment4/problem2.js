
// Problem 2: Fall Leaf Counter (10 points)
// Track falling leaves with loops and conditionals.
// Count total leaves and categorize by color. 

function countLeaves(days) {
    // Each day, leaves fall following this pattern:
    // Day 1: 10 leaves
    // Day 2: 20 leaves (doubles)
    // Day 3: 30 leaves (+10 from day 2)
    // Day 4: 40 leaves (+10 from day 3)
    // Pattern: First day doubles, then +10 each day
    
    let total = 0;
    // Use a for loop to calculate total
    // the return outputTotal will be a string. refer to the example outputs to see the format. 
    return outputTotal;
}

function categorizeLeafColors(leaves) {
    // leaves is an array of color strings
    // Count each color and return an object
    
    let colorCount = {};
    // Loop through array and count colors
    
    return colorCount;
}
Test Cases:
countLeaves(1) → 10
countLeaves(2) → 30 (10 + 20)
countLeaves(4) → 100 (10 + 20 + 30 + 40)
countLeaves(5) → 150 (10 + 20 + 30 + 40 + 50)
categorizeLeafColors(["red", "yellow", "red", "brown"]) → {red: 2, yellow: 1, brown: 1}
categorizeLeafColors(["orange", "orange", "orange"]) → {orange: 3}
categorizeLeafColors([]) → {}