function solveSecondTime(arr){
let obj ={};

for(let line of arr){
let [day, name] = line.split(' ');

if(obj.hasOwnProperty(day)){

    console.log(`Conflict on ${day}`);
} else {
console.log(`Scheduled for ${day}`);
obj[day] = name;
}

}

 Object.keys(obj).forEach(key => {

    console.log(`${key} -> ${obj[key]}`);
 })


}

solveSecondTime(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)