var BankAccount = 500;
const PHONE_PRICE = 50;
const ACCESSORY_PRICE = 9.99;
var TotalPrice = PHONE_PRICE + ACCESSORY_PRICE;
var TotalSpend = 0;

while (BankAccount >= TotalPrice) {
    console.log("I buy a phone and accessories!");
    BankAccount = BankAccount - TotalPrice;
    console.log("Money on my account:");
    console.log(BankAccount);
    console.log("Money spent:");
    TotalSpend = TotalSpend + TotalPrice;
    console.log(TotalSpend);
}