const express = require('express');
const app = express();

//const directory = '/' + (process.env.STATIC_DIR || 'dist');
const directory = '/';

app.use(express.static(__dirname + directory));

const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Listening on :', port);
    console.log('The test is ok !');
});

const port_2 = 3001;
app.listen(port_2, () => {
    console.log('duplication test --- --- 💎');
    console.log(`Port is active on : ${port_2}`)
})

