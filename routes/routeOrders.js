import express from 'express'
export const orders = express()
orders.use(express.json())
import { getOrder , getOrderId, postOrder, putOrder, deleteOrder, 
        getDetails, postDetail, putDetail, deleteDetail
 } from '../controllers/ordersController.js'

orders.get('/orders', getOrder)

orders.get('/orders/:id', getOrderId)

orders.post('/orders', postOrder)

orders.put('/orders/:id',putOrder)

orders.delete('/orders/:id', deleteOrder)


orders.get('/orders/:order_id/details', getDetails)

orders.post('/orders/:order_id/details', postDetail)

orders.put('/orders/:order_id/details/:detail_id', putDetail)

orders.delete('/orders/:order_id/details/:detail_id', deleteDetail)