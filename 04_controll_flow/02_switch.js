// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

let monthCount = "jan"
switch (monthCount) {

    case "jan":
        console.log("jan");
        break;

    case "feb":
        console.log("feb");
        break;

    case "march":
        console.log("march");
        break;

    default:
        console.log("invalid option");
}



//check array is empty
let arr = [];
let obj = {}
if (arr.length == 0) {
    console.log("array is empty");
}
if(Object.keys(obj).length ==0) {
    console.log("object is empty");
}

//null coalescing operator(??) : null undefine  . 

val1 = null ?? 15 // give output only truthy value
val2 = undefined ?? 20 // give output only truthy value
val3 = null ?? 30 ?? 40 // consider first truthy value and give output
console.log(val3);

//terniary operator (?)
let ans = (100 < 50) ? true : false
console.log(ans);
