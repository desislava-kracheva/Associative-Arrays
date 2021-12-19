//нерешена

function solve(arr){
let map = new Map();
let neighborhoods =arr.shift().split(', ');
for(let neighborhood of neighborhoods){
map.set(neighborhood, []);


}

for(let i = 0;i<arr.length; i++){
let [neighborhood, person] = arr[i].split(' - ');

if(neighborhoods.includes(neighborhood)){

    map.get(neighborhood).push(person);

}


}
console.log(map);


}
solve(['Abbey Street, Herald Street, Bright Mews',
'Bright Mews - Garry',
'Bright Mews - Andrea',
'Invalid Street - Tommy',
'Abbey Street - Billy']
)