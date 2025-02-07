import express from 'express'
const app = express()
app.use(express.json())
import { users } from './routes/routeUsers.js'
import { products } from './routes/routeProducts.js'
import { orders } from './routes/routeOrders.js'

app.use(users)
app.use(products)
app.use(orders)

app.listen(3000)