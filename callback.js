// 1. Là một hàm

//CallBack
function thuchien() {
    console.log('_____');
}
function viec(doCallback) {
    doCallback();
}
viec(thuchien);

//Callback Hell
function callBackhell1(temp){
    temp();
}

function callBackhell2(temp){
    temp();
}

function callBackhell3(temp){
    temp();
}


