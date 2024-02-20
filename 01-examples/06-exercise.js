/* 
Write a program that will print the first 10 prime numbers between 3 and 100
*/
var primeCount = 0;
for (var no = 3; no <= 100; no++){
    var isPrime = true;
    if (primeCount >= 10){
        break;
    }
    for (var i = 2; i <= (no/2); i++){
        if (no % i == 0){
            isPrime = false;
            break;
        }
    }
    if (isPrime){
        primeCount++
        console.log('Prime No :', no)
    }
}