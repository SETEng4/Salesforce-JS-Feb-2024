/* 
Write a program that will print the first 10 prime numbers between 3 and 100
*/
/* 
refactoring to functions
*/

function isPrime(no){
    for (var i = 2; i <= (no/2); i++){
        if (no % i == 0){
            return false;
        }
    }
    return true;
}

function generateNos(start, end, limit, criteria){
    var count = 0;
    for (var no = start; no <= end; no++){
        if (count >= limit){
            break;
        }
        if (criteria(no)){
            count++
            console.log(no)
        }
    }
}

generateNos(2,100,20, isPrime)