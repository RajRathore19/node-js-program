// program showing the concept of promise

function demo(num){
    return new Promise((resolve,reject)=>{
        (num>=2) ? resolve(num*num) : reject(num*num*num);
    });
}
demo(1).then((num)=>{
    console.log("statement 1");    
    return num*num;
}).then((num)=>{
    console.log("statement 2");
    return num*num*num;
}).catch((num)=>{
    console.log("statement 3");
    return num*num;
}).then((num)=>{
    console.log("Result then : ",num);
}).catch((num)=>{
    console.log("Result catch : ",num);
});
