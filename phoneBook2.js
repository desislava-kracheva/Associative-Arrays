function solveSecondTime(arr){

    let obj= {};

    for(let line of arr){
let [name, phone] = line.split(' ');
obj[name] = phone;


    }

    Object.keys(obj).forEach(element => {
        console.log(`${element} -> ${obj[element]}`);
        
    });
   
}

solveSecondTime(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)