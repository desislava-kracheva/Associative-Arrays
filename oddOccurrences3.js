function solveForThirdTime(str){

    let obj=  {};

    let arr = str.split(' ').map(x=> x.toLowerCase());
    
    for(let line of arr){

if(!obj.hasOwnProperty(line)){

obj[line] = 0;
} 

    obj[line] ++;
}


    

    let keys = Object.keys(obj).filter(x=> obj[x] % 2 ==1);
    console.log(keys.join(' '));
  
   


    
    
}

solveForThirdTime('Cake IS SWEET is Soft CAKE sweet Food')