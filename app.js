var express = require('express');
var app = express();

app.get('/', function(request, response) {
    response.send('Hello Mama!');
});

app.listen(3000, function() {
    console.log('Listening port 3000')
});
