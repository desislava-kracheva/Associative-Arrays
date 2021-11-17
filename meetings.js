function solve(arr){

  let calendar = {};
  
  for(let line of arr){

let [day, name] = line.split(' ');

if(calendar.hasOwnProperty(day)){

console.log(`Conflict on ${day}`);  


} else {
console.log(`Scheduled for ${day}`);    
    calendar[day] = name;
}




  }

  for(let day in calendar){

    console.log(`${day} -> ${calendar[day]}`);
  }
}

solve(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)