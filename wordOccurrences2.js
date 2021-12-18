function solveForSecondTime(arr){

    let obj = {}
   for(let i = 0; i< arr.length; i++){
if(!obj.hasOwnProperty(arr[i])){

obj[arr[i]] = 1

} else {
    obj[arr[i]] = obj[arr[i]]+ 1;
}

   }

  let sorted = Object.entries(obj).sort((a,b) => b[1] - a[1]);


sorted.forEach(kvp => 
    console.log(`${kvp[0]} -> ${kvp[1]} times`))
}
solveForSecondTime(["Here", "is", "the", "first", "sentence", 
"Here", "is", "another", "sentence", "And", "finally",
 "the", "third", "sentence"])