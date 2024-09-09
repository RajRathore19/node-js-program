// example showing the concept of synchronous 

console.log("Before execution");

function myFun1(){
    console.log("myFun1 executes");
    myFun2();
}
function myFun2(){
    console.log("myFun2 executes");
    myFun3();
}
function myFun3(){
    console.log("myFun3 executes");
}
myFun1();
console.log("After execution");
