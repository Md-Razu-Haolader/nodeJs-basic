const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('saveData',(ev, ev1) => {
    console.log(ev);
    console.log(ev1);
    console.log('Data saved successfully');
});
emitter.emit('saveData', 
    {'name': 'Jhon', 'Depertment' : 'Engineering'},
    {'name': 'David', 'Depertment' : 'Support'}
);