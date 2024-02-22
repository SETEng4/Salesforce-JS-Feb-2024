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
function addAsync(x,y){
    console.log('   [@service] processing ', x, ' and ', y);
    setTimeout(function(){
        var result = x + y;
        console.log('   [@service] returning result');
        return result;
    }, 4000);
}

function addAsyncClient(x,y){
    console.log('[@client] starting the operation')
    var result = addAsync(x,y);
    console.log('[@client] operation completed, result :', result)
}