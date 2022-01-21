// nodejs is a runtime

// nodejs est un environnement d'exécution pour du code JavaScript

// if use nodejs then you need to use expressjs

// install express the framework

// nodejs = runtime in english

// expressjs can do : web server creation, routing with router, serve static files

// First things first, you need to start with : npm init in the command line to start a new project

// Create a folder to start with, then go inside with cd in the command line

// Inside this folder do : npm init

// A new file package.json will be created

// Do the following command to install express : npm install express --save

// the option --save is for npm, so npm will save the installation of express in the package.json

// create a .gitignore file with node_module inside

// otherwise the node_module will be pushed in the github repository project

// node module is very heavy and bulky = volumineux

// when someone wants to work with the project : just simply do the following command in the command line : npm install

// Create the first Express application with the code bellow :

console.log('--- --- --- start --- --- ---');
console.log('>>> app.js >>> main file >>> in nodemon');
console.log("Learning how to create an Express Application with NodeJS and Express the framework");


const express = require('express');
const app = express();
const port = 3000;


app.listen(port, () => {
    console.log("This is the callback function for the listen method");
    console.log('App listening at http://localhost:' + port);
    console.log('Here is the app.js file with port ==> ' + port);
    console.log('--- --- --- end app.js --- --- ---');

})

// In order to make the Express Application works, please do the following command in the command line : terminal

// Command : node app

// OR command : node app.js

// Then, Open a web browser and type in the URL => http:localhost:3000 to see the result


// share the app with other js programs by exporting the module
module.exports = app;


// This is important to know : by default
// This file : app.js is the default file
// when running npm run nodemon
// because it is define in the package.json
// as the main file to run

// TESTING IS SO COOL !

// npm start will run by default the :
// node server.js



// EITHER 
// method 1 : argument empty 
let empty = '/empty';
app.use(empty,(req, res, next)=>{
    res.send('Simply, HTTP METHOD GET, and that\'s it');
    console.log("Simply easy testing it's all good");
    // here the code stops
    // it is impossible to do more
    // everything here will be in error status in the console on the server side
    // server side ==> backend ==> nodejs ==> express
})



// OR
// method 2 : argment really empty
// This define the default path for the application app.js

app.use((req, res, next) => {
    res.send('There is nothing as argument in the use method for app');
    console.log('This is another method with no argument to show the use of method use for app');
})


// Create a simple route = path in the URL
app.get('/get', (req, res, next) => {
    res.send('Hello World ! This is the first Express Application')
})



// Testing : create other routes = paths for the application made with Express

const path = '/pomme';

// Result and consequence of that adding : http://localhost:3000/pomme

// Create a new route = path for the Express Application
app.get(path, (req, res, next) => {

    // either : res.send('message')
    //res.send('This the other path made with a different URI in the URL');
    // or : res.send('message')
    //res.json({message : 'This is a message in json format'});
    
    // another example
    let result = 123;
    res.json({something : result});
})

const path_2 = '/poire';

app.get(path_2, (req, res, next) => { 
    res.send('This is the second path for testing');
    next();
})

const path_3 = '/poire/pomme';

app.get(path_3, (req, res, next) => {
    res.send('This is the third path for testing : poire and pomme');
    console.log("Cool, the third path is working fine !");
    next();
});

const path_4 = '/banane';
// app.use : it is possible to use all kind of HTTP methods for REST API
app.use(path_4, (req, res, next) => {
    res.send('Yes, this is cool ! It is a app.use');
    console.log('Here is : app.use');
    next();

});

let path_5 = '/this_is_new';
// testing with postman : this is cool and fun
app.post(path_5, (req, res, next) => {
    res.send('amazing');
    console.log('amazing');
    next();
});

let path_6 = '/this_is_put';
app.put(path_6, (req, res, next) => {
    res.send('This is put method in HTTP');
    console.log('HTTP METHOD PUT is working fine with POSTMAN');
})


let path_7 = '/this_is_put_no_next';
app.put(path_7, (req, res, next) => {
    res.send('This is put method in HTTP no next in the function');
    console.log('HTTP METHOD PUT with no NEXT in the function');
    next();
});

let path_8 = '/this_is_put_json';
app.get(path_8, (req, res, next) => {
    res.json({message : 'This is a message in json format for PUT Method'});
    //res.send('ok');
    console.log('Working json format message in NODEJS runtime and EXPRESS framework');
    next();
})

// training and testing the code for path creation 
// made with passion 
// made with NODEJS => runtime
// made with EXPRESS => framework

// Thanks to POSTMAN for letting me send HTTP REQUEST with no sense !

// 😄

// make sure to enter in the command line, in the terminal :
// node app
// to run the app.js file to get start with the fun !

// Use NODEJS and EXPRESS to build static web app
// To host = héberger ==> static application ==> use NODEJS and EXPRESS

// cool and simple but not easy !

// 💎 shiny


