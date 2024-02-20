
// apply commonality-variability (keep what is common together, move out what is varying)
function logOperation(operation, x, y){
    console.log('operation started')
    operation(x,y)
    console.log('operation completed')
}

// usage
logOperation(add,100,200)
logOperation(subtract, 100, 200)
logOperation(function multiply(x,y){
    console.log('multiply result :', x * y);
}, 100, 200)

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