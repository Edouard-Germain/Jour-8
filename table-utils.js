function multiply(number){
    
    var resultat = 0
    
    for( var i= 0 ; i<=10; i++){
        var resultat= number * i
        console.log( number + "x" + i + "=" + resultat)
}
}

function addition(number){

    var resultat = 0
    
    for( var i= 0 ; i<=10; i++){
        var resultat= number + i
        console.log( number + "+" + i + "=" + resultat)
}
}

module.exports = {
    multiply,
    addition
}