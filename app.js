import express from 'express'
const app = express()
const port = 3000

import Data from './data.mjs'
const data = new Data()

app.use(express.static('public'))

app.get('/api/data', (req, res) => {
  res.send(data.GetAll())
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})