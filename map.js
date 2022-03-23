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

const courses = ["Xanh", "Tim", "Vang"];

const temp = courses.mapA(function (element) {
    console.log(element);
});