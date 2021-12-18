import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import data from './data.js'
import config from './config.js'

mongoose
  .connect(config.MONGODB_URL)
  .then(() => {
    console.log('Connected to mongodb')
  })
  .catch((error) => {
    console.log(error.reason)
  })

const app = express()

app.use(cors())

app.get('/api/products', (req, res) => {
  res.send(data.products)
})

app.listen(5000, () => {
  console.log('server at http://localhost:5000')
})
