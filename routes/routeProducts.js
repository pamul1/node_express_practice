import express from 'express'
export const products = express()
products.use(express.json())
import { getProduct, getProductId, postProduct , putProduct, deleteProduct} from '../controllers/productsController.js' 

products.get('/products',getProduct )

products.get('/products/:id', getProductId)

products.post('/products', postProduct)

products.put('/products/:id',putProduct )

products.delete('/products/:id',deleteProduct )