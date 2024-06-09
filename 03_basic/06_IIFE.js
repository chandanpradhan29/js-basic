//named IIFE
(function chai() { 
    console.log("db connected");
})();

//unamed IIFE
(() => {
  console.log("db connected2");
})();

//Prameterized IIFE
((name) => {
    console.log(`name is ${name} is connected`);
  })('chandan');
