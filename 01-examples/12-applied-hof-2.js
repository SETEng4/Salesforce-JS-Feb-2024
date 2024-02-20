
// apply commonality-variability (keep what is common together, move out what is varying)
function getLogOperation(operation){
    return function(x, y){
        console.log('operation started')
        operation(x,y)
        console.log('operation completed')
    }
}

// usage
var logAdd = getLogOperation(add)
logAdd(100,200)

var logSubtract = getLogOperation(subtract)
logSubtract(100,200)

var logMultiply = getLogOperation(function(x,y){
    console.log('Multiply result : ', x * y)
})
logMultiply(100,200)

getLogOperation(add)(10,20)

// wrapper functions
/* 
function logAdd(x,y){
    console.log('operation started')
    add(x,y)
    console.log('operation completed')
}

function logSubtract(x,y){
    console.log('operation started')
    subtract(x,y)
    console.log('operation completed')
} 
*/

// 3rd party library functions (we cannot modify the code)
function add(x,y){
    console.log('add result : ', x + y);
}

function subtract(x,y){
    console.log('subtract result : ', x - y)
}