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

console.log("Learning how to create an Express Application with NodeJS and Express the framework");

const express = require('express');
const res = require('express/lib/response');
const app = express();
const port = 3000;

// Create a simple route = path in the URL
app.get('/', (req, res, next) => {
    res.send('Hello World ! This is the first Express Application')
})

app.listen(port, () => {
    console.log("This is the callback function for the listen method");
    console.log('App listening at http://localhost:' + port);

})

// In order to make the Express Application works, please do the following command in the command line : terminal

// Command : node app

// OR command : node app.js

// Then, Open a web browser and type in the URL => http:localhost:3000 to see the result

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

