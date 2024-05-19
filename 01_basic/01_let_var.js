function ex() {
    if(true){
        var x =10; //functional scope
        let y=20; //block scope
    }

    console.log(x);//10 : inside the functional scope
    console.log(y);//error : accesing outside the block scope
}
// ex();

/*note1: 
let : block scope : variables accessiable with an block
var : functional scope : variables accessiable with an function only
*/

var x =10 ;
var x=20;
