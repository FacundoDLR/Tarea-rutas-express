const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(`<h2>Hola mundo</h2>`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/NyA/:nombre/:apellido', (req, res) => {
    const name = req.params.nombre;
    const lastName = req.params.apellido
    res.send(`<p>Hola ${name} ${lastName} 👋</p>`)
  })