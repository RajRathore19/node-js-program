// example showing the concept of Asynchronous 

console.log("Before execution");

setImmediate(function myFun3(){
    console.log("myFun3 executes");
});

setTimeout(function myFun1(){
    console.log("myFun1 executes");
});

setInterval(function myFun2(){
    console.log("myFun2 executes");
});


console.log("After execution");
