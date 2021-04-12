const EventEmitter = require('events');

const customEmitter = new EventEmitter()

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it

customEmitter.on('response', (name, id)=>{
    console.log(`data received${name} with id: ${id}`);
})
customEmitter.on('response', ()=>{
    console.log(`some other logic here`);
})

customEmitter.emit('response', 'john', 34)