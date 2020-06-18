const userName = 'Bob';
//userName = 'Alice';

let age = 30;

age = 29;


const add = (a: number, b: number = 3) => a + b;


console.log(add(4, 7));
console.log(add(6));

const printOutput: (a: number | string) => void = output => console.log(output);
printOutput(add(4, 9));

const button = document.querySelector('button');

if (button) {
    button.addEventListener('click', event => console.log(event));
}

const hobbies = ['Sports', 'Cooking'];

const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);
console.log(activeHobbies);

const Person = {
    name: 'Bob',
    age: '30'
};

const copiedPerson = { ...Person };
console.log(copiedPerson);