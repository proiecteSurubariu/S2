//1.
const birthYears=[1990,2000,1985,1995,2005,2010]

const year=new Date().getFullYear()


const filteredArray=birthYears.filter(el=>year-el>=18).map(el=>year-el)

console.log(filteredArray);


//2.

function div(array,element){

    const sum=array.filter(el=>el%element===0).reduce((acc,el)=>acc+el)
    console.log(sum);
}

div([2,3,4,5,15,10,20],5);


//3.

function medie(studenti){
    const stud2=studenti.filter(el=>el.scores.reduce((acc,el)=>acc+el)/el.scores.length>=90)
    console.log(stud2);
}



const students = [ 
    { name: "Alice", scores: [90, 85, 92] },
     { name: "Bob", scores: [75, 80, 85] }, 
     { name: "Charlie", scores: [90, 95, 85] }, 
     { name: "David", scores: [100, 100, 100] } 
    ];
    
medie(students);