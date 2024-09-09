// program showing the concept of callback

const x=100;
function myFun(a){
    console.log("value of a : "+a);
    console.log("typeof a : "+typeof a);
}
myFun(x);

const y = function demo(){}
function myFun(a){
    console.log("\nvalue of a : "+a);
    console.log("typeof a : "+typeof a);
}
myFun(y);