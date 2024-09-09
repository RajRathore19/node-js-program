// example showing the concept of Asynchronous 

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
setTimeout(()=>{
    myFun1()
},4000);
//setTimeout(myFun2,0); // zero time delay
setTimeout(()=>{
    myFun2()
}); // zero time delay
setTimeout(()=>{
    myFun3()
},1000);
console.log("After execution");
