const  logger = require('./logger');
const loggerObj = new logger();
require('dotenv').config();

loggerObj.on('saveUserData',(data) => {
    console.log(`User Data saved successfully by ${process.env.APP_USER_NAME}`);
    console.log(data);
});

loggerObj.log('Test msg...');
