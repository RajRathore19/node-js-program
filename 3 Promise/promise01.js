// program showing the concept of promise

function checkNum(num1,num2){
    return new Promise((resolve,reject)=>{
        (num1==num2) ? resolve("Both are equal") : (num1>num2 ? resolve(num1+" is greater") : reject(num2+" is greater"))
    });
}
/*
var num1 = 56,num2=561;
checkNum(num1,num2).then((msg)=>{
    console.log("Result : ",msg);
}).catch((error)=>{
    console.log("Result : ",error);
});
*/

checkNum(num1 = 56 , num2 = 561).then((msg)=>{
    console.log("Result : ",msg);
}).catch((error)=>{
    console.log("Result : ",error);
});
