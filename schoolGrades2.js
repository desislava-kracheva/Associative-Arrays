//нерешена
function solveForSecondTime(arr) {

let obj = {};

for(let line of arr){
let tokens = line.split(' ');
let name = tokens.shift();
let grades = tokens.map(Number)
if(obj.hasOwnProperty(name)){

    obj[name] = obj[name].concat(tokens);
} else {
    obj[name] = tokens
}

}

let values = Object.values(obj);
let sum = 0;
let avg = 0
let sorted =[];
for(let value of values){

    const reducer = (previousValue, currentValue) => Number(previousValue) + Number(currentValue);
    sum = value.reduce(reducer)
    avg = sum/ value.length ;

  sorted.push(avg)


}

let sortedStudents = sorted.sort((a,b) => a-b)


console.log(sortedStudents);




}
solveForSecondTime(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']
)
