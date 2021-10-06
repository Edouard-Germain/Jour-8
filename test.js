var prompt = require("prompt")
prompt.start()
var prompt = require("prompt");
var min = 0
var max = 100
var mysteryNumber = Math.floor(Math.random() * (max - min + 1) + min)

prompt.start()

    function displayPrompt() {
    prompt.get({ name: "q", description: " Quel est le nombre magique ?" }, function (err, res) { 
      if (res.q === mysteryNumber) {
        console.log("Bien joué  !")
      }else if (res.q < mysteryNumber) {
          console.log("c'est plus")
          displayPrompt()      
      } else if (res.q > mysteryNumber){
        console.log("c'est moins !")
        displayPrompt()
      } else {
          displayPrompt()
      }
    })
}
displayPrompt ()