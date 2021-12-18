function solveForThirdTime(arr){
let obj ={};
    for(let line of arr){

        let [name, address] = line.split(':');
obj[name] = address;



    }

return Object.keys(obj).sort().forEach(key =>
    
    console.log(`${key} => ${obj[key]}`));

    

}



console.log(solveForThirdTime(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']))
