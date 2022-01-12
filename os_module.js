const osModule = require('os');
console.log(osModule);
console.log(osModule.hostname());
console.log(`Total memory: ${osModule.totalmem()}`);
console.log(`Total free memory: ${osModule.freemem()}`);
console.log(osModule.userInfo());