const bill = prompt("Enter the bill value");
const billNbr = Number(bill);
const finalBill = (billNbr >= 50 && billNbr <= 300) ? billNbr * 0.2 + billNbr : bill *0.15 + billNbr;
console.log(finalBill);