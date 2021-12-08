//Решена е с Map(), защото в него се запазват стойностите по реда в който влизат,докато в обект числата минават отпред.
function solveForSecondTime (input){
let arr = input.toLowerCase().split(' ');

let obj = new Map();

for(let word of arr){

    if(!obj.has(word)){

        obj.set(word,0);
    } 

    obj.set(word, obj.get(word) + 1);

}
let keys = Array.from(obj.keys()).filter(x => obj.get(x) %2 !== 0)
console.log(keys.join(' '));

}

solveForSecondTime('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')