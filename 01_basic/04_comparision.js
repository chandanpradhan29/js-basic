console.log("2" > 1);//true
console.log("02" >1);//true

//typescript don't allow you to compare to data type
console.log(null>0);// 0 >0 = false
console.log(null==0);
console.log(null>=0); // 0>=0 = true

console.log(undefined ==0);//false
console.log(undefined >0);//false
console.log(undefined <0);//false

//**** . we don't have to perform above operation ****

console.log("2" ==2);
console.log("" ===2);
2
/*
Note : 
i)equallity check === and comparison  > , >= < , <= work differently  ,
comparison converts null to number i.e 0 . 
so 1) 0>0 = false 3) 0 >=0 => true  
ii) check undefine with any comparision and equallity gives you false 

iii) === strictly check same data type on LHS And RHS . 
   its don't internally convert the data type then check.

*/

