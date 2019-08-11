var request = require('request');

var program = {
    script : `a=input('')\nprint(a)`,
    language: "python3",
    stdin:"ast",
    versionIndex: "0",
    clientId: "7a44198107b7f42b95724a3f9abf98a3",
    clientSecret:"cf48176249d4b71363f707d11cbef5d2242feff1890ffcf6fd5db8586c47a9bf"
};
request({
    url: 'https://api.jdoodle.com/v1/execute',
    method: "POST",
    json: program
},
function (error, response, body) {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    console.log('body:', body);
});

