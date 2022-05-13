const log = console.log;

const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.addListener() //Alias for emitter.on()

emitter.emit() //Emits an event. 
//It synchronously calls every event listener in the order they were registered.

emitter.eventNames() //Return an array of strings that represent the events 
//registered on the current EventEmitter object:

emitter.getMaxListeners() //Get the maximum amount of listeners one can add to an 
//EventEmitter object, which defaults to 10 but can be increased or 
//lowered by using setMaxListeners()

emitter.listenerCount() //Get the count of listeners of the event passed as parameter:

emitter.listeners() //Gets an array of listeners of the event passed as parameter:

emitter.off() //Alias for emitter.removeListener() added in Node.js 10

emitter.on() //Adds a callback function that's called when an event is emitted.

emitter.once() //Adds a callback function that's called when an event is emitted for the first time
// after registering this. This callback is only going to be called once, never again.

emitter.prependListener() //When you add a listener using on or addListener, 
//it's added last in the queue of listeners, and called last. 
//Using prependListener it's added, and called, before other listeners.

emitter.prependOnceListener() //When you add a listener using once, 
//it's added last in the queue of listeners, and called last. 
//Using prependOnceListener it's added, and called, before other listeners.

emitter.removeAllListeners() //Removes all listeners of an EventEmitter object 
//listening to a specific event:

emitter.removeListener() //Remove a specific listener. 
//You can do this by saving the callback function to a variable, 
//when added, so you can reference it later:

emitter.setMaxListeners() //Sets the maximum amount of listeners one can add to an 
//EventEmitter object, which defaults to 10 but can be increased or lowered.





const prependFunction = () =>{
  log('prepended function');
}
const function1 = () =>{
  log('function1')
}
const function2 = () =>{
  log('function2')
}
function function3(){
  log('function3')
}
/***************Add listener and on and emit */
emitter.addListener('hello1',function1);
emitter.addListener('hello1',function2);
emitter.on('hello1',function3);

emitter.emit('hello1');
////////////////////////////////////////////////////

/**************** Prepend Listener *********** */
emitter.prependListener('hello1',prependFunction);
log(emitter.listeners('hello1'));
///////////////////////////////////////////////////

/**************** Remove Listener ************************** */
emitter.removeListener('hello1',function1);
emitter.off('hello1',function3);
emitter.removeAllListeners('hello1');
///////////////////////////////////////////////////////////////

/**************Once emitter****************** */
const onetimeFunction = () =>{
  log('one time');
}
emitter.once('onetime',onetimeFunction);
//Will be called for the first one only.
emitter.emit('onetime');
//But it will not show any error for the latter calls
emitter.emit('onetime');
emitter.emit('onetime');
emitter.emit('onetime');
////////////////////////////////////////////////////////////


/******************* SetMaxListener ********************* */
// Sets the maximum amount of listeners one can add to an EventEmitter object, 
// which defaults to 10 but can be increased or lowered.
emitter.setMaxListeners(50);
/////////////////////////////////////////////////////////////
