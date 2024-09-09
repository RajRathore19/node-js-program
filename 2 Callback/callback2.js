// program showing the concept of callback

const y = function demo(){
    console.log("This is an example of callback");
}
function myFun(callback){
    console.log("typeof callback : "+typeof callback);
    callback();
}
myFun(y);