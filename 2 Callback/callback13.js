// program showing the concept of callback

var fruits = ["Mango","Banana","Apple","Cherry"];

function myfun(fruits,callback){
    console.log("Waiting to be arranged in ascending order....");
    setTimeout(()=>{
        callback(fruits.sort());
    },2000);
}
function printValues(res){
    console.log("In Ascending order : ",res);
}
myfun(fruits,printValues);