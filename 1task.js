var bank_account = 500;
const PHONE_PRICE = 50;
const ACCESSORY_PRICE = 9.99;
var total_price = PHONE_PRICE + ACCESSORY_PRICE;
var total_spend = 0;

while (bank_account >= total_price) {
    console.log("I buy a phone and accessories!");
    BankAccount = bank_account - total_price;
    console.log("Money on my account:");
    console.log(bank_account);
    console.log("Money spent:");
    TotalSpend = total_spend + total_price;
    console.log(total_spend);
}
