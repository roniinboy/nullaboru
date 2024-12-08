// Define an anonymous function that takes a 'block' parameter
const myFunction = function(block) {
    // Function logic goes here
    console.log('Block received:', block);
    // You can perform operations using the 'block' parameter
    // For example:
    // return block.someProperty + 10; // Perform some operation and return a value
};

// Usage example:
const exampleBlock = { name: 'example', value: 123 };
myFunction(exampleBlock); // Call the function with an example block
