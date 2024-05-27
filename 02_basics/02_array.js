const arr = [1 , 2 , 3 , [4,5,6] , 7 , [6 , 7 , [4,5]]];
const result_arr = arr.flat(Infinity);
// console.log(result_arr);

const myarr2 = [12,13,"cp"];
console.log(Array.isArray([1,2,3])); //false

const name_arr = Array.from("chandan"); // convert names pass on paramater as array like ['c' ,'h' , 'a' , 'n' , 'd' , 'a' , 'n']
console.log(name_arr);


//of() :
let a1= 10;
let a2 =20;
let a3 =30;
let res = Array.of(a1,a2,a3);
console.log(res);
