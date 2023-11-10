const repeatString = function(str,n) {
    let word = str;
    let phrase = '';
    let iterationsNumber = n;

    if (n < 0) return 'ERROR'
    else 

    for (let i = 0; i < iterationsNumber; i++) {
        phrase += word;
    }

    return phrase;

};

// Do not edit below this line
module.exports = repeatString;
