/** Steps to run the file
    1) First install Typescript: `npm install`
    2) run
      FILENAME=map FOLDER=Map npm run compile
      FILENAME=map FOLDER=Map npm run output
*/

// The Map object holds key-value pairs and remembers the original insertion order of the keys

// Maps are created with new keyword.

let map = new Map();

// Items can be added to the map by using set function which takes key and value.
// Any value (both objects and primitive values) may be used as either a key or a value.
map.set('key', 'value');
map.set(1, 'value2');


// To retrieve the value from map we can use get function which takes key as the parameter.
console.log('Value of the key `key` is: ', map.get('key'));
console.log('Value of the key `1` is: ', map.get(1));

/**
 The common operations available in a Map are:
    map.set(key, value) – adds a new entry in the Map.
    map.get(key) – retrieves the value for a given key from the Map.
    map.has(key) – checks if a key is present in the Map.
    map.delete(key) – deletes a key-value pair using its key.
    map.clear() – deletes all entries from the Map.
    map.size – returns the count of entries in the Map
 */

// Check entry is present or not with has function
console.log('For key `Typescript` which is not present in the map: Returns ', map.has('Typescript'));
console.log('For key `key` which is present in the map: Returns ', map.has('key'));

// Check entry is present or not with size variable
console.log('Size of the map is: ', map.size);

// Delete an entry with delete function
map.delete('key');
console.log('Size of the map after delete is: ', map.size);

// Clear the whole map with clear function
map.clear();
console.log('Size of the map after clear is: ', map.size);


/**
    Looping over map.
*/

const myMap = new Map()
myMap.set('0', 'foo')
myMap.set(1, 'bar')
myMap.set({}, 'baz')

// Using [@@iterator]()
const mapIter = myMap[Symbol.iterator]()

console.log('Iterating over map using [@@iterator]()')
console.log(mapIter.next().value);
console.log(mapIter.next().value);
console.log(mapIter.next().value);
