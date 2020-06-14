type Combinable = number | string;

function combine(input1: Combinable, input2: Combinable) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input1;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedNumbers = combine(22, 45);
console.log(combinedNumbers);

const combinedStrings = combine('Hello ', 'there');
console.log(combinedStrings);
