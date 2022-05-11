/**
 * When you want to execute some piece of code asynchronously, but as soon as possible, 
 * one option is to use the setImmediate() function provided by Node.js
 */

/**
 * Any function passed as the setImmediate() argument is a callback 
 * that's executed in the next iteration of the event loop.
 * How is setImmediate() different from setTimeout(() => {}, 0) (passing a 0ms timeout), 
 * and from process.nextTick()?
 */

/**
 * A setTimeout() callback with a 0ms delay is very similar (equivalent) to setImmediate(). 
 * The execution order will depend on various factors, 
 * but they will be both run in the next iteration of the event loop.
 */

/**
 * Generally setImmediate is called after process.nextTick as well as promise and before setTimeout.
 
 * Some browsers (IE and Edge) implement a setImmediate() method that does 
 * the same exact functionality, but it's not standard and unavailable on other browsers. 
 * But it's a standard function in Node.js.
 */
function setTimeoutCallback(){
    console.log('\x1b[36m%s\x1b[0m','executed by settimeout');
}

function setImmediateCallback(){
    console.log('\x1b[35m%s\x1b[0m','setImmediate is called after process.nextTick and promise but before setTimeout');
}

function promise(res){
    console.log('\x1b[36m%s\x1b[0m',res);
}

function callAfterMain() {
    console.log('called after main');
}
function main(){
    setImmediate(setImmediateCallback);
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