// program showing the concept of async await

function checkNum(num){
    return new Promise((resolve,reject)=>{
        (num%2==0) ? resolve("even number") : reject("not a even number");
    });
}
console.log("statement 1");

async function myFun(){
    try{
        console.log("statement 11");

            var result = await checkNum(1);
            console.log("statement 22");

            console.log("result : ",result);
    }catch(error){
        console.log("Error : ",error);
    }
} 
myFun();

console.log("statement 2");
