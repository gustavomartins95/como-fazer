const port = process.env.PORT || 3000
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Routes
app.get('/', (req, res) => {
  res.render('index')
})

const categorias = require('./routes/categorias')
const publicacoes = require('./routes/publicacoes')

app.use('/categorias', categorias)
app.use('/publicacoes', publicacoes)

app.listen(port, (err) => {
  if (err) console.log('error', err)
  else console.log('Server started')
})
