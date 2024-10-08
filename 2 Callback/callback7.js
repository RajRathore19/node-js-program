// program showing the concept of callback(Asynchronous)
/*
function gotoroom(){
    console.log("gotoroom");
}
function removegarbage(){
    console.log("removegarbage");
}
function wonprize(){
    console.log("wonprize");
}

gotoroom();
removegarbage();
wonprize();
*/
/*
function gotoroom(){
    console.log("gotoroom");
    removegarbage();    
}
function removegarbage(){
    console.log("removegarbage");
    wonprize();
}
function wonprize(){
    console.log("wonprize");
}

gotoroom();
*/

console.log("Before execution");

function gotoroom(callback){
    console.log("gotoroom");
    callback(wonprize);
}
function removegarbage(callback){
    console.log("removegarbage");
    callback();
}
function wonprize(){
    console.log("wonprize");
}

gotoroom(removegarbage);
console.log("After execution");
