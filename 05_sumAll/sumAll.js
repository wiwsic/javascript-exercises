const sumAll = function() {

// convert argument to new array

let arg = Array.from(arguments);
console.log(arg)

// check if the indexes are all number, if not return 'ERROR'

let arrayOfNumbers = true;

for (let i = 0; i < arg.length; i++) {

if  (!(typeof arg[i] === 'number' && arg[i] >= 0)) {
    arrayOfNumbers = false;
    break;
}

}

if (!(arrayOfNumbers)) {
    return 'ERROR';
} else if (arg.length > 2) {
    return 'ERROR';
}

// order from low to high number

arg.sort(function(a, b) {
    return a - b;
  });

// make a for loop to sum all the numbers between the range

let sum = 0;

for (let i = arg[0]; i < arg[1] + 1; i++) {

    sum += i;

}

// return the result

return sum

 


};

// Do not edit below this line
module.exports = sumAll;
