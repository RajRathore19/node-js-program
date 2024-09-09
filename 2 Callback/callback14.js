// program showing the concept of callback

var numbers = [12,23,34,45,56,67];
//var numbers = [];

function myfun(numbers,callback){
    if(numbers.length==0)
        callback(true,0);
    else{
        var sum = numbers.reduce((initial,another)=>{
            return initial+another;
        });
        callback(false,sum);
    }    
}
function demo(error,sum){
    if(error)
        console.log("Array is empty");
    else
        console.log("Sum : "+sum);
}
myfun(numbers,demo);


