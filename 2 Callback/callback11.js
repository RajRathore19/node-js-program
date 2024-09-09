// program showing the concept of callback

var a = 10, b = 45;
function  myfun(a,b,operation,callback){
    switch(operation){
        case 'addition' : res = a+b;
                            break;
        case 'subtraction' : res = a-b;
                            break;
        case 'multiplication' : res = a*b;
                            break;
        case 'division' : res = a/b;
                            break;
        default : res = "No Result";
                  break;
    }
    callback(res);
}
function result(res){
    console.log("Result : "+res);
}

myfun(a,b,'addition',result);