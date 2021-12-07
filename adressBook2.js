// Judge - 40/100 
 solveSecondTime(arr){
    let obj = {};
    
    for(let line of arr){
    
        let [name, address] = line.split(':');
    obj[name] = address;
    
    }
    
     Object.keys(obj).sort((a,b) => a[0].localeCompare(b[0]))
     .forEach(key=> {
         console.log(`${key} -> ${obj[key]}`);
     })
    
    
    
    
    
    
    }

solveSecondTime(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
)