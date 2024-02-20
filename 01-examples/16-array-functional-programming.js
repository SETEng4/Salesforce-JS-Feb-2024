var nos = [3,1,4,2,5];


/* 
function filterEven(nos){
    var result = [];
    for(var i = 0; i < nos.length; i++){
        if (nos[i] % 2 === 0){
            result.push(nos[i]);
        }
    }
    return result;
}

function filterOdd(nos){
    var result = [];
    for(var i = 0; i < nos.length; i++){
        if (nos[i] % 2 !== 0){
            result.push(nos[i]);
        }
    }
    return result;
} 
*/

// implementation of the built-in 'filter' method of the array
/* 
function filter(nos, criteriaFn){
    var result = [];
    for(var i = 0; i < nos.length; i++){
        if (criteriaFn(nos[i]) === true){
            result.push(nos[i]);
        }
    }
    return result;
}

function isOdd(no){
    return no % 2 === 1;
}
var oddNOS = filter(nos, isOdd)

function isEven(no){
    return no % 2 === 0;
}
var evenNos = filter(nos, isEven) 
*/

// using built-in methods
// filter
var evenNos = nos.filter(function(no){
    return no % 2 === 0;
})
console.log(evenNos);

// map (transformation)
var doubleNos = nos.map(function(no){
    return no * 2;
})
console.log(doubleNos);

// find (returns the first value that matches the given predicate)
nos.find(function(no){
    return no < 10;
})

// every (returns true if all the values in the array satisfies the given predicate)
var areAllEvenNos = nos.find(function(no){
    return no % 2 === 0;
})

// some (returns true if atleast one value in the array satisfies the given predicate)
var areThereAnyEvenNos = nos.some(function(no){
    return no % 2 === 0;
})

// forEach (perform some action on each item in the array)
nos.forEach(function(no){
    console.log('no : ', no);
})

// HOMEWORK : study 'reduce' method

