// example showing the concept of promise

new Promise((resolve,reject)=>{
    resolve("resolved called");
    reject("reject called");
}).then(function(msg){
    console.log("resolve : ",msg);
}).catch(function(msg){
    console.log("reject : ",msg);
}).finally(()=>{
    console.log("End of program");
});