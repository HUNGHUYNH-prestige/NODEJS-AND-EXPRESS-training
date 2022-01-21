const express = require('express');
//const app = express();

const app = require('./app');

//const directory = '/' + (process.env.STATIC_DIR || 'dist');
const directory = '/';

app.use(express.static(__dirname + directory));

const port = process.env.PORT || 3001;
app.listen(port, function () {
    console.log('Listening on :', port);
    console.log('The test is ok !');
});

const port_2 = 3002;
app.listen(port_2, () => {
    console.log('duplication test --- --- 💎');
    console.log(`Port is active on : ${port_2}`)
})

let path_get = '/get_json';
app.get(path_get, (req, res, next) => {
    res.send('This is get json path');
    //res.json({json_message : 'json message'});
    console.log('json message in get method http');
})

