const nums = [1,2,3]
// const total = nums.reduce( function(acc , currVal) {
//     console.log(`acc : ${acc} and currVal : ${currVal} `);
//     return acc + currVal
// } , 0 );

//using arrow function 
const total = nums.reduce( (acc,currVal) => (acc + currVal) , 0 )
// console.log(total);

//course cart 

const courses = [
    {
        item : "js course" ,
        price : 2999
    } ,

    {
        item : "dev course" ,
        price : 999
    } ,

    {
        item : "react course" ,
        price : 3999
    } ,

    {
        item : "app dev course" ,
        price : 5999
    } ,

]

const toatlCartPrice = courses.reduce ( (acc ,item) => (acc + item.price), 0 )
console.log(toatlCartPrice);     