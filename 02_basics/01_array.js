const arr =[1,true , null ,undefined,1.2];
// console.log(arr);

const arr2 = new Array(1,2,3,4,5)
// console.log(arr2);

//array methods 
//1.push():
arr.push("chandan");
// console.log(arr);

//2.unsift() : 
arr.unshift(9) // it insert at 0 index and all elements will be shifted to right i.e index+1
// console.log(arr);

//3.shift() :
arr.shift();
// console.log(arr);

//includes()
// console.log(arr.includes(1));
//indexof()
// console.log(arr.indexOf(1));
//joins() : bind the elements and converts to strings type

let newarr = arr2.join();
// console.log(newarr , typeof newarr);

//slice() & splice() 
//slice
let myarr = [2,4,6,8,10];
let sarry = myarr.slice(1,3) ;//last index is excluded
console.log("slice array " ,sarry); //4 , 6
console.log("orignal array " , myarr);// print all elements

//splice() :
let myarr2 = [5,10,15,20,25];
let sparr = myarr2.splice(1,3) ; //last index is included
console.log("splice array " , sparr);//10,15,20
console.log("orignal array " , myarr2);// print only elements which are not spliced 