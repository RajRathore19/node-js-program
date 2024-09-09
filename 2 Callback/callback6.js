// program showing the concept of callback(Asynchronous)

console.log("Before execution");

const service = function(){
    console.log("Mail Sent");
}
function myFun(msg,callback){
    console.log(msg);
    setTimeout(callback,2000);
}
myFun("Task Complete",service);

console.log("After execution");
