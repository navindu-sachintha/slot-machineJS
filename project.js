/*
--------------- Program Steps ---------------------
 1. Deposite Money
 2. Determine the number of lines to bet on
 3. Collect bet amount
 4. Spin the slot machine
 5. Check if user won
 6. Give  the user  their winnigs or take the lost
 7. Play again
 --------------------------------------------------
*/
const prompt = require("prompt-sync")();

const deposite = () => {
  while(true){
    const depositeAmount = prompt("Enter a Deposite Amount: ");
    const numberDepositeAmount = parseFloat(depositeAmount);

    if (isNaN(numberDepositeAmount) || numberDepositeAmount<0){
      console.log("Invalid Deposite amount, Try again.");
    }else {
      return numberDepositeAmount;
    }
  }
}

const depositeAmount = deposite();
console.log(depositeAmount);