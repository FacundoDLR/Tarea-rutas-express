const express = require('express')
const app = express()
const port = 3000

const cosas = [
    {
        id:1,
        articulo: "Auriculares",
        marca: "Honeysound",
        precio: "$700",
    },
    {
        id:2,
        articulo: "Lentes de sol",
        marca: "sunnybreak",
        precio: "$1200",
    },
    {
        id:3,
        articulo: "Toallon",
        marca: "suavecito",
        precio: "$800",
    },
    {
        id:4,
        articulo: "Router-Wifi",
        marca: "conecctify",
        precio: "$3000",
    },
    {
        id:5,
        articulo: "Equipo de sonido 5.1",
        marca: "elctrobass",
        precio: "$25000",
    },
    {
        id:6,
        articulo: "Laptop",
        marca: "allinONE",
        precio: "$10000",
    },
]

app.get('/', (req, res) => {
  res.send(`
  <h2>Tarea de rutas con express</h2>

  <h4>instrucciones de uso de rutas</h4>
  <ul>
  <li>Primer ruta: intercambiar las palabras "nombre y "apellido" por los que usted desee.</li>
  <li>Segunda ruta: intercambiar las palabras "divisor y "dividendo" por los numeros que usted desee.</li>
  <li>Tercer ruta:Nos traera una lista de cosas en formato JSON</li>
  <li>Cuarta ruta:intercambiar la palabra "nombre" por un articulo de la lista cosas para buscarlo individualmente</li>
  <li>Quinta ruta:</li>
  </ul>

  <h4>Lista de rutas con formato de uso</h4>
  <ol>
  <li>http://localhost:3000/NyA/nombre/apellido</li>
  <li>http://localhost:3000/div/:divisor/:dividendo</li>
  <li>http://localhost:3000/cosas</li>
  <li>http://localhost:3000/cosas/:nombre</li>
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

    if(dividendo === 0){
        res.json({
            error: "NO se puede dividir por cero"
        })
    }else{
        res.json({
            resultado: resultado
        })
    }
    res.send(`<p>el resultado de la division de: ${divisor} / ${dividendo} = ${resultado}</p>`)
})

app.get('/cosas', (req, res) => {
    
    res.json(cosas)
})

app.get('/cosas/:articulo', (req, res) => {
    const articulo = req.params.articulo;
    const cosa = cosas.find((cosa) => cosa.articulo.toLowerCase() === articulo.toLowerCase());

    if(cosa){
        res.status(200).json({
            cosa: cosa,
            statusCode: 200,
            errorMessage: null,
        });
    }else{
        res.status(404).json({
            cosa: null,
            statusCode: 404,
            errorMessage: "Recurso NO encontrado",
        })
    }
});