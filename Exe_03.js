//Exe1

var Array = [0, 5, 4, 2, 8];
function sumArray(Array) {
    let sum = 0;
    for (let i = 0; i < Array.length; i++) {
        sum += Array[i];
    }

    return sum;
}
console.log("The sum of an array of integers ", sumArray(Array));

//Exe2

const person = [
	{ name: 'John', age: 24 },
	{ name: 'Pete', age: 25 },
	{ name: 'Mary', age: 28 }
];
const namePerson = person.map(function(item) {
    return item.name;
});

console.log(namePerson);

//Exe3

Array1 = ['John', 'Pete', 'Mary']
Array2 = ['Mary', 'Henry', 'Harry']
var Array3 = Array1.concat(Array2)

let Array = new Set(Array3);
console.log(Array);