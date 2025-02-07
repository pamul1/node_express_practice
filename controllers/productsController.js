import { db } from "../cn.js"

export const getProduct = async  (req, res) => {

    const sql = 'select * from products'
    const result = await db.query(sql)
    res.status(200).json(result)

}

export const getProductId = async (req, res) => {

    const product_id = req.params.id
    const sql = `select * from products where product_id = ${product_id}`
    const result = await db.query(sql)
    res.json(result)
}

export const postProduct = async (req, res) => {

    const tmp = req.body
    const str = 'insert into products (name, description, price, stock) values ($1, $2, $3, $4)'
    const arr = [tmp.name, tmp.description, tmp.price, tmp.stock]
    const result = await db.query(str, arr)
    res.status(200).json({ message: "Product Created" })

}

export const putProduct = async (req, res) => {
    const product_id = req.params.id
    const tmp = req.body
    const arr = [tmp.name, tmp.description, tmp.price, tmp.stock, product_id]

    const sql = ` update products
                 set name = $1, 
                    description = $2,
                    price = $3,
                    stock = $4 
                    where product_id= $5`

    const resul = db.query(sql, arr)

    res.json({ message: "Product Updated" })

}

export const deleteProduct = async (req, res) => {

    const product_id = req.params.id
    const sql = `delete from products where product_id = $1`
    const arr = [product_id]

    const resul = await db.query(sql, arr)

    res.json({ message: "Product Deleted" })

}