function solveForThirdTime(arr){
    let obj = {};
let sum = 0;
for(let line of arr){

    let name = line.split(' ').shift();

    let grades = line.split(' ').splice(1).map(Number);

    if(!obj.hasOwnProperty(name)){

        obj[name] = grades;
    } else {

        obj[name] = obj[name].concat(grades);
    }

   
    
}


let studentEntries = Array.from(Object.entries(obj));
let sortedStudents = studentEntries.sort((a,b) =>{

let avgGradeA = grade(a[1]);
let avgGradeB = grade(b[1]);
return avgGradeA - avgGradeB;

})
function grade(grades){

let sum = 0;
for (const line of grades) {
    sum+=line;

}

let avg = sum / grades.length;
return avg;


}

for (const kvp of sortedStudents ) {
    
    console.log(`${kvp[0]}: ${kvp[1].join(', ')}`);
    
    }

}
solveForThirdTime(['Steven 3 5 6 4',
'George 4 6',
'Tammy 2 5 3',
'Steven 6 3']
)