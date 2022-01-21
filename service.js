const express = require('express');
const app = require('./app');

app.use('/', (req, res, next) => {
    console.log('service start !');
});

const port = 4000;
app.listen(port, function () {
    console.log('callback function for service js');
});

// if do : npm run nodemon-service for service.js
// then this console.log will be in the console
// in the order of all console log
// in app.js and in service.js
// remember app.js is the main in package.json
// so app.js will be the first to show its console.log in the console

console.log('<<< service >>> --- --- <<< service >>>');
console.log('=== === service.js === ===');
console.log('<<< service >>> --- --- <<< service >>>');

// testing is hard 
// but so cool
// Need more power !
