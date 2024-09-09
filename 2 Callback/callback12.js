// program showing the concept of callback

var limit=10;
function myfun(limit,callback){
    var x = setInterval(()=>{
        console.log(limit--);
        if(limit==0){
            clearInterval(x);
            callback("Task Completed");
        }
    },1000);
}
function demo(msg){
    console.log(msg);
}
myfun(limit,demo);