let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges","salt"]

// Array.pop() → removes the last element in the array and returns that element.

let getLastItem = (arr => arr.pop())
console.log(getLastItem(shoppingList))

//**** Array.unshift() → adds a new element at the beginning of the array.

let addItem = (arr => arr.unshift('pepper'))
console.log(addItem(shoppingList))

// Array.shift() → removes the first element in an array and returns that element.

let remFirst = (arr => arr.shift())
console.log(remFirst(shoppingList))

// **** Array.forEach() → calls a function once for each element in the array.

let changeList = [] 
shoppingList.forEach(element => {
    changeList.push(element.toUpperCase())
})
console.log(changeList)

// **** Array.map() → transforms the elements in the original array by calling the given function once for each element in the array.

const capitalArr = shoppingList.map(elem =>{
    return elem.toUpperCase()
})
console.log(capitalArr)

// Array.filter() → creates a new array with only the elements that pass the test in a given function.

const findLongWords = shoppingList.filter(listWords => listWords.length >5)
console.log(findLongWords)

// Array.find() → returns the first element in an array that passes a test given as a function.

const findItem = shoppingList.find(itemName => itemName === 'limes')
console.log(findItem)

//*** Array.reduce() → executes a given function for each value of the array and returns a single value.

 const listOrder = shoppingList.reduce((prev, curr) => prev + ',' + curr)
 console.log(listOrder)

// Array.includes() → determines whether an array has a specific element.

let findList = arr => arr.includes('grenadine')
console.log(findList(shoppingList))

// Array.indexOf() → search the array for a specific element and returns its first index.

let returnIndex = arr => arr.indexOf('oranges')
console.log(returnIndex(shoppingList))

// Array.findIndex() → returns the index of the first element in an array that passes the test in a given function.

let shopIndex = arr => arr.length > 6
console.log(shoppingList.findIndex(shopIndex))

// Array.every() → checks if all elements in an array pass a test given as a function
const checkElem = arr => arr.length > 3
console.log(shoppingList.every(checkElem))