function solveForThirdTime(arr){

    let map = new Map();

    for(let line of arr){

        let [item, quantity] = line.split(' ');
        quantity = Number(quantity);

        if(!map.has(item)){
map.set(item, quantity);
            
        } else {
let currQty = map.get(item);
let newQty = currQty += quantity;
map.set(item, newQty)

        }
    }

for(let kvp of map){

    console.log(`${kvp[0]} -> ${kvp[1]}`);
}

}
solveForThirdTime(['apple 50',
'apple 61',
'coffee 115',
'coffee 40']

)