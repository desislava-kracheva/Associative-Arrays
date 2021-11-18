function solve(arr){

let catalog = {};

for(let line of arr){

let [name, adress] = line.split(':');

catalog[name] = adress;


}

let sorted = Object.entries(catalog);

sorted.sort((a,b) => {

    let keyA = a[0];
    let keyB = b[0];

   return keyA.localeCompare(keyB);
})



for([name,adress] of sorted){

console.log(`${name} -> ${adress}`);
}

}
solve(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
)