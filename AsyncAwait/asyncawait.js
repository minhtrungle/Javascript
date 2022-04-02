// Async Await
// Xử lý bất đồng bộ

// const getJson = async ) => {
// let resulti= await callLApil // 2s
// let result2 = await callApi2 // 45
// let result3 = await callApi3 // 5s
// }
   const getJson = async () => { // chạy cùng 1 lúc 3 callApi
   let result1 = await Promise.all( [calLApil, callApi2, callApi3])
   }
// cách 1:
function getJSON () {
    // To make the function blocking we manually create a Promise.
    return new Promise(function (resolve) { 
      axios
       . get ("https://tutorialzine.com/misc/files/example.json")
       then(function (json) {
        // The data from the request is available in a .then block
        // We return the result using resolve.
        resolve(json);
       });
     });
}
// cách 2:
// Async/Await approach

    // The async keyword will automatically create a new Promise and return it.
    async function getJSONAsync() {
    // The await keyword saves us from having to write a .then() block.
     let json = await axios.get(
      "https://tutorialzine.com/misc/files/example.json"
     );
     // The result of the GET request is available in the json variable.
     // We return it just like in a regular synchronous function.
     return json;
    }