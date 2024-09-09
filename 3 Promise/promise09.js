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

Promise.allSettled([gotoroom(),removegarbage(),wonprize()]).then((msg)=>{
    console.log(msg);
    msg.forEach((obj)=>{
        console.log("status : "+obj.status);
    });
}).catch((msg)=>{
    console.log("catch : ",msg);
});