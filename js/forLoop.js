//no need to use this
// for (let repeat = 1; repeat < 10;){
//     console.log(repeat);
//     repeat++;
// }

// for (let repeat = 1; repeat < 10; repeat++){
//     console.log(repeat);  
// }

const jonasArray = [
    'Jonas',
    'Mhanna',
    2021-1985,
    'teacher',
    ['Michael','Peter','Steven']
];

// for (let i = 0; i < jonasArray.length; i++){
//     if (typeof jonasArray[i] === 'string') continue;
//     console.log(jonasArray[i], typeof jonasArray[i]);
// };

for (let i = 0; i < jonasArray.length; i++){
    if (typeof jonasArray[i] === 'string') break;
    console.log(jonasArray[i], typeof jonasArray[i]);
};

// const years = [1914, 1945, 1975, 2019, 2023];
// const ages = [];

// for (let i = 0; i < years.length; i++){
//     console.log(years[i]);
//     ages.push (2021 - years[i]);
//     console.log(ages);
// }
