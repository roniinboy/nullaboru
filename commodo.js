// Original array
let array = [1, 2, 3, 4, 5];

// Specify the offsets of the elements to be moved
let fromIndex = 2; // Offset of the first element to be moved
let count = 2; // Number of elements to be moved

// Specify the new offsets for the moved elements
let toIndex = 4; // New offset for the first moved element

// Use the splice method to move the elements
let movedElements = array.splice(fromIndex, count);
array.splice(toIndex, 0, ...movedElements);

// Output the updated array
console.log(array); // Output: [1, 2, 5, 3, 4]
