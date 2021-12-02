const yearsOld = birthYear => 2021 - birthYear;

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];

console.log(friends);
console.log(friends[0]);
console.log(friends[2]);
friends[2] = 'Jay';

//Arrays are mutable, this is why even if it is const it can be changed
console.log(friends[2]);


const years = new Array(1990, 1969, 1948);
const years2 = [1990, 1969, 1948];
console.log(years);
console.log(years2);
console.log(years.length);
console.log(years[years.length - 1]);

const person1 = ['Kristel', 'Mhanna', 'Kiko', yearsOld(1985)];
console.log(person1);
const person2 = ['George', 'Mhanna', 'Joujou', yearsOld(1989)];
console.log(person2);
const person3 = ['Cesar', 'Mhanna', 'Ciso', yearsOld(1980)];
console.log(person3);

const people = [person1, person2, person3];
console.log(people);
var peopleLgth = people.push(['Sonia', 'Makhoul', 'Mom', yearsOld(1963)]);

console.log(`${peopleLgth} is the new number of people in the array`);

peopleLgth = people.unshift(['Elias', 'Mhanna', 'Dad', yearsOld(1954)]);
console.log(`${peopleLgth} is the new number of people in the array`);

console.log(people.indexOf(person3));
console.log(people.includes(person3));
