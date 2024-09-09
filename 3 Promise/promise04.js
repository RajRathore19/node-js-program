// program showing the concept of promise

function gotoroom(){
    new Promise((resolve,reject)=>{
        resolve("gotoroom");
    }).then((msg)=>{
        console.log(msg);
        new Promise((resolve,reject)=>{
            resolve("remove garbage");
        }).then((msg)=>{
            console.log(msg);
            new Promise((resolve,reject)=>{
                resolve("wonprize");
            }).then((msg)=>{
                console.log(msg); 
            }).catch((error)=>{
                console.log("Error : ",error);
            });
        }).catch((error)=>{
            console.log("Error : ",error);
        }); 
    }).catch((error)=>{
        console.log("Error : ",error);
    });    
}
gotoroom();