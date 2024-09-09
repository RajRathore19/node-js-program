
var a=3;
var promise = function(a){
    return new Promise((resolve,reject)=>{
        resolve(a*a);
    })
}
promise(a).then(function(a){  
    return new Error("Error occurs");
}).then((x)=>{
    console.log("error : ",x);
}).catch(function(b){
    console.log("your enter no is :",b);
})