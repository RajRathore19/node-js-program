// example showing the concept of Asynchronous 

console.log("Before execution");

function myFun1(){
    console.log("myFun1 executes");
}
function myFun2(name,a,b,c){
    console.log("myFun2 executes : "+name+" sum : "+(a+b+c));
}
function myFun3(){
    console.log("myFun3 executes");
}
myFun1();

setTimeout(myFun2,0,"Andrew Anderson",11,22,33); // here 5000ms simply means 5s

myFun3();
console.log("After execution");
