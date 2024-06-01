//singleton object
const tinder1 = new Object();

//non singleton object 
const tinder2 = {};
tinder2.name ="coolchandu" ,
tinder2.location ="pune" ,
tinder2.isloggedin = false 

console.log(tinder2);

const regularUser = {
    email : "cpradhan@yahoo.com" , 
    fullname : {
        firstname : "chandan" , 
        lastname : "pradhan"
    }
}
console.log(regularUser.fullname.lastname);
console.log("---------object concatination--------------");

const obj1 = {1 : "a" , 2 : "b" , 3 : "c"};
const obj2 = {2 : "d" , 3: "e" , 4:"f"};

// const obj3 = {obj1 , obj2};
//way1 :
//const obj3 = Object.assign({} ,obj1 , obj2) // {} = target ,     obj1,obj2=source 

//way2 :using spread
const obj3 = {...obj1 ,...obj2}
console.log(obj3);
console.log("-----------------------");

//array object 
const users = [
    {
        id : 1 ,
        email :"hotmail.com"
    } ,

    {
        id : 1 ,
        email :"hotmail.com"
    } ,
    {
        id : 1 ,
        email :"hotmail.com"
    } ,
]

console.log(users[1].email);

//to prints key , its data type is array  .means it will give keys in the array format
console.log(Object.keys(tinder2));

//to prints values , its data type is array . means it will give values in the array format
console.log(Object.values(tinder2));

//we will get key values in arrays of arrays formate
console.log(Object.entries(tinder2));

//hasOwnPropert() :
console.log(tinder2.hasOwnProperty('location'));

