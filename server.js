const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const fs = require('fs')
const { equallyGraded } = require('./lib/grading.js')

const validateComponentId = (id) => id

app.use('/answers/:id', bodyParser.json(), (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Accept, Origin, Content-Type, access_token')
  res.header('Access-Control-Allow-Credentials', 'true')

  switch (req.method) {
    case "OPTIONS":
      res.sendStatus(200)
      break
    case "POST":
      fs.readFile(`data/${req.params.id}.json`, (error, data) => {
        if (error) {
          console.log('error', error)
          res.send({ error })
        }
        else if (req.body) {
          res.json({
            answers: JSON.parse(data.toString()),
            grade: equallyGraded(JSON.parse(data), req.body),
          })
        }
      })
      break
    default:
      res.redirect('/404')
      break
  }
})

app.use('/saveanswers/:id', bodyParser.json(),(req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Accept, Content-Type, access_token')
  res.header('Access-Control-Allow-Credentials', 'true')

  switch (req.method) {
    case "OPTIONS":
      res.sendStatus(200)
      break
    case "POST":
      fs.writeFile(`data/${validateComponentId(req.params.id)}.json`, JSON.stringify(req.body), (err) => {
        if (err) throw err
        console.log('The file has been saved!')
        res.json({ "saved": req.body })
      })
      break
    default:
      res.redirect('/404')
      break
  }
})

app.get('/404', (req, res, next) => {
  res.send('page not found')
})

app.listen(5001)
console.log('static content server on 5001')
