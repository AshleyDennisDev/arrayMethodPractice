let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges","salt"]

// Array.pop() → removes the last element in the array and returns that element.

let getLastItem = shoppingList.pop()
console.log(getLastItem)

//**** Array.unshift() → adds a new element at the beginning of the array.

let addItem = shoppingList.unshift("pepper")
console.log(addItem + shoppingList)

// Array.shift() → removes the first element in an array and returns that element.

let remFirst = shoppingList.shift()
console.log(remFirst)

// **** Array.forEach() → calls a function once for each element in the array.

// shoppingList.forEach(item => console.log(item))

// **** Array.map() → transforms the elements in the original array by calling the given function once for each element in the array.

// shoppingList.map(item => console.log(item))


// Array.filter() → creates a new array with only the elements that pass the test in a given function.

const findLongWords = shoppingList.filter(listWords => listWords.length >5)
console.log(findLongWords)

// Array.find() → returns the first element in an array that passes a test given as a function.

const findItem = shoppingList.find(itemName => itemName === 'limes')
console.log(findItem)

//*** Array.reduce() → executes a given function for each value of the array and returns a single value.

//  const listOrder = shoppingList.reduce((salt, celery) => salt celery )
//  console.log(listOrder)

// Array.includes() → determines whether an array has a specific element.

let findList = shoppingList.includes('grenadine')
console.log(findList)

// Array.indexOf() → search the array for a specific element and returns its first index.

let returnIndex = shoppingList.indexOf('oranges')
console.log(returnIndex)

// Array.findIndex() → returns the index of the first element in an array that passes the test in a given function.

let shopIndex = shoppingList.findIndex(listIndex => listIndex === "lemons")
console.log(shopIndex)

// Array.every() → checks if all elements in an array pass a test given as a function
