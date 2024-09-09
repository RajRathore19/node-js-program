function checkNum(num){
 return new Promise((resolve, reject) => {
    (num>0)?resolve("positive"):reject("negative");
 });
}

async function fun(){
    try{
        let result = await checkNum(4);
        console.log(result);
        
    }
    catch(error){
        console.log(error);
    }

}
fun();