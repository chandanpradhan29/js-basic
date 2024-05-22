// Number() : used convert any data type to number 
let score1 = "35";
let score2 = "35abc";
let score3 = true;
let score4 = null;
let score5 = undefined;

let convertInNum1 = Number(score1);
console.log(typeof convertInNum1);
console.log(convertInNum1);

let convertInNum2 = Number(score2);
console.log(typeof convertInNum2);
console.log(convertInNum2);

console.log(Number(score3));
console.log(Number(score4));
console.log(Number(score5));

/*Number()
"35" => 35
"35abc" => Nan
null =>0
undefine => NaN
true => 1 , false => 0
*/

//Boolean() : used to any data type to boolean

let myvalue =1 ;
let myvalue2 ="" ;
let myvalue3 ="chandan" ;

let convertedBool = Boolean(myvalue);
console.log(typeof convertedBool , convertedBool);//boolean , true

let convertedBool2 = Boolean(myvalue2);
console.log(typeof convertedBool2 , convertedBool2);//boolean false

let convertedBool3 = Boolean(myvalue3);
console.log(typeof convertedBool3 , convertedBool3);//boolean true

/*
Boolean() :
1=> true , 0=> false 
"" => false 
"chandan" => true
*/