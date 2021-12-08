//Judge - 20/100 , трябва да я реша 3ти път

function solveForSecondTime(arr) {

    let newArr = []

    for (let line of arr) {

        let [direction, carNumber] = line.split(', ');
        if(direction == 'IN'){
newArr.push(carNumber);

        } else{

            let index = arr.indexOf(carNumber);
            newArr.splice(index,1);
        }
       

    }
    if(newArr.length == 0){
        console.log(`Parking Lot is Empty`);

    }
    //console.log(newArr.sort((a,b) => a.substring(2,5) - b.substring(2,5)).join('\n'))
    console.log(newArr.sort((a,b) => a.localeCompare(b)).join('\n'))

}

solveForSecondTime(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']

)