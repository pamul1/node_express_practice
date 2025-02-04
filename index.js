const express = require('express')
const app = express()
app.use(express.json())
const db = require('./cn.js')


app.get('/users', async function (req, res) {

    const sql = 'select * from users'
    const result = await db.default.query(sql)
    res.status(200).json(result)

})

app.get('/users/:id', async (req, res)=>{
    
    const user_id = req.params.id
    const sql = `select * from users where user_id = ${user_id}`
    const result = await db.default.query(sql)
    res.json(result)
})

app.post('/users', async (req, res) => {

    const tmp = req.body
    const str = 'insert into users (name, email) values ($1, $2)'
    const arr = [tmp.name, tmp.email]
    const result = await db.default.query(str, arr)
    res.status(200).json({ message: "User Created" })

})

app.put('/users/:id', async (req, res) => {
    const user_id = req.params.id
    const tmp = req.body
    const arr = [tmp.name, tmp.email, user_id]

    const sql = ` update users 
                 set name = $1, 
                        email = $2 
                    where user_id= $3`

    const resul = db.default.query(sql, arr)

    res.json({ message: "User Updated" })

})

app.delete('/users/:id', async (req, res) => {

    const user_id = req.params.id
    const sql = `delete from users where user_id = $1`
    const arr = [user_id]

    const resul = await db.default.query(sql, arr)

    res.json({ message: "User Deleted" })

})


app.get('/products', async function (req, res) {

    const sql = 'select * from products'
    const result = await db.default.query(sql)
    res.status(200).json(result)

})

app.get('/products/:id', async (req, res)=>{
    
    const product_id = req.params.id
    const sql = `select * from products where product_id = ${product_id}`
    const result = await db.default.query(sql)
    res.json(result)
})

app.post('/products', async (req, res) => {

    const tmp = req.body
    const str = 'insert into products (name, description, price, stock) values ($1, $2, $3, $4)'
    const arr = [tmp.name, tmp.description, tmp.price, tmp.stock]
    const result = await db.default.query(str, arr)
    res.status(200).json({ message: "Product Created" })

})

app.put('/products/:id', async (req, res) => {
    const product_id = req.params.id
    const tmp = req.body
    const arr = [tmp.name, tmp.description, tmp.price, tmp.stock, product_id]

    const sql = ` update products
                 set name = $1, 
                    description = $2,
                    price = $3,
                    stock = $4 
                    where product_id= $5`

    const resul = db.default.query(sql, arr)

    res.json({ message: "Product Updated" })

})

app.delete('/products/:id', async (req, res) => {

    const product_id = req.params.id
    const sql = `delete from products where product_id = $1`
    const arr = [product_id]

    const resul = await db.default.query(sql, arr)

    res.json({ message: "Product Deleted" })

})


app.get('/orders', async function (req, res) {

    const sql = 'select * from orders'
    const result = await db.default.query(sql)
    res.status(200).json(result)

})

app.get('/orders/:id', async (req, res)=>{
    
    const user_id = req.params.id
    const sql = `select * from orders where order_id = ${order_id}`
    const result = await db.default.query(sql)
    res.json(result)
})

app.post('/orders', async (req, res) => {

    const tmp = req.body
    const str = 'insert into orders (date, status) values ($1, $2)'
    const arr = [tmp.date, tmp.status]
    const result = await db.default.query(str, arr)
    res.status(200).json({ message: "Order Created" })

})

app.put('/orders/:id', async (req, res) => {
    const user_id = req.params.id
    const tmp = req.body
    const arr = [tmp.date, tmp.status, order_id]

    const sql = ` update orders 
                 set date = $1, 
                     status = $2 
                    where order_id= $3`

    const resul = db.default.query(sql, arr)

    res.json({ message: "Order Updated" })

})

app.delete('/orders/:id', async (req, res) => {

    const order_id = req.params.id
    const sql = `delete from orders where order_id = $1`
    const arr = [order_id]

    const resul = await db.default.query(sql, arr)

    res.json({ message: "Order Deleted" })

})


app.listen(3000)