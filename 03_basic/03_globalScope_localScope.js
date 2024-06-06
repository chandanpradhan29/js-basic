// var c =300;
let a =10; //global scope
if(true){
    let a=100;
    const b =20;
    // var c =30; //it dosnot follow scope , scope means {  } , { } called block scope
    console.log("inner a : " ,a);
}

console.log(a);
// console.log(b);
// console.log(c);