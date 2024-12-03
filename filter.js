// Find the even Number inside the Array
let numbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbers.filter(function(num) {
  return num % 2===0;
});
console.log(evenNumbers);

// --------------------------
function isEven(x){
    return x % 2 === 0;
}
let Even  = numbers.filter(isEven)
console.log(Even)

// -------------------------
let isEven1 = numbers.filter(Even=> Even % 2 === 0);
console.log(isEven1)


// Find the Odd Number inside the Array
function isOdd(x){
    return x % 2
}
let find  = numbers.filter(isOdd)
console.log(find)


let Num = numbers.filter(Odd=> Odd%2)
console.log(Num);


// Conditions On Filter Method
let Arraye = [1, 2, 3, 4, 5, 6, 7 , 8]
//  function compare(x){
//      return x <4
//  }

let less = Arraye.filter(compare=> compare <= 8)
console.log(less);

let arr = [1,2, 3, 4, 5, 6, 7 , 8 , 9, 10]

let value = arr.filter(function lessThan(x){
    return x<10;
})
console.log(value);


// Print object having marks greater than 60 and rollNumber greater than 15.
let student =[
    {name:"Smith",rollNumber:31,marks:80},
    {name:"Jenny",rollNumber:15,marks:69},
    {name:"John",rollNumber:16,marks:35},
    {name:"Tiger",rollNumber:7,marks:55}
   ];

   let Details  = student.filter((x)=> x.marks>60 || x.rollNumber>15)
   console.log(Details);


// Print sum of marks of all the student
console.log("filter")
let result = student.reduce(function(acc, curr){
    return acc = acc + curr.marks ;
},0)
console.log(result)


const users1=[
    {firstName:"john",lastName:"Biden",age:26},
    {firstName:"jimmy",lastName:"Cob",age:75},
    {firstName:"Sam",lastName:"Lewis",age:50},
    {firstName:"Ronald",lastName:"Mathew",age:26},  
  ];


//   Q5.List of all firstName from array whose age is more than 30

let output1 = users1.filter((x)=> x.age>30).map((x)=> x.firstName)
console.log(output1)


// Print the names of students who scored more than 60

let highmarks  = student.filter((x)=> x.marks>60)
console.log(highmarks);

// Print total marks for students with marks greater than 60 after 20 marks have been added to those who scored less than 60

let totalMarks  = student.map((stu)=>{
    if(stu.marks<60){
        stu.marks+=20
    }
    return stu
}).filter((x)=>x.marks>60).reduce((acc,curr)=>acc+curr.marks,0)
console.log(totalMarks);







  
