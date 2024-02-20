/* function statement */
function sayHi(){
    console.log('Hi!')
}

// parameter
function greet(userName){
    console.log('Hi ' + userName + ', Have a nice day!')
}

// returning result
function getGreetMsg(userName){
    var msg = 'Hi ' + userName + ', Have a nice day!';
    return msg;
}

// multi-parameters
function add(x,y){
    return x + y
}

/* function expression */
var subtract = function(x,y){
    return x - y;
}