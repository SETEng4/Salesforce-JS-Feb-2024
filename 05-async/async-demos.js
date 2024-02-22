// Sync
function addSync(x,y){
    console.log('   [@service] processing ', x, ' and ', y);
    var result = x + y;
    console.log('   [@service] returning result');
    return result;
}

function addSyncClient(x,y){
    console.log('[@client] starting the operation')
    var result = addSync(x,y);
    console.log('[@client] operation completed, result :', result)
}

// async
function addAsyncCallback(x,y, callbackFn){
    console.log('   [@service] processing ', x, ' and ', y);
    setTimeout(function(){
        var result = x + y;
        console.log('   [@service] returning result');
        callbackFn(result)
    }, 2000);

}

function addAsyncCallbackClient(x,y){
    console.log('[@client] starting the operation')
    addAsyncCallback(x,y, function(result){
        console.log('[@client] operation completed, result :', result)
    });
}