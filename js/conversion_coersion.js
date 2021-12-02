//type conversion
const inputYear = "1991";
console.log(inputYear + 18);
const inputYearAsNumber = Number(inputYear);
console.log(inputYearAsNumber + 18);
console.log(Number("Kristel"));

console.log(String(23));
console.log(String("Kristel"));

console.log(Boolean("Kristel"));
console.log(Boolean("1991" == 1991));
console.log(Boolean("1991" === 1991));

//type coercion
console.log("My age is " + 36 + " years old");
console.log('23'- '10'-3);
console.log("23"- "10"-3);
console.log(`23`- `10`-3);
console.log('23'+ '10'+ 3);
console.log("23"+ "10" + 3);
console.log(`23`+ `10` + 3);
console.log(`23`/ `10` );
console.log(`23`* `10` );

//booleans usually Boolean() is not used
//falsy values : 0, NaN, "", null, undefined, false
//truthy values : all other values
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(false));
console.log(Boolean({}));

const money = 0;

//implicit conversion since 0 then falsy
if (money) {
    console.log("You have money");
} else {    
    console.log("You have no money");
}

let height;
if (height) {
    console.log("You are tall");
} else {    
    console.log("height is undefined");
}