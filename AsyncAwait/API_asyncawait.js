/*5 function call Api
1. Create 
2. Get Detail by id 
3. Delete by id 
4. Update 
5. Get All*/
const axios = require('axios').default;

const id =90;

//1. Create
async function createUser() {
    const data = {
        "name":"Le Minh Trung",
        "avatar":"https://cdn.fakercloud.com/avatars/lmjabreu_128.jpg" 
    }

    const result = await axios.post("https://624061412aeb48a9af735b00.mockapi.io/api/v1/users", data);
    console.log("...", result.data)
}

//2. Get Detail by id 
async function getDetail() {
    const result = await axios.get("https://624061412aeb48a9af735b00.mockapi.io/api/v1/users" + id);
    console.log("...", result.data)
}

//3. Delete by id 
async function deleteUser() {
    const result = await axios.delete("https://624061412aeb48a9af735b00.mockapi.io/api/v1/users" + id);
    console.log("...", result.data)
}

//4. Update 
async function updateUser() {
    const data = {
        "name":"Le Trung",
    }

    const result = await axios.patch("https://624061412aeb48a9af735b00.mockapi.io/api/v1/users" + id, data);
    console.log("...", result.data)
}
//5. getAll
async function getAll() {
    const result = await axios.get("https://624061412aeb48a9af735b00.mockapi.io/api/v1/users");
    console.log("...", result.data)
}
createUser()
createUser() 
getDetail()
deleteUser()
updateUser()
getAll()



//test
async function serviceCallapi( endpoint, method, data = null, id = null) { //dùng chung create, get all, detail, delete, updtae một method
    const url = id ? endpoint + id : endpoint;
    const result = await axios({
        methodf: method,
        url, data
    });
    return result;
}

const endpointurl = "https://624861412aeb48a9af735bee.mockapi.io/api/v1/users";
// The async keyword will automatically create a new Promise and return it.
async function getAll() {
    try {
        const result = servicecallApi(endpointurl)
  console.log("...", result.data)
    } catch (error) {
        console.log(error.data)
    }
}

async function createUser() {
  const data = {
    "name": "Nguyen Van A",
    "avatar": "https://cdn.fakercloud.com/avatars/lmjabreu_128. jpg"
  }
  const result = await serviceCallApi(endpointurl, "post", data)
  console.log(result.data)
}

async function getDetail() {
  const result = await axios.get("https:///624061412aeb48a9af735bee.mockapi.io/api/v1/users?id=" + id)
  console.log(result.data)
}