/* function as a return value */

function f1(){
    console.log('f1 invoked');
}

function f2(){
    console.log('f2 invoked');
}

function getFn(){
    if (Math.round(Math.random() * 10) % 2 == 0){
        return f1;
    }
    return f2;
}

var fn = getFn()
fn()