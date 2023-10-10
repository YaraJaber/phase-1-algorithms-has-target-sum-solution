function hasTargetSum(array, target) {
  // Initialize an empty Set to keep track of seen numbers.
  const seenNumbers = new Set();

  // Iterate through the array to find a pair of numbers that sum up to the target.
  for (const number of array) {
    const complement = target - number;

    // Check if the complement is already in the Set.
    if (seenNumbers.has(complement)) {
      return true; // A pair is found.
    }

    // Add the current number to the Set for future reference.
    seenNumbers.add(number);
  }

  // If no pair is found, return false.
  return false;
}

// Test cases
console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10)); // Expecting: true
console.log(hasTargetSum([22, 19, 4, 6, 30], 25));    // Expecting: true
console.log(hasTargetSum([1, 2, 5], 4));              // Expecting: false
console.log(hasTargetSum([-7, 10, 4, 8], 3));         // Expecting: true
console.log(hasTargetSum([1, 2, 3, 4], 5));           // Expecting: true
console.log(hasTargetSum([4], 4)); 


if (require.main === module) {
  // add your own custom tests here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}
module.exports = hasTargetSum;