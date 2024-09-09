// example showing the concept of synchronous 

console.log("Before execution");

function myFun1(){
    console.log("myFun1 executes");
}
function myFun2(){
    console.log("myFun2 executes");
}
function myFun3(){
    console.log("myFun3 executes");
}
myFun1();
myFun2();
myFun3();

console.log("After execution");
