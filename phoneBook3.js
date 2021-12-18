function solveForThirdTime(arr){
let obj ={};
  for(let line of arr){
let [name,phoone] = line.split(' ');
obj[name] = phoone

  }

   for(let [key,value] of Object.entries(obj)){

    console.log(`${key} -> ${value}`);
   }
}
solveForThirdTime(['George 0552554',
'Peter 087587',
'George 0453112',
'Bill 0845344']
)