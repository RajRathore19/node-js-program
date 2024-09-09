// program showing the concept of async await

async function myFun(){
    return "hello";
}
var obj = myFun();
obj.then((msg)=>{
    console.log("then : ",msg);
}).catch((msg)=>{
    console.log("catch : ",msg);
});
