//Task 01

console.log("Number Array");

let numArray = [1,2,4,3]

console.log(numArray);
console.log()
//*****************************************************************

//Task 02
for(let i=0; i<numArray.length; i++)
{
	console.log(numArray[i])
}

console.log()

//*****************************************************************
//Task 03

numArray.forEach((n)=> 
{
	console.log(n)
}
)

console.log()

//*****************************************************************
//Task 04
//Find the max number in the array using forEach

let max=numArray[0];

numArray.forEach((m)=>
{
	if(m>max)
	{
		max=m;
	}
})
console.log("Max ="+max)

console.log()

//*****************************************************************
//Task 05

//Print the nested array
//[[1,2,3],[5,6],[8,5,3]]

let nestedArray = [
					[1,2,3],
					[5,6],
					[8,5,3]
				  ];
nestedArray.forEach((z)=>
{
	console.log(z)
})

console.log()

//*****************************************************************
/*
Task 06
arr = [1,2,3,4,5,6]
target=7
Write a code to find the all pairs that sum up to the target
*/

const numbers = [1,2,3,4,5,6];
const target = 7;
const pairs = [];

for (let i = 0; i < numbers.length; i++) {
	
    for (let j = i + 1; j < numbers.length; j++) {
		
        if (numbers[i] + numbers[j] === target) {
            pairs.push([numbers[i], numbers[j]]);
        }
    }
}

console.log("Pairs that sum up to", target, ":", pairs);

console.log()

//*****************************************************************
/*
Task 07
a=[4,5,0,3,7]
b=[8,3,2,1,5]
Find the common elements between a and b
*/

console.log("Common element")
let a=[4,5,0,3,7]
let b=[8,3,2,1,5]

for(let i of a){
  if(b.includes(i)){
    console.log(i)
  }
}

console.log()
//*****************************************************************

/*
Task 08
[4,8,3,4,3,2,1,8,4]
Find the most frequent element in the array
*/

const arr = [4,8,3,4,3,2,1,8,4];
const frequency = {};
let mostFrequent = arr[0];
let maxCount = 0;

arr.forEach(num => {
    frequency[num] = (frequency[num] || 0) + 1;
    if (frequency[num] > maxCount) {
        maxCount = frequency[num];
        mostFrequent = num;
    }
});

console.log("Most Frequent Element:", mostFrequent);

//*****************************************************************
/*
Task 09
Array Operation
push and pop
*/

arr3=['a','b','d']
console.log(arr3)
arr3.push('e')
console.log(arr3)
arr3.pop()
console.log(arr3)

console.log()

//*****************************************************************
/*
Task 10
Reverse the array using push and pop
a b c d => d c b a
*/

let arr4 = new Array(4);
arr4.push('a')
arr4.push('b')
arr4.push('c')
arr4.push('d')
console.log(arr4)

let arr5 = new Array(4)
for(let i=0; i<arr4.length; i++ )
{
	arr4.pop();
}
console.log(arr5)

console.log()


//*****************************************************************
//JSON

//{key:value}
let student = {regno:'2021/ICT/01',name:'Anne',age:25,course:'IT'}
console.log(student)
console.log(student.name)

let students= [ {regno:'2021/ICT/40',name:'Ariyawansa',age:22,course:'IT'},
				{regno:'2021/ICT/122',name:'Jane',age:23,course:'IT'},
				{regno:'2021/ICT/01',name:'Nawarathna',age:25,course:'IT'}
			  ]
console.log(students)


//*****************************************************************

/*
Task 11
Define 10 students in JSON
Store it in an array
Find the female students
Find the students who are following IT course
Find the max and average GPA among the students
*/
const students1 = [
    { name: "binu", gender: "Female", course: "IT", gpa: 3.6 },
    { name: "puwi", gender: "Male", course: "Engineering", gpa: 3.2 },
    { name: "hari", gender: "Male", course: "IT", gpa: 3.8 },
    { name: "Nuwa", gender: "Female", course: "Business", gpa: 3.1 },
    { name: "Mahi", gender: "Female", course: "IT", gpa: 3.9 },
    { name: "Sawi", gender: "Male", course: "Medicine", gpa: 3.4 },
    { name: "Nime", gender: "Female", course: "IT", gpa: 3.7 },
    { name: "Sajuni", gender: "Male", course: "Engineering", gpa: 3.5 },
    { name: "Sithu", gender: "Female", course: "Science", gpa: 3.3 },
    { name: "Sandu", gender: "Male", course: "IT", gpa: 3.6 }
];


const femaleStudents = students1.filter(student => student.gender === "Female");
console.log("Female Students:", femaleStudents);

const itStudents = students1.filter(student => student.course === "IT");
console.log("IT Students:", itStudents);

const gpas = students1.map(student => student.gpa);
const maxGpa = Math.max(...gpas);
const avgGpa = gpas.reduce((sum, gpa) => sum + gpa, 0) / students1.length;

console.log("Max GPA:", maxGpa);
console.log("Average GPA:", avgGpa.toFixed(2));





