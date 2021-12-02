//Arrow functions
const calcAge3 = birthYear => 2021 - birthYear;

const kristelAge3 = calcAge3(1985);
console.log(kristelAge3);

// const yearsUntilRetirement = birthYear => {
//     const age = 2021 - birthYear;
//     const retirement = 65 - age;
//     return retirement;
// }

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

// console.log(yearsUntilRetirement(1985));


console.log(yearsUntilRetirement(1985, 'Kristel'));

//Arrow functions doesnt have their own this keyword.