
var a=3;
new Promise((resolve,reject)=>{
   
    if(a%2==0){
        resolve("even");
    }else{
        reject("odd");
    }
}).then(function(a){
    console.log("your enter no is:",a);
}).catch(function(b){
    console.log("your enter no is :",b);
})