const myArray = [0,1,3,4,5,"hitesh"]
const myHeros = ["shaktiman","jojo"]

const myArray2 = new Array(1,2,3,4,5)
console.log(myArray[0]);//0

//array method

myArray.push(6)
console.log(myArray);

myArray.pop()

myArray.unshift(0)//insert at start of array
myArray.shift(0)//remove starting element

console.log(myArray.includes(9));//false,boollean
console.log(myArray.indexOf(9));//-1

const newArr = myArray.join()

console.log(myArray);
console.log(typeof newArr);//samearray but convert type of array into string

//slice,splice

console.log("A",myArray);

const myn1 = myArray.slice(1,3)
console.log(myn1);
console.log("B",myArray);//[1,2]

const myn2 = myArray.splice(1,3)//it manupulate original array
console.log(myArray);//[0,4,5]
console.log("c",myn2);//[1,2,3]









