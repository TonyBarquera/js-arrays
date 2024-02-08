const words = ['spray', 'limit', 'elite', 'exuberant'];

// Method filter is immutable
// The method filter returns an array with all the items that 
// satisfy a condition 

// array.filter(callback)
// callback -> function (item => { ...code })
// Note: The callback return a boolean (true or false)

// Example: filter all the word that their length are greater than six
const filteredWords = words.filter(word => word.length > 6);

console.log(filteredWords);