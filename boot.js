module.exports.start = () => {
    execute(require("fs").readFileSync("testfile"))
    //process.exit()
}

var event = require("./event.js")
require("./memory.js")()
var execute = require("./interpreter.js")
require("./loop.js").start(10)

