/**
 * Every time the event loop takes a full trip, we call it a tick.
 */

/**
 * When we pass a function to process.nextTick(), 
 * we instruct the engine to invoke this function at the end of the current operation, 
 * before the next event loop tick starts
 */

/**
 * e.g 
 process.nextTick(() => {
  //do something
})
 */

/**
 * The event loop is busy processing the current function code.

 * When this operation ends, the JS engine runs 
 * all the functions passed to nextTick calls during that operation.

 * It's the way we can tell the JS engine to process a function asynchronously 
 * (after the current function), but as soon as possible, not queue it.
 */

function setTimeoutCallback(){
    console.log('executed by settimeout');
}

function promise(res){
    console.log(res);
}

function callAfterMain() {
    console.log('called after main');
}
function main(){
    process.nextTick(()=>{
        console.log('\x1b[33m%s\x1b[0m','next tick is called after the all synchronouse operation and before all asynchronous operation');
    })
    console.log('first executed main');
    setTimeout(setTimeoutCallback, 1000);
    Promise.resolve('executed by promise').then(promise);
}


main();

callAfterMain();

(()=>{
    console.log('iife');
})();