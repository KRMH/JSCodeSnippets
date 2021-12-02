const avgDolphins = (96+108+89)/3;
console.log(avgDolphins);
const avgKoalas = (88+91+110)/3;
console.log(avgKoalas);

if (avgDolphins > avgKoalas && avgDolphins >= 100){
    console.log("Dolphins win!")
}
else if (avgDolphins < avgKoalas && avgKoalas >= 100) {
        console.log("Koalas win!")
} else if (avgDolphins === avgKoalas  && avgKoalas >= 100) {
    console.log("It's a tie!")
}