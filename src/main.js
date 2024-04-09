import express from 'express'
import prueba from './routers/pruebas.js'
const app = express()

app.use('/prueba', prueba)
app.get('/', (req, res) => {
   res.send('hola semillero')
})
const port = process.env.PORT || 3000
app.listen(port, () => {
   console.log(`servidor corriendo en el puerto ${port} `)
})
