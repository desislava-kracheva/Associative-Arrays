function solve(arr){
    let contacts = {};
    
    for(const line of arr){
    
    let [person, phone] = line.split(' ');
    contacts[person] = phone;
    
    }
    
    Object.keys(contacts).forEach(key => {
    
        console.log(`${key} -> ${contacts[key]}`);
        
    });
    }
solve(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)    