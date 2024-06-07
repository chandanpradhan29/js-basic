function one(){
    const username = "hitesh" 

    function two() {
        const website ="youtube"
        console.log("function two() executed : " , website);
    }
    // console.log(website)//error : aceesing website outside the scope

    two()
}

// one();

//if else 

if(true) {
    const username = "chandan"

    if(true){
        const website = "youtube"
        // console.log(website);
    }
    // console.log(website);
}
// console.log(username);


// hoisting 

console.log(addTwoNos(10,5));
function addTwoNos(num1 , num2) {
    return num1+num2
}

console.log(sum(10,2)); //error : can't access sum before intilization , called as  hositing 
const sum = function(num1,num2) {
    return num1+num2
}