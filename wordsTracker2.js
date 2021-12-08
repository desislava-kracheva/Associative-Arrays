function solveForSecondTime(arr){

    let words = arr.shift().split(' ');

    let obj = {};
    
    for(let word of words){

        obj[word] =0

    }
        for (let word of arr){
            if(obj.hasOwnProperty(word)){
                
                obj[word]++;
                }
                

        }


        
Object.keys(obj).sort((a,b) => obj[b] - obj[a]).forEach(key => {
    console.log(`${key} - ${obj[key]}`);
})
    


}

solveForSecondTime([
    'this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the'
    ,'words','this','and','sentence','because','this','is','your','task'
    ]
    )