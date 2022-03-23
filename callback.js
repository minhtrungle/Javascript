// 1. Là một hàm
// 2. 
function myFunction(param) {
    param(123456);
}

myFunction(myCallback);

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

//map
Array.prototype.mapA = function (callback) {
    let output =[];
    arrayLength = this.length;

    for (let i = 0; i < arrayLength; i++) {
        let result = callback(this[i], i);
        output.push(result);
    }

    return output;
    
};

const courses = ["L", "M", "T"];

const temp = courses.mapA(function (element) {
    console.log(element);
});

//Foreach, find, fillter
//foreach2
Array.prototype.forEach2 = function (callback) {
    for (let index in this) {
        if (this.hasOwnProperty(index)) {
            callback(this[index], index, this);
        }
    }
};

courses.forEach2(function (course, index, array) {
    console.log(course, index, array);
});