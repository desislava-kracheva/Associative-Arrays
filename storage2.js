function solveSecondTime(arr){
let obj = {};

for(let line of arr){

let [item, qty] = line.split(' ');
qty = Number(qty);

if(!obj.hasOwnProperty(item)){
    obj[item] = qty;
} else {
    obj[item] += qty;
}



}
Object.keys(obj).forEach(key => {

    console.log(`${key} -> ${obj[key]}`);
})

}

solveSecondTime(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
)