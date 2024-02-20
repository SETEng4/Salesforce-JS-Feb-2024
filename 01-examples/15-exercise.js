function isPrime(no){
    for (var i = 2; i <= (no/2); i++){
        if (no % i == 0){
            return false;
        }
    }
    return true;
}

// modify the below function to return the result as an array
function generateNos(start, end, limit, criteria){
    var count = 0;
    var result = [];
    for (var no = start; no <= end; no++){
        if (count >= limit){
            break;
        }
        if (criteria(no)){
            count++
            result.push(no);
        }
    }
    return result;
}

generateNos(2,100,20, isPrime)