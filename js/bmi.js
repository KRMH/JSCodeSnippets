// function calcBMI (mass, height){
//     console.log(mass);
//     console.log(height);
//     const bmi = mass / (height * height);
//     return bmi;
// }

const calcBMI = function(mass, height){
    console.log(mass);
    console.log(height);
    const bmi = mass / (height * height);
    return bmi;
}

const mark = {
    fullName : 'Mark Miller',
    mass : 78,
    height : 1.69,
    bmi : null
}

const john = {
    fullName : 'John Smith',
    mass : 92,
    height : 1.95,
    bmi : null
}

mark.bmi = calcBMI(mark.mass, mark.height);
john.bmi = calcBMI(john.mass, john.height);
console.log(mark, john);