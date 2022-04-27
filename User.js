class User {
    constructor(username, emailAddress) {       
        this.name = username      
        this.email = emailAddress  
        this.accountBalance = 0
    }



    makeDeposit(amount) {
        this.accountBalance += amount; 
        return this;
    }
    makeWithdrawal(amount) {
        this.accountBalance -= amount;
        return this;
    }
    displayBalance() {
        console.log(`${this.name}'s balance is ${this.accountBalance}`);
        return this;
    }
    transferMoney(otherUser, amount) {
        this.accountBalance -= amount
        otherUser.accountBalance += amount;
        return this;
    }

}

const guido = new User("Guido van Rossum", "guido@python.com");
const monty = new User("Monty Python", "monty@python.com");
const silas = new User("Silas Waller", "silaswaller@gmail.com");

guido.makeDeposit(10);
guido.makeDeposit(40);
guido.makeDeposit(100);

guido.displayBalance();

monty.makeDeposit(500);
monty.makeDeposit(100);
monty.makeWithdrawal(100);
monty.makeWithdrawal(250);

monty.displayBalance();

silas.makeDeposit(10);
silas.makeDeposit(20);
silas.makeDeposit(30);
silas.makeWithdrawal(35);

silas.displayBalance();

silas.transferMoney(guido, 1);
guido.displayBalance();
silas.displayBalance();

silas.makeDeposit(100).makeDeposit(100).displayBalance();
