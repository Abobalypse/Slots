//1. Deposit some money
//2. Determine number of lines to bet on
//3. Collect a bet amount
//4. Spin the slot machine
//5. Check if user won
//6. Payout earnings or take bet
//7. Play again?

const prompt = require("prompt-sync")();

const deposit = () => {
  while (true){
    const depositAmount = prompt("Enter a deposit amount: ")
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
        console.log("Invalid deposit amount, enter a valid number.")
    } else {
        return numberDepositAmount;
    }
  }
};

const getNumberOfLines = () => {
    while (true){
        const lines = prompt("Enter the number of lines to bet on (1-3): ")
        const numberOfLines = parseFloat(lines);
    
        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log("Invalid deposit amount, enter a valid number.")
        } else {
            return numberDepositAmount;
    }
  }
};

deposit();