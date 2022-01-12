const EventEmitter = require('events');

class Logger extends EventEmitter{
    log(msg)
    {
        console.log(msg);
        this.emit('saveUserData', {'name': 'Jhon', 'Depertment' : 'Engineering'});
    }
}

module.exports = Logger;