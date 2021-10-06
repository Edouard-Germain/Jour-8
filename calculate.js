function  calculate (number1, operator, number2)
{
    var result = 0
    if (operator === "+"){
     result = number1 + number2
    } else if ( operator === "-"){
        result = number1 - number2
    } else if (operator === "x"){
        result = number1*number2
    } else if (operator ==="/"){
        result = number1/number2
    } else if (operator === "%"){
        result= number1%number2
    } else {
        console.log("error")
    }
    console.log(result)
}


console.log(process.argv.slice(2))

var argument = process.argv.slice(2)[0]
var argument1 = process.argv.slice(2)[1]
var argument2 = process.argv.slice(2)[2]

calculate (argument, argument1, argument2)
