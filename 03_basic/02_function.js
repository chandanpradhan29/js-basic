//rest operator :
function calculateCartPrice(val1,val2,...num) { //(...num)
    return num
}

// console.log(calculateCartPrice(10,20,30,40));
//rest operator :


//function with objects 
const user = {
    "username" : "chandan" ,
    price : 200
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} & price is ${anyobject.price}`);
}

//call function

// handleObject(user);

//we an pass object direct to the function 
handleObject(
    {
        "username" : "sami" ,
        price :500
    }
)

//function with objects 

//function with arrays
const mynewarry = [10,20,30,40];
function returnArrSecondVal(anyArray) {
    return anyArray[1]
}

//function call
// console.log(returnArrSecondVal(mynewarry));

console.log(returnArrSecondVal(
    [60,50,80]
))
