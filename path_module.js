const pathModule = require('path');
// console.log(__filename);
// console.log(__dirname);
console.log(pathModule);
console.log(pathModule.parse(__filename));
console.log(pathModule.basename(__filename));
console.log(pathModule.extname(__filename));
console.log(pathModule.dirname(__filename));
console.log(pathModule.resolve(__filename));

console.log(pathModule.join('/', 'report', 'user', 'list.js')); //'/report/user/list.js'
