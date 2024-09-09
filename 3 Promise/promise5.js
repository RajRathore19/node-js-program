
var a=3;
var promise = function(a){
    return new Promise((resolve,reject)=>{
        (a%2==0) ? resolve("even") : reject("odd");
    })
}
promise(a).then(function(a){
    console.log("your enter no is:",a);
}).catch(function(b){
    console.log("your enter no is :",b);
})