// Array:
// Associative Array or Named Array

// for-each loop
// for-in   loop

// Insert at Start:	    shift
// Remove at Start:     unshift
// Insert at End: 	    push
// Remove at End: 		  pop
// Insert at any index:	splice
// Get a chunk:		      Slice

const numbers = [13, 3, 6, 3, 7, 9, 12, 3, 4, 1, 2, 3, 5];

// ***** // Array Search // ***** //
// indexOf()  : Searches an array for an element value and returns its position.
console.log(
  "Position of element 3 is : ",
  numbers.indexOf(3)
);

// lastIndexOf() : Same as Array.indexOf(), but returns the position of the last occurrence of the specified element.
console.log(
  "position of the last occurrence of 3 is : ",
  numbers.lastIndexOf(3)
);

// includes() : Allows us to check if an element is present in an array (including NaN, unlike indexOf).
console.log(
  "3 is Present?  : ",
  numbers.includes(3)
);

// find() : returns the value of the first array element that passes a test function.
console.log(
  "Find the element 3 : ",
  numbers.find(
    x => x == 3
  )
);

// findIndex : returns the index of the first array element that passes a test function.
console.log(
  "Index of 3 of first array element : ",
  numbers.findIndex(
    x => x == 3
  )
);

// findLast() : will start from the end of an array and return the value of the first element that satisfies a condition.
console.log(
  "Find the value 3 start from the end of an arrat and return the value of the first element : ",
  numbers.findLast(
    x => x == 3
  )
);
// findLastIndex() : finds the index of the last element that satisfies a condition.
console.log(
  "Position of 3 of last array element : ",
  numbers.findLastIndex(
    x => x == 3
  )
);

// ***** // Array Sort // ***** //
// sort() : This method sorts an array alphabetically with altering the original array.
console.log(
  "Array after applying sort() : ",
  numbers.sort()
);
// toSorted() : This method sorts an array alphabetically without altering the original array.
console.log(
  "Array after applying toSorted() : ",
  numbers.toSorted()
);
// reverse() : This method reverses the elements in an array with altering the original array.
console.log(
  "Array after applying reverse() : ",
  numbers.reverse()
);
// toReversed() : This method reverses the elements in an array without altering the original array.
console.log(
  "Array after applying toReversed() : ",
  numbers.toReversed()
);

// ***** //Numeric Sort // ***** // 
// ***** // Using the Compare Function to get accurate results // ***** //

// sort() : This method sorts an array alphabetically with altering the original array.
console.log(
  "Array after applying sort() : ",
  numbers.sort(
    (a, b) => a - b)
);
// toSorted() : This method sorts an array alphabetically without altering the original array.
console.log(
  "Array after applying toSorted() : ",
  numbers.toSorted(
    (a, b) => a - b)
);
// reverse() : This method reverses the elements in an array with altering the original array.
console.log(
  "Array after applying reverse() : ",
  numbers.reverse(
    (a, b) => a - b)
);
// toReversed() : This method reverses the elements in an array without altering the original array.
console.log(
  "Array after applying toReversed() : ",
  numbers.toReversed(
    (a, b) => a - b)
);
// Sorting an Array in Random Order:
console.log(
  "Array after sorting in  Random Order : ",
  numbers.sort(
    () => 0.5 - Math.random())
);
// The Fisher Yates Method:
for (let i = numbers.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));
  let k = numbers[i];
  numbers[i] = numbers[j];
  numbers[j] = k;
}
console.log(
  'Array after sorting in Random Order "Fisher Yates Method" : ',
  numbers
);

// ***** // Array Iteration // ***** //

// forEach()
// Calls a function (a callback function) once for each array element.
numbers.forEach(
  (x, y, z) => {
    console.log(x);
  }
);

// map() 
// creates a new array by performing a function on each array element.
// does not execute the function for array elements without values.
// does not change the original array.
console.log(
  "Applying map() by multiplying all values with 2 : ",
  numbers.map(
    (x, y, z) => x * 2
  )
);

// filter()
// creates a new array with array elements that pass a test.

console.log(
  "Applying filter() to get even numbers : ",
  numbers.filter(
    x => x % 2 == 0
  )
);

// reduce()
// runs a function on each array element to produce (reduce it to) a single value.
// works from left-to-right in the array. See also reduceRight().
// Note that the function takes 4 arguments:
// The total (the initial value / previously returned value)
// The item value
// The item index
// The array itself

console.log(
  "Applying reduce() to calculate total : ",
  numbers.reduce(
    (total, value, index, array) => total + value
  )
);

// Array.from()
// returns an Array object from any object with a length property or any iterable object.
Array.from("ABCDEFG");

// entries() 
// returns an Array Iterator object with key/value pairs:
// [0, "Banana"]
// [1, "Orange"]
// [2, "Apple"]
// [3, "Mango"]
// The entries() method does not change the original array.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.entries();
keys.forEach(
  (x, y) => {
    if (y == 1) {
      console.log(x)
    }
  }
);

// with()
// a safe way to update elements in an array without altering the original array.

const months = ["Januar", "Februar", "Mar", "April"];
const myMonths = months.with(2, "March");

// Spread (...)
// operator expands an iterable (like an array) into more elements:

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];
const year = [...q1, ...q2, ...q3, ...q4];
