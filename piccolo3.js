function solveForThirdTime(arr) {
    
  let obj = {};

  for(let line of arr){
let [direction, carNumber] = line.split(', ');

if(direction == 'IN'){
    obj[carNumber] = 1;
} else{
    delete obj[carNumber];
}



  }



Object.keys(obj).sort((a,b) => a.localeCompare(b)).forEach(key=>
    console.log(key));
}


solveForThirdTime(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
)