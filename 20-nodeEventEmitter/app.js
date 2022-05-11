const EventEmitter = require('events');


// const eventEmitter = new EventEmitter();
// eventEmitter.on('start', () => {
//     console.log('started')
//   })

// eventEmitter.emit('start')


// eventEmitter.on('start', (start, end) => {
//     console.log(`started from ${start} to ${end}`)
//   })
  
// eventEmitter.emit('start', 1, 100)



// We can inherit EventEmitter make our own custom emitter;
class SaleEventEmitter extends EventEmitter{
    constructor(){

    }

    onSale(){
        this.on('sale',function(salePrice){
            console.log(salePrice);
        })
    }

    emitSale(){
        this.emit('sale');
    }
}

module.exports = SaleEventEmitter;


/**
 * once(): add a one-time listener
   removeListener() / off(): remove an event listener from an event
   removeAllListeners(): remove all listeners for an event
 */
