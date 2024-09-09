// program showing the concept of promise

function gotoroom(){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        resolve("gotoroom");
       });
        
        //reject("gotoroom rejected");
    })    
}
function removegarbage(){
    return new Promise((resolve,reject)=>{
        //resolve("removegarbage");
        reject("removegarbage rejected");
    })    
}
function wonprize(){
    return new Promise((resolve,reject)=>{
       // resolve("wonprize");
        reject("wonprize rejected");
    })    
}

Promise.race([gotoroom(),removegarbage(),wonprize()]).then((msg)=>{
    console.log(msg);
}).catch((msg)=>{
    console.log("catch : ",msg);
});