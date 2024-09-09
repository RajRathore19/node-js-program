// program showing the concept of callback hell

var a = 10,b=20;

function addition(a,b,callback){
    console.log("Addition : "+(a+b));
    callback(false);
}
function subtraction(a,b,callback){
    console.log("Subtraction : "+(a-b));
    callback(false);
}
function multiplication(a,b,callback){
    console.log("Multiplication : "+(a*b));
    callback(false);
}
function division(a,b,callback){
    console.log("Division : "+(a/b));
    callback();    
}
addition(a,b,(value)=>{
    if(!value){
        subtraction(a,b,(value)=>{
            if(!value){
                multiplication(a,b,(value)=>{
                    if(!value){
                        division(a,b,()=>{
                            console.log("End of program");
                        });
                    }
                })
            }
        })
    }
})

