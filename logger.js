/**
 * EventEmitter class
 */
const EventEmitter = require('events');

console.log(__filename);
console.log(__dirname);

/**
 * example to export a function
 */
// var url = 'http://mylogger.io/log';
// function log(message) {
//     // send an http request
//     console.log(message);
// }

class Logger extends EventEmitter{
    log(message) {
        // send an http request
        console.log(message);
    
        /**
         * raising an event
         */
        this.emit('messageLogged', {
            id: 1,
            url: 'http://'
        });
    }
}
module.exports = Logger;



