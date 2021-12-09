function solveForSecondTime(arr){

    let list = {
        'VIP': [],
        'regular': []
    }

    let name = arr.shift();
    while(name !== 'PARTY'){
        let char = name[0]
if(isNaN(char)){
    list['regular'].push(name)
} else {
    list['VIP'].push(name);
}


        name = arr.shift();
    }

    arr.forEach(guest => {

        if(list['VIP'].includes(guest)){

            let i = list['VIP'].indexOf(guest);
            list['VIP'].splice(i,1);
        } else if (list['regular'].includes(guest)){
 let i = list['regular'].indexOf(guest);
 list['regular'].splice(i,1);
        }
    });
        



console.log(Number(list['regular'].length) + Number(list['VIP'].length) );

console.log(list['VIP'].join(''));
console.log(list['regular'].join(''));
  
}

solveForSecondTime(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]
)