// ***** // Map // ***** //
// holds key-value pairs where the keys can be any datatype.
// remembers the original insertion order of the keys.

// ***** // You can create a JavaScript Map by // ***** // 
// Passing an Array to new Map()
// Create a Map and use Map.set()

const arrayFruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(
    "arrayFruits : ",
    arrayFruits
);
// arrayFruits: (4)['Banana', 'Orange', 'Apple', 'Mango']

const entriesFruits = fruits.entries();
console.log(
    "entriesFruits : ",
    entriesFruits
);
// entriesFruits:  Array Iterator { }

const mapFruits = new Map(entriesFruits)
console.log(
    "mapFruits : ",
    mapFruits
);
// mapFruits: Map(4) { 0 => 'Banana', 1 => 'Orange', 2 => 'Apple', 3 => 'Mango' }

// The get() method get the value of a key in a map
console.log(
    "Get the value at Key 0 is : ",
    mapFruits.get(0) // 'Banana'
);

// The set() method set the value of a key in a map
console.log(
    "Set the value at Key 4 : ",
    mapFruits.set(4, 'Kiwi')
    // Map(5) { 0 => 'Banana', 1 => 'Orange', 2 => 'Apple', 3 => 'Mango', 4 => 'Kiwi' }
);

// The set() method update the value of a key in a map
console.log(
    "Update the value at Key 2 : ",
    mapFruits.set(2, 'Apples')
    // Map(5) { 0 => 'Banana', 1 => 'Orange', 2 => 'Apples', 3 => 'Mango', 4 => 'Kiwi' }
);

// The size property returns the number of elements in a map:
console.log(
    "Get number of elements in a map : ",
    mapFruits.size // 5
);

// The delete() method removes a map element:
console.log(
    "Delete the value at Key 2 : ",
    mapFruits.delete(2) // true
    // Map(4) {0 => 'Banana', 1 => 'Orange', 3 => 'Mango', 4 => 'Kiwi'}
);

// The has() method returns true if a key exists in a map:
console.log(
    "Check if value if a key 3 exists : ",
    mapFruits.has(3) // true
);

// The entries() method returns an iterator object with the [key,values] in a map:
console.log(
    "An iterator object with the [key,values] : ",
    mapFruits.entries()
    // MapIterator {0 => 'Banana', 1 => 'Orange', 3 => 'Mango', 4 => 'Kiwi'}
);

// The keys() method returns an iterator object with the keys in a map:
console.log(
    "An iterator object with the keys : ",
    mapFruits.keys()
    // MapIterator {0, 1, 3, 4}
);

// The values() method returns an iterator object with the values in a map:
console.log(
    "An iterator object with the values : ",
    mapFruits.values()
    // MapIterator {'Banana', 'Orange', 'Apple', 'Mango'}
);

// The clear() method removes all the elements from a map:
console.log(
    "Removing all the elements in a map : ",
    mapFruits.clear() // undefined
);
