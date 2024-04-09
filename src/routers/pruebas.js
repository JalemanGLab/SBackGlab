import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
   res.send('Estoy en la ruta prueba metodo get')
})

export default router
