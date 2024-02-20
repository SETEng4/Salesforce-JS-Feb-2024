
function f1(){
    console.log('f1 invoked');
}

function f2(){
    console.log('f2 invoked');
}

/* 
function exec(fnName){
    // based on the argument execute either f1 or f2
    switch (fnName) {
        case 'f1':
            f1()
            break;
        case 'f2':
            f2()
            break;
        default:
            console.log('invalid argument');
    }
} 
*/

function exec(fn){
    if (typeof(fn) == 'function'){
        fn()
    }
}

// usage
exec(f1)
exec(f2)
exec(function(){
    console.log('anon fn invoked')
})