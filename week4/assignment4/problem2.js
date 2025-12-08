// Problem 2: Fall Leaf Counter (10 points)
// Track falling leaves with loops and conditionals.
// Count total leaves and categorize by color. 

//💡 Hint: For the first function, notice the pattern changes after day 1.
// For the second, you'll need to check if a color already exists in your object before counting.
let totalLeaves = 0;

function countLeaves(days) {
    // Each day, leaves fall following this pattern:
    // Day 1: 10 leaves
    // Day 2: 20 leaves (doubles)
    // Day 3: 30 leaves (+10 from day 2)
    // Day 4: 40 leaves (+10 from day 3)
    // Pattern: First day doubles, then +10 each day
    
    // Use a for loop to calculate total leaves
    for(let i = 1; i <= days; i++) {
        if (i === 1) {
            totalLeaves += 10;
        }
        else {
            totalLeaves += 10 * (i - 1);
        }
    }
    
    // the return totalLeaves will be a string. refer to the example outputs to see the format. 
    return totalLeaves.toString();
}

function categorizeLeafColors(leaves) {
    
    // Count each color and return an object
    let colorCount = {};

    // Loop through array and count colors
    for (let i = 0; i < leaves.length; i++) {
        let color = leaves[i];
        colorCount[color] = (colorCount[color] || 0) + 1;
    }
    return colorCount;
}

// Test Cases:
console.log(countLeaves(1)); // 10
console.log(countLeaves(2)); // 30 (10 + 20)
console.log(countLeaves(4)); // 100 (10 + 20 + 30 + 40)
console.log(countLeaves(5)); // 150 (10 + 20 + 30 + 40 + 50)
console.log(categorizeLeafColors(["red", "yellow", "red", "brown"])); // {red: 2, yellow: 1, brown: 1}
console.log(categorizeLeafColors(["orange", "orange", "orange"])); // {orange: 3}
console.log(categorizeLeafColors([])); // {}

