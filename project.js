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

const getNumberOfLines = () => {

  while(true){
    const lines = prompt("Enter the number of lines to bet on (1-3): ");
    const numberOfLines = parseInt(lines);

    if (isNaN(numberOfLines) || numberOfLines<=0 || numberOfLines>3){
      console.log("Invalid Number of Lines, Try again.");
    }else {
      return numberOfLines;
    }
  }

}

const getBet = (balance, lines) => {
  while(true){
    const bet = prompt("Enter bet per line: ");
    const numberbet = parseFloat(bet);

    if (isNaN(numberbet) || numberbet<=0 || numberbet>balance/lines){
      console.log("Invalid bet, Try again.");
    }else {
      return numberbet;
    }
  }
}

let balance = deposite();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance,numberOfLines);
console.log(bet);