var BankAccount = 500;
const PhonePrice = 50;
const AccessoryPrice = 9.99;
var TotalPrice = PhonePrice + AccessoryPrice;
var TotalSpend = 0;

while (BankAccount >= TotalPrice) {
    console.log("I buy a phone and accessories!");
    BankAccount = BankAccount - TotalPrice;
    console.log("Money on my account:");
    console.log(BankAccount);
    console.log("Money spent:");
    TotalSpend = TotalSpend + PhonePrice + AccessoryPrice;
    console.log(TotalSpend);
}