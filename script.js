console.log("alive!");
const fs = require('fs');

let rf = function(path) {
    return new Promise((resolve, reject)=>{
        fs.readFile(path,"utf-8",(err, data)=>{
            resolve(data);
            reject(err);
        })
    })
};
// readFile('index.html')
//     .then(data=> console.log(data))
//     .catch(err=>console.log(new Error(err)));


module.exports = rf;
