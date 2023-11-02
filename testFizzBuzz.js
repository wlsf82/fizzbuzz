const fizzbuzz = require('./src/index')

// Create an array with 100 positions, all filled with 1's
const myArray = Array(100).fill(1, 0, 100)
// Create another array based on the above one,
// in which the value of each item is summed up by its index,
// making it an array of 1 to 100.
const myUpdatedArray = myArray.map((val, index) => val + index)

console.log(fizzbuzz(myUpdatedArray))
