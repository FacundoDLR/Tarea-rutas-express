const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(`
  <h2>Tarea de rutas con express</h2>

  <h4>instrucciones de uso de rutas</h4>
  <ul>
  <li>Primer ruta: intercambiar las palabras "nombre y "apellido" por los que usted desee.</li>
  <li>Segunda ruta: intercambiar las palabras "divisor y "dividendo" por los numeros que usted desee.</li>
  <li>Tercer ruta:</li>
  <li>Cuarta ruta:</li>
  <li>Quinta ruta:</li>
  </ul>

  <h4>Lista de rutas con formato de uso</h4>
  <ol>
  <li>http://localhost:3000/NyA/nombre/apellido</li>
  <li>http://localhost:3000/div/:divisor/:dividendo</li>
  <li>http://localhost:3000/</li>
  <li>http://localhost:3000/</li>
  <li>http://localhost:3000/</li>
  </ol>
  `)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/NyA/:nombre/:apellido', (req, res) => {
    const name = req.params.nombre;
    const lastName = req.params.apellido
    res.send(`<p>Hola ${name} ${lastName} 👋</p>`)
})

app.get('/div/:divisor/:dividendo', (req, res) => {
    const divisor = Number(req.params.divisor)
    const dividendo = Number(req.params.dividendo)
    const resultado = Number(divisor / dividendo);
    
    res.send(`<p>el resultado de la division de: ${divisor} / ${dividendo} = ${resultado}</p>`)
})