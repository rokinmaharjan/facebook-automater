const express = require('express')
const app = express()

const config = require('./config')

const fbPageStatusUploadService = require('./app/services/fbPageStatusUploadService')

const mongoose = require('mongoose')

// For mongo atlas
// mongoose.connect(config.mongodb, { dbName: 'dbName' })
mongoose.connect(config.mongodb)

let Quote = require('./app/models/quote')


app.post('/fb/page/upload', (req, res) => {
  Quote.find({}, function (err, quotes) {
    if (err) res.send(err)
    
    quotes.slice(4, 24).map(i => {
      fbPageStatusUploadService('"' + i.quote + '"' + '\n' + '- ' + i.author)
    })

    res.send("success")
  })
})

app.listen(8080, () => console.log('Listening on port 8080'))