const express = require('express')
const app = express()
const PORT = 3000
const path = require('path')

app.use(express.static(path.join(__dirname)))

app.get('/', (req, res) => {
  res.sendFile('index.html')
})

app.get('/', (req, res) => {
  res.json({ beer: true })
})

app.listen(PORT, err => {
  console.log(err || `Holding my beer at ${PORT}`)
})
