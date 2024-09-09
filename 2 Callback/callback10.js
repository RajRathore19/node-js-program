// program showing the concept of callback hell

var num=10;
function myfun(num,callback){
    console.log(num+"1");
    callback(num+2,(num,callback)=>{
        console.log(num+"3");
        callback(num+2,()=>{
            console.log("End of program");
        });    
    });    
}
myfun(num,(num,callback)=>{
    console.log(num+"2");
    callback(num+2,(num,callback)=>{
        console.log(num+"4");
        callback();
    });
});