// program showing the concept of promise

// var obj = Promise.resolve(100);
// console.log("typeof obj : ",typeof obj);

// obj.then((value)=>{
//     console.log(value);
// })

var obj = Promise.reject(100);
console.log("typeof obj : ", typeof obj);

obj.catch((value)=>{
    console.log(value);
})
