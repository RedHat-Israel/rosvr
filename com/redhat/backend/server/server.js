const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
var serveIndex = require('serve-index');

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/test', function (req, res) {
    console.log("body", req.body);
    res.send('Your Text is' + req.body.confname);
});

app.get('/api/hello', function (req, res) {
    res.sendFile(path.join(__dirname+'/hello.html'));
});

app.use('/configfiles', serveIndex('config')); // shows you the file list
app.use('/configfiles', express.static('config')); // serve the actual files

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});
