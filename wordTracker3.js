function solveForThirdTime(arr){
    let words = arr.shift().split(' ');
 let obj ={};
 let counter = 0;
  
 for(let word of words){
     obj[word] = 0;
 }

 for(let line of arr){

    if(obj.hasOwnProperty(line)){

        obj[line] ++ 
    }
 }

let sorted = Object.entries(obj).sort((a,b) => b[1]-a[1] );

sorted.forEach(kvp => {

    console.log(`${kvp[0]} - ${kvp[1]}`);
})

}

solveForThirdTime([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 
    'count', 'the', 'occurances', 'of', 'the', 'words',
     'this', 'and', 'sentence', 'because', 'this', 'is', 
     'your', 'task'
    ]
    )