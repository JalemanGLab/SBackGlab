import express from 'express'
import prueba from './routers/pruebas.js'
const app = express()
app.use('/prueba', prueba)
app.get('/', (req, res) => {
   let result = {
      appname: "ApiGlab",
      version: "1.0.0",
      developers: ["Gabriela", "Juanes", "Javi", "Sebas"],
      description: "Estamos crando la API en el semillero aplicando los conocimientos que hemos adquirido en la clase del día lunes 08/04"
   }
   res.send(result)
})
const port = process.env.PORT || 3000
app.listen(port, () => {
   console.log(`servidor corriendo en el puerto ${port} `)
})
