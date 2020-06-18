const userName = 'Bob';
//userName = 'Alice';

let age = 30;

age = 29;


const add = (a: number, b: number) => a + b;


console.log(add(4, 7));

const printOutput: (a: number | string) => void = output => console.log(output);
printOutput(add(4, 9));

const button = document.querySelector('button');

if (button) {
    button.addEventListener('click', event => console.log(event));
}

