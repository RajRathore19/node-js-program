// program showing the concept of callback

console.log("statememt 1");

//this is callback function 
const demo = ()=>{
    console.log("statememt 4");
    var obj = {
        name:"Andrew Anderson",
        age : 45,
        address : "India"
    }
    setTimeout(()=>{
        console.log("statememt 5");
        return obj;
    },3000);
    console.log("statememt 6");
}

//this is high order function
function myFun(callback){
    console.log("statememt 3");
        callback();
    console.log("statememt 7");
}
myFun(demo);

console.log("statememt 2");

