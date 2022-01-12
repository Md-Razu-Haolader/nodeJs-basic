const pathModule = require('path');
const fsModule = require('fs');
console.log(fsModule);
console.log(fsModule.readdirSync('./'));
fsModule.access('os_module.js', (err) => {
    if(err) console.log('File not exists!');
    else console.log('File exists!');
});

// fsModule.mkdir(pathModule.join(__dirname, 'my_test_dir'), (err) => {
//     if (err) {
//         return console.error(err);
//     }
//     console.log('Directory created successfully!');
// });

