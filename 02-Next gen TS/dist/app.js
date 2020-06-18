"use strict";
const userName = 'Bob';
let age = 30;
age = 29;
const add = (a, b) => a + b;
console.log(add(4, 7));
const printOutput = output => console.log(output);
printOutput(add(4, 9));
const button = document.querySelector('button');
if (button) {
    button.addEventListener('click', event => console.log(event));
}
//# sourceMappingURL=app.js.map