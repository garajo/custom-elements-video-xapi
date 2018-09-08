const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const fs = require('fs')


app.use('/answers/uuid-soetuh', bodyParser.json(),(req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Accept, Origin, Content-Type, access_token');
  res.header('Access-Control-Allow-Credentials', 'true');

  console.log('req', req)
  
  console.log(req.body)
  console.log(JSON.stringify(req.body, null, 2))

  fs.readFile('data/se98aoeu.json', (err, data) => {
    if (err) throw err;
    console.log(JSON.parse(data));
  });

  if (req.body) {
    res.json({
      a: 1,
      b: 2,
    });
  }

})

app.listen(5001)
console.log('static content server on 5001')
