// program showing the concept of callback

console.log("Before execution");

const myFun1 = function demo1(){
    console.log("1 This is an example of callback");
}
const myFun2 = function demo2(){
    console.log("2 This is an example of callback");
}
const myFun3 = function demo3(){
    console.log("3 This is an example of callback");
}
function myFun(callback1,callback2,callback3){
    console.log("first");
        callback1();
    console.log("second");
        callback2();
    console.log("third");
        callback3();
}
myFun(myFun1,myFun2,myFun3);

console.log("After execution");
    