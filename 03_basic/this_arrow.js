//this keyword will work on for object properties .
// this keyword will not work for function proprties.
const user = {
    usename : "chandan" ,
    location : "banglore"
}

const f1 = function() {
    console.log(`username is ${user.usename}`);
    console.log(user.usename);
    console.log(this);
}

// console.log(user.usename);
// f1();
// console.log(this);


const f2 = function(){
    const name ="harish"
    const age = 24 

    console.log(this.age);//undefine

}
// f2();

//#####################this end here####################

//###################### arrow function #################

const addTwoNums = function(num1,num2) {
    return num1+num2
}

// console.log(addTwoNums(10,6));

const numAvg = (num)=> {
  return num/2
}

// console.log(numAvg(10));

const numAvg1 = ()=>  (num/2)

// console.log(numAvg1(10));


//we can object to the function

const takeObj = (num1 ,num2)=> ({name:"chandan"})
// console.log(takeObj(1,2));

