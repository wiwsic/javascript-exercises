const reverseString = function(str) {
    
    let originalString = str;
    let stringLenght = originalString.length;
    let reversedString = '';

    for (let i = 0; i < stringLenght; i++) {

        let pickChar = originalString.charAt((stringLenght - 1) - i);
        reversedString += pickChar;

    }

    return reversedString;

};

// Do not edit below this line
module.exports = reverseString;
