//DailyChallege
function processInput(someInput:number|string|boolean) {
    if (typeof someInput === "number") {
      return someInput**2
    }
    else if (typeof someInput==="string") {
      return someInput.toUpperCase()
    }
    else if (typeof someInput==="boolean") {
      return !someInput
    }
    
  }
  
  console.log(processInput(14))
  console.log(processInput(-10))
  console.log(processInput("Roger the Dodger"))
  console.log(processInput("18"))
  console.log(processInput(true))