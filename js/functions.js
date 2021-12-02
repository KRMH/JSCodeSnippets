function logger() {
  console.log("My name is Kristel");
}
logger();

function cutFruitPieces(fruit){
  return fruit*4;
}

function fruitProcessor (apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
    console.log(juice);
    return juice;
}

//dont repeat yourself
const appleJuice = fruitProcessor(5,0);
const appleOrangeJuice = fruitProcessor(2,4);

const kristelAge = calcAge(1985);
console.log(kristelAge);
const georgeAge = calcAge(1989);
console.log(georgeAge);
const cezarAge = calcAge(1980);
console.log(cezarAge);

function calcAge(birthYear){
    return 2021 - birthYear;
}


//function expression or anonymous function
const calcAge2 = function(birthYear){
    return 2021 - birthYear;
}

const kristelAge2 = calcAge2(1985);

