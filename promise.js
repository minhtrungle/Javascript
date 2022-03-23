const promise = new Promise((resolve, reject) => {
    //do something
    let a = 2;
    let b = 1;
    if (a == b) {
        resolve();
    } else {
        reject();
    }
});

promise 
    .then(function () {
        console.log("success");
    })
    .finally(function () {
        console.log("---");
    })
     .catch(function () {
        console.log("failed");
    });

    //Promise All
    function daBong() {
        console.log("Da bong");
    }
    function cauLong() {
        console.log("Cau long");
    }
    function bongRo() {
        console.log("Bong ro");
    }
    const daBongPromise = daBong; //callback function truyền vào đối số k cần dấu ()
    const cauLongPromise = cauLong;
    const bongRoPromise = bongRo;

    const anToi = Promise.all([daBongPromise,  cauLongPromise, bongRoPromise]).then(
        function (chay, danh, nem) {
            console.log(chay);
            console.log(danh);
            console.log(nem);
        }
    );