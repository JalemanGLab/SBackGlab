import express from 'express'
const app = express()
app.get('/', (req, res) => {
   res.send('hola semillero')
})
const port = process.env.PORT || 3000;
app.listen(port, () => {
   console.log(`servidor corriendo en el puerto ${port} `)
})
