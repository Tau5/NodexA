const stream = require('stream');
const utils = require("util")
const readline = require('readline');
var event = require("./event.js")

var cursor = require('ansi')(process.stdout)
process.on("exit", () => {
    cursor.show()
})

module.exports.start = (ms) => {
    const boot = require('./boot.js');
    //cursor.hide() // Uncoment to hide cursor
    
    module.exports.interval = setInterval(() => {
        readline.cursorTo(process.stdout, 0, 0);
        readline.clearScreenDown(process.stdout);
        for(i=0;i<150;i++){
                process.stdout.write(String.fromCharCode(memory[0x10+i]))
        }
        
    }, ms)
    boot.start()
    return
    }
