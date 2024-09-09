// example showing the concept of Asynchronous 

console.log("Before execution");

setTimeout(function myFun1(){
    console.log("myFun1 executes");
},4000);

setTimeout(function myFun2(){
    console.log("myFun2 executes");
});

setTimeout(function myFun3(){
    console.log("myFun3 executes");
},1000);

console.log("After execution");
