'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  startMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.startMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const arr = [2, 3, 4];
const [x, y, z] = arr;
console.log(x, y, z);

const [first, second] = restaurant.categories;
console.log(first, second);

let [main, , secondary] = restaurant.categories;
console.log(first, second);

// const temp = main;
// main = secondary;
// secondary = temp;
[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);
const { menu = {}, startMenu: starters = [] } = restaurant;
console.log(menu, starters);

let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

//spread operator
const arrSpreader = [7, 8, 9];
const newArrOld = [1, 2, arrSpreader[0], arrSpreader[1], arrSpreader[2]];
console.log(newArrOld);

const newArr = [1, 2, ...arrSpreader];
console.log(newArr);
console.log(...newArr);
console.log(...restaurant.mainMenu);
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//copy Array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

//join two arrays in one
const mainMenuJoin = [...restaurant.mainMenu, ...mainMenuCopy];
console.log(mainMenuJoin);

const str = 'Kristel';
const letters = [...str, '', 'S.'];
console.log(letters);

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('ngredient 3?'),
// ];

// console.log(...ingredients);

//objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'guiseppe' };
console.log(newRestaurant);

const newRestaurantCopy = { ...restaurant };
newRestaurantCopy.name = 'Ristorante Roma';
console.log(newRestaurantCopy.name);

//REST, because on LEFT side of =
const [aa, bb, ...others] = [1, 2, 3, 4];
console.log(aa, bb, others);

//Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//functions
const add = function (...numbers) {
  //   console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};

console.log(add(2, 3));
console.log(add(5, 3, 7, 2));
console.log(add(8, 2, 5, 3, 2, 1, 4));

const x = [23, 5, 7];
add(...x);

const menu = [...restaurant.startMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);
