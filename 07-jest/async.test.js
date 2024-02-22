function addAsyncCallback(x,y, callbackFn){
    console.log('   [@service] processing ', x, ' and ', y);
    setTimeout(function(){
        var result = x + y;
        console.log('   [@service] returning result');
        callbackFn(result)
    }, 2000);

}

test("addAsyncCallback(100,200) => 300", function(done){
    addAsyncCallback(100,200, function(result){
        expect(result).toBe(300);
        done();
    });
});

function addAsyncPromise(x,y){
    console.log('   [@service] processing ', x, ' and ', y);
    var p = new Promise(function(resolveFn, rejectFn){
        setTimeout(function(){
            var result = x + y;
            console.log('   [@service] returning result');
            resolveFn(result);
        }, 3000);
    });
    return p;
}

test("addAsyncPromise(100,200) => 300", function(done){
    var p = addAsyncPromise(100,200)
    p.then(function(result){
        expect(result).toBe(300);
        done();
    });
});