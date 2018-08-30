var express = require('express')
var app = express()

app.post('/answers/uuid-soetuh', function (req, res) {
  
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({
    a: 1
  }));

})

app.listen(5001)
console.log('static content server on 5001')
