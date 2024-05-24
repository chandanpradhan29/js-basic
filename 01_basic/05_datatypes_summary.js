/*
How data are being stored in memory and how they are accessing based of this it categorized into two types 
1) primitive data type   :
   String , number , boolean , null , undefine , symbol  , bigint

2)non primitive data type :
Array , function , object

q) interview question : 
js is dynamically typed language or statically typed language ??? : dynamically typed language we don't need to specify the type of 
variables . 

example : 
let a = 10;
a = "chandan";
console.log(a);
*/

let id1 = Symbol('123');
let id2 = Symbol('123');
// console.log(id1===id2);\


let num = 20;
let str = "chandan"
let result = true ;
let ans = null;
let mynum ; // undefine 
let mysymbol = Symbol('123');
let bignum = 123456778890865655n;

//primitive data type
console.log(num , typeof num);
console.log(str , typeof str);
console.log(result , typeof result);
console.log(ans , typeof ans);//object
console.log(mynum , typeof mynum); //undefine
console.log(mysymbol , typeof mysymbol);
console.log(bignum , typeof bignum);

//primitive data type
let hero = ["saktiman","gurmaan","heroman"];
let myobj = {
    "name" : "chandan" , 
    age : 25
}   

let myfun = function(){
 console.log("hi");
}

console.log(typeof hero);
console.log(typeof myobj);
console.log(typeof myfun);




