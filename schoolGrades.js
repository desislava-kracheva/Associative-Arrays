function solve(arr) {
    let students = new Map();

    for (let line of arr) {

        let lineArr = line.split(' ');
        let name = lineArr.shift();
        let grades = lineArr.map(Number);

        if (students.has(name)) {

            let oldGrades = students.get(name);
            let allGrades = oldGrades.concat(grades)
            students.set(name, allGrades);

        } else {

            students.set(name, grades);

        }
    }

let studentEntries = Array.from(students.entries());
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



solve(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']
      )