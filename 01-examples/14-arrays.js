/* 
var nos = []
nos.push(3)
nos.push(5)
nos.push(1)
nos.push(4)
nos.push(2) 
*/

var nos = [3,1,5,4,2]

console.log(nos.pop()) // remove & return the last element

console.log(nos[0]) 
console.log(nos[1]) 

console.log('count :', nos.length)

// slice (returns a subset without modifying the original array)
var nosSubset = nos.slice(1,3)

// splice (remove the values from the original array)
var removedNos = nos.splice(1,3)

// concat (returns a new array with the given values appended)
nos.concat(10,20,30,40)

// fill (fill the elements with the given value)
nos.fill(100)

// indexOf (returns the index of the given value)
nos.indexOf(5)