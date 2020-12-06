let balance = 500.00;
class Account {

  constructor(username) {
    this.username = username;
    this.Transactions = [];
  }
  get balance() {
    let s = 0;
    for (const t of this.Transactions) {
      s += t.value;
      console.log(s);
    }
    return (balance + s);
  }

  addTransaction(transaction) {
    this.Transactions.push(transaction);
  }

}
class Transaction {

  constructor(amount, account) {
    this.amount  = amount;
    this.account = account;
  }
  commit() {
    balance += this.value;
  }

}

class Deposit extends Transaction {

  get value() {
    return this.amount;
  }


}

class Withdrawal extends Transaction {

  get value() {
    return -this.amount;
  }

}



// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myAccount = new Account("snow-patrol");

t1 = new Withdrawal(50.25, myAccount);
t1.commit();
console.log('Transaction 1:', t1);
myAccount.addTransaction(t1);
t2 = new Withdrawal(9.99, myAccount);
t2.commit();
console.log('Transaction 2:', t2);
myAccount.addTransaction(t2);
console.log('Balance:', balance);
t3 = new Deposit(120.00, myAccount);
t3.commit();
myAccount.addTransaction(t3);

console.log('Transaction 3:', t3);

console.log(myAccount.Transactions);
console.log(myAccount.balance);
