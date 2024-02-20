
function divide(x,y){
    if (y === 0){
        throw new Error('divisor cannot be 0')
    }
    return x / y
}

function divideClient(x,y){
    try {
        var result = divide(x,y)
        console.log(result)
    } catch (e){
        console.log('something went wrong :', e)
    }
}

// usage
divideClient(100,7)
divideClient(100,0)
