const totalPaid = bill => bill >= 50 && bill <= 300 ? 
                          bill + bill *0.15 : bill + bill*0.2;

// allBillsForWeek = new Array(totalPaid(125), 
//                             totalPaid(555), 
//                             totalPaid(44));
// console.log(allBillsForWeek);

const bills = [125, 555, 44, 123, 23, 10, 90, 89, 333, 100];
const totals = [];

const calcAvg = function(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum/arr.length;
};

console.log(bills.length);
for (let i = 0; i < bills.length; i++){
    totals.push (totalPaid(bills[i]));
    console.log (totals);
}
console.log (calcAvg(totals));


