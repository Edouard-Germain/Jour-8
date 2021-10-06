function multiply(number){
    
        var resultat = 0
    for( var i= 0 ; i<=10; i++){
        var resultat= number * i
        console.log( number + "x" + i + "=" + resultat)
    }
    
      


}

console.log(process.argv.slice(2))

var argument = process.argv.slice(2)[0]

multiply (argument)