const  logger = require('./logger');
const loggerObj = new logger();

loggerObj.on('saveUserData',(data) => {
    console.log('User Data saved successfully');
    console.log(data);
});

loggerObj.log('Test msg...');
