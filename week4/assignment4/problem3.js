// Problem 3: Grade Calculator (10 points
// Build a comprehensive grade calculation system.

function calculateAverage(scores) {
    // Calculate and return the average of an array of scores
    // Handle empty array case (return 0)
    if (scores.length === 0) return 0;
    let total = 0;
    for (let score of scores) {
        total += score;
    }
    return total / scores.length;
}

function dropLowestScore(scores) {
    // Return a new array with the lowest score removed
    // If multiple lowest scores exist, remove only one
    // Don't modify the original array!
    if (scores.length === 0) return [];
    let newScores = scores.slice();
    let minIndex = newScores.indexOf(Math.min(...newScores));
    newScores.splice(minIndex, 1);
    return newScores;
}

function getLetterGrade(score) {
    // Return letter grade based on score
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
}

function curveGrades(scores, curveAmount) {
    // Add curveAmount to each score
    // Cap all scores at 100 (no score above 100)
    // Return new array, don't modify original
    let newScores = scores.map(score => Math.min(score + curveAmount, 100));
    return newScores;
}

// Test Cases:
console.log(calculateAverage([80, 90, 70])); // 80  
console.log(calculateAverage([100, 50, 75])); // 75
console.log(calculateAverage([])); // 0
console.log(dropLowestScore([80, 90, 70, 85])); // [80, 90, 85]
console.log(dropLowestScore([50, 50, 75, 100])); // [50, 75, 100]
console.log(getLetterGrade(95)); // "A"
console.log(getLetterGrade(82)); // "B"
console.log(getLetterGrade(58)); // "F"
console.log(curveGrades([85, 95, 70], 10)); // [95, 100, 80]
console.log(curveGrades([90, 96, 80], 5)); // [95, 100, 85]