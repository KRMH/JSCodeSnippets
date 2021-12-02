//objects should be simple and not contain any logic
const person = {
    firstName: 'Kristel',
    lastName: 'Mhanna',
    age: 2021 - 1985,
    job: 'programmer'
};

console.log(person);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
 console.log(person['firstName']);
const nameKey = 'Name';
console.log(person['first' + nameKey]);

const interestedIn = prompt ("What are you interested in? firstName, lastName, job");
if (person[interestedIn]){
    console.log(person[interestedIn]);
} else {
    console.log('I dont know that');
}

person.twitter = '@kristel_mhanna';
person['facebook'] = 'kristel.mhanna';
console.log(person);


