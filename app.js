/**
 * simple function - sayHello
 */
function sayHello(name) {
    console.log('Hello ' + name)
}
sayHello('Vineet');

/**
 * prints meta data of this module or app.js
 */
console.log(module);

/**
 * example of a function
 */
// const log = require('./logger');
// log('Hello World');

const path = require('path');
var parsedPath = path.parse(__filename);
console.log(parsedPath);

const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();

// console.log('Total Memory: ' + totalMemory);
console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);

/**
 * sync way of reading a directory files
 */
const fs = require('fs');
const files = fs.readdirSync('./');
console.log(files);

/**
 * async way of reading a directory files
 */
fs.readdir('./', function(error, files) {
    if(error) {
        console.log(`Error: ${error}`);
    } else {
        console.log(`Results: ${files}`);
    }
});

const Logger = require('./logger');
const logger = new Logger();
/**
 * registering a listener
 */
logger.on('messageLogged', (arg) => {
    console.log(`Listener called: ${arg.id}`);
});
logger.log('Message Sent');

/**
 * http
 */
const http = require('http');
const server = http.createServer((request, response) => {
    if(request.url === '/') {
        response.write('Hello World');
        response.end();
    } else if(request.url === '/api/courses') {
        response.write(JSON.stringify([1,2,3]));
        response.end();
    }
});

server.on('connection', (socket) => {
    console.log('New connection..')
});
server.listen(3000);

console.log('server listening on port 3000...');
