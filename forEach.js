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