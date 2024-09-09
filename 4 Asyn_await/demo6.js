function check(arr,obj){
    return new Promise((resolve,reject)=>{
        let f=false;
        for(element of arr){

                if(element.name==obj.name && element.password == obj.password){
                   f=true;
                   break;
        }
    }

    if(f){
        resolve(obj);
    }else{
        reject(obj);
    }
    }
     )
}

async function myfun()
{
try{
    let arr =[
        {
            name:"raj",
            password:12345
        },
        {
            name:"adity",
            password:54321
        },
        {
            name:"ronit",
            password:9876
        },
    ]


    let obj ={
        name:"adit",
        password:54321
    }

let result = await  check(arr,obj);
console.log(result);
}
catch(error){
    console.log("incorrect");
    
    console.log(error);
    
}
}
myfun();
