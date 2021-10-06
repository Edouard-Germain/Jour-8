var addition = require("./table-utils.js").addition
var multiply = require("./table-utils.js").multiply

console.log(process.argv.slice(2))

var argument = process.argv.slice(2)[0]

multiply (argument)
addition(argument)