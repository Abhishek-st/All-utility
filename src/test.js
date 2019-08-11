const url = 'https://ide.geeksforgeeks.org/main.php';
const fetch = require("node-fetch");
let c=`
a=input('')
print(a)
`

var data= {
    lang: "Python3",
    code: c,
    input: "hello",
    save: "false",
};

fetch(url,{
    method:"post",
    body:JSON.stringify(data),
    headers:{
        'Content-Type':'application/json'
    }
}).then(res=>res.json())
.then(res2=>console.log(res2));