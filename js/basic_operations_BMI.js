let weight = 1;
let height = 2;
let bmi = 0;

weight = prompt ("Enter Marc weight in kilograms");
height = prompt ("Enter Marc height in meters");
let marcBmi = weight / (height * height);

weight = prompt ("Enter John weight in kilograms");
height = prompt ("Enter John height in meters");
let johnBmi = weight / (height * height);

console.log("Marc's BMI is " + marcBmi);
console.log("John's BMI is " + johnBmi);
const isMarcBmiHigher = marcBmi > johnBmi;
console.log("Is Marc's BMI higher than John's? " + isMarcBmiHigher);
if (marcBmi > johnBmi) {
  console.log(`Marc has a BMI of ${marcBmi} which is higher than the BMI of John ${johnBmi}`);
} else if (marcBmi < johnBmi) {
    console.log(`Marc has a BMI of ${marcBmi} which is lesser than the BMI of John ${johnBmi}`);
} else {
  console.log(`Marc and John have the same BMI ${marcBmi}`);
}