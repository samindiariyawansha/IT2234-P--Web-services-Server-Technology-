//print 
function PrintMsg()
{
	console.log("Hello Js")
}

PrintMsg()

console.log()


//***********************************************************
//get sum in two numbers
function sum()
{
	return 5+9
}
console.log(sum())


//***********************************************************
//get subtraction in two numbers
function sub(a,b)
{
	return a-b
}
console.log(sub(6,3))

console.log()



//***********************************************************
//Write a boolean function to find a given number is prime
function isPrime(num) 
{
    if (num <= 1) 
		return false;
    for (let i = 2; i < num; i++) 
	{
        if (num % i == 0)
		{
            return false;
        }
    }
    return true; 
}
const userInput = 13;
console.log(isPrime(userInput))

console.log()

//***********************************************************
//Write a recursive function to print numbers from 1 to n

function printRecursiveNum(num,currentValue) { 
	if (currentValue>num) { 
		return; 
	} 
	console.log(currentValue); 
	printRecursiveNum(num, currentValue + 1); 
} 

const num = 5; 
printRecursiveNum(num,1);

console.log()



//***********************************************************
//Arrow function
const msg = ()=>{return console.log("Hello Js")}
msg()

console.log()



//***********************************************************
//Write an arrow function to sum 2 numbers 

const add = (a,b)=>{return a+b}
console.log(add(4,5))
console.log()



//***********************************************************

//default parameter
const mul = (a,b=2)=>{return a*b}
console.log(mul(4,5))
console.log(mul(4))

console.log()


//***********************************************************
//Rest parameter
/*
const mysum = (...n)=>
{
	console.log(n)
}
mysum(4,51,3,9,2)

*/
const mysum = (...n)=>
{
	return n.reduce((t,i)=>t=t+i)
}
console.log(mysum(1,6,7,9,3))

console.log()

//***********************************************************

//callback Function (a function passed as an argument)

const myName = (name)=>{console.log("My name is " +name)}

const greet =(msg,fun)=>{
	console.log("Hi.."+msg)
	fun
}
greet("Good morning !", myName("David"))

console.log()


//***********************************************************
const multwo = (n)=>n*4

const myarr = (mul,...n)=>{
	n.forEach((i)=>console.log(mul(i)))
}
myarr(multwo,4,5,6,8,2)


















