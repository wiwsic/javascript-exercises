 
const removeFromArray = function() {
    
    
    // determina o que é a array que será mudada e o que é a array de remoções
    let arg = Array.from(arguments);
    let originalArray = arg.shift();
    let originalarrayLength = originalArray.length;

    // cria a array que será retornada
    let newArray = [];

    // itera sobre todos os elementos da array que será mudada(originalArray), e para cada elemento, itera
    // na array de remoções (arg)

    for (let i = 0; i < originalarrayLength; i++) {

        let safeToAdd = true;

        for (let j = 0; j < arg.length; j++ ) {

            // se o elemento i da array original for igual ao elemento j da array arg
            // não é seguro adicionar na newArray

            if (originalArray[i] === arg[j]) safeToAdd = false;

        }

        if (safeToAdd) newArray.push(originalArray[i]);
    }

    return newArray;


    }

// Do not edit below this line
module.exports = removeFromArray;
