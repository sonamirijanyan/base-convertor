const reader = require('readline-sync');
const utils = require('./conventer');

const number = reader.questionInt("Please enter the number you want to convert = ");
const choice = reader.questionInt("Please enter choice: \n 1:Binary \n 2:Hexadecimal \n");

if(choice === 1){
    console.log(utils.convertToBinary(number));
}else if(choice === 2){
    console.log(utils.convertToHexa(number));
}else if(typeof choice === "number"){
    console.log("There is no choice for that number! ");
}else{
    console.log("Imported value should be number");
} 
