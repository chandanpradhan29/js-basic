function ex() {
    if(true){
        var x =10; //functional scope
        let y=20; //block scope
    }

    console.log(x);//10 : inside the functional scope
    console.log(y);//error : accesing outside the block scope
}
// ex();

/*note1: 
let : block scope : variables accessiable with an block
var : functional scope : variables accessiable with an function only
*/

var x =10 ;
var x=20; //no error

// let y =30;
// let y=50 ;//error

/*
note2 :
var : you can redeclare variables with var without error 
let : redeclare variables with let result in syntax error
*/

console.log(a);
var a=20;

console.log(b);
let b=20;
