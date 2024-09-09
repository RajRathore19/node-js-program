// program showing the concept of callback

console.log("Before execution");

var demoFun = function demo(result){
    console.log("Result : ",result);
}
var demo1 = function(msg){
    console.log(msg);
}
function myFun(call,callback,a,b){
    var sum = a+b;
    const msg = "This is an example of addition";
    call(msg);
    callback(sum);
}
myFun(demo1,demoFun,1222,567);

console.log("After execution");
