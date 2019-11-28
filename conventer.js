function convertToBinary(number) {
    let array = [];

    for (let i = number; i > 0; i = Math.floor(i / 2)){
        array.push(i % 2);
    }

    let result = '';
    for (let j = array.length - 1; j >= 0; j--) {
        result += array[j];
    }
    return result;
}

function convertToHexa(number) {

    if (number < 0) {
        number += 0xFFFFFFFF + 1;
    }

    let array = [];
    let values = ["A", "B", "C", "D", "E", "F"];

    for (let i = number; i > 0; i = Math.floor(i / 16)){
        if(i % 16 >= 10) {
            array.push(values[i % 16 - 10]);
        }else {
            array.push(i % 16);
    }
 }
    
    let result = '';
    for (let j = array.length - 1; j >= 0; j--) {
        result += array[j];
    }
    return result;
}

module.exports = {
    convertToHexa,
    convertToBinary
}
