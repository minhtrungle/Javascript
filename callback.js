// 1. Là một hàm
// 2. 
function myFunction(param) {
    param(123456);
}
//CallBack
myFunction(myCallback);

function myCallback1() {
    console.log(1);
}
function myCallback2() {
    console.log(2);
}
myCallback1();
myCallback2();

//Callback Hell
function callBackhell1(temp){
    temp();
}

function callBackhell(temp){
    temp();
}

function callBackhell3(temp){
    temp();
}
