
//var num=2;
async function fun(num){
try{
let promise = new Promise((resolve,reject)=>{
    (num%2==0)?resolve("even"):reject("odd");
})
let test = await promise;
console.log(test);
}
catch(error){
console.log(error);

}

}
fun(2);