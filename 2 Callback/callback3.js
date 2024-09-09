// program showing the concept of callback

console.log("Before execution");

function myFun(callback1,callback2,callback3){
    console.log("first");
        callback1();
    console.log("second");
        callback2();
    console.log("third");
        callback3();
}
myFun(function demo1(){
    console.log("1 This is an example of callback");
},function demo2(){
    console.log("2 This is an example of callback");
},function demo3(){
    console.log("3 This is an example of callback");
});

console.log("After execution");
