/*
function addTwoNums(number1 , number2) {
    console.log(number1+number2);
}
//function call 
addTwoNums(9,7);
*/

function addTwoNums(number1 , number2) {
    // let  result = number1 + number2
    // return result
    return number1+number2
}

function loginUserMsg(username="chandu"){
    if(!username){ //equal to : username == undefined
        console.log("please enter username");
        return
    }
    return `${username} is logged in`
}
//function call 
console.log(loginUserMsg("chandanpradhan"));
console.log(loginUserMsg("rakul"));//blank parameter -> undefine is logged in (when we not passsed any value)----> interview question 

// const sum = addTwoNums(9,7);
// console.log("sum is : ",sum);