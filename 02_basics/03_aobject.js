const mysymb = Symbol("113")
const myobj = {
    name : "chandan" ,
    "full name" : "chandan kumar" , //can't access this using .dot operator
    age : 25 ,
    city : "banglore" ,
    isLoggedin : false ,
    loginDays : ["monday" , "tuesday"] ,
    [mysymb] : "key1" ,
    callme : function() {
        console.log("hii");
    } 
}

//accesing proptites 
console.log(myobj.name);
console.log(myobj["name"]);
//console.log(myobj.full name);//error
//accessing symbol :
console.log(myobj[mysymb]);

//update properties 
myobj.name ="raaj naam tho suna hoga"

//freez object : we can't do any updation once object is freez 
// Object.freeze(myobj)
myobj.name ="simran naam tho suna hoga"
console.log(myobj);
console.log("--------------------------------");

myobj.greeting = function(){
    console.log(`hello beta  ${this.name} `);
}
console.log(myobj.greeting());
console.log(myobj.callme());
