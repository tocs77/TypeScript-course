function combine(input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input1;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combiinedNumbers = combine(22, 45);
console.log(combiinedNumbers);
var combinedStrings = combine('Hello ', 'there');
console.log(combinedStrings);
