// const userName = 'Bob';
// //userName = 'Alice';

// let age = 30;

// age = 29;


// const add = (a: number, b: number = 3) => a + b;


// console.log(add(4, 7));
// console.log(add(6));

// const printOutput: (a: number | string) => void = output => console.log(output);
// printOutput(add(4, 9));

// const button = document.querySelector('button');

// if (button) {
//     button.addEventListener('click', event => console.log(event));
// }

const hobbies = ['Sports', 'Cooking'];

const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);
console.log(activeHobbies);

const Person = {
    firstName: 'Bob',
    age: '30'
};

const copiedPerson = { ...Person };
console.log(copiedPerson);

const add = (...numbes: number[]) => {
    return numbes.reduce((a, b) => a + b);
};

const addedNumbers = add(3, 5, 7, 3.4, 9);
console.log(addedNumbers);

const [hobby1, hobby2] = hobbies;
console.log(hobbies, hobby1, hobby2);

const { firstName, age } = Person;

console.log(Person, firstName, age);
