function solveForThirdTime(arr){

    let obj =[];
for(let line of arr){

    let [weekday, name] = line.split(' ');

    if(!obj.hasOwnProperty(weekday)){
        obj[weekday] = name;
        console.log(`Scheduled for ${weekday}`);
    } else {

        console.log(`Conflict on ${weekday}`);

    }
    
}

Object.keys(obj).forEach(
key => console.log(`${key} -> ${obj[key]}`)

)




}

solveForThirdTime(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)