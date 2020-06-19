"use strict";
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];
activeHobbies.push(...hobbies);
console.log(activeHobbies);
const Person = {
    firstName: 'Bob',
    age: '30'
};
const copiedPerson = Object.assign({}, Person);
console.log(copiedPerson);
const add = (...numbes) => {
    return numbes.reduce((a, b) => a + b);
};
const addedNumbers = add(3, 5, 7, 3.4, 9);
console.log(addedNumbers);
const [hobby1, hobby2] = hobbies;
console.log(hobbies, hobby1, hobby2);
const { firstName, age } = Person;
console.log(Person, firstName, age);
//# sourceMappingURL=app.js.map