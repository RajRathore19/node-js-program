// example showing the concept of promise

var r = new Promise((resolve,reject)=>{
    resolve("resolved called");
    //reject(new Error("reject called"));
})
 .then(function(msg){
    console.log("resolve : ",msg);
},function(msg){
    console.log("reject : ",msg);
}).finally(()=>{
    console.log("End of program");
});