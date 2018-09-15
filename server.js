const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const fs = require('fs')

const validateComponentId = (id) => id

app.use('/answers/:id', bodyParser.json(), (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Accept, Origin, Content-Type, access_token');
  res.header('Access-Control-Allow-Credentials', 'true');
  
  console.log('req', req)
  console.log('req.params.id', req.params.id)
  console.log(req.body)
  console.log(JSON.stringify(req.body, null, 2))
  
  fs.readFile(`data/${req.params.id}.json`, (err, data) => {
    if (err) throw err;
    console.log(JSON.parse(data));

    if (req.body) {
      res.json({ "answers": JSON.parse(data.toString()) });
    }


  });
  
  
})


app.use('/saveanswers/:id', bodyParser.json(),(req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Accept, Origin, Content-Type, access_token');
  res.header('Access-Control-Allow-Credentials', 'true');
  
  fs.writeFile(`data/${validateComponentId(req.params.id)}.json`, JSON.stringify(req.body), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
    
    res.send('saved:' + JSON.stringify(req.body))
  })
})

app.listen(5001)
console.log('static content server on 5001')
