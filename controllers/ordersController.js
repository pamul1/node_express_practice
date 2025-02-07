import { db } from "../cn.js"

export const getOrder = async  (req, res) => {

    const sql = 'select * from orders'
    const result = await db.query(sql)
    res.status(200).json(result)

}

export const getOrderId = async (req, res) => {

    const order_id = req.params.id
    const sql = `select * from orders where order_id = ${order_id}`
    const result = await db.query(sql)
    res.json(result)
}

export const postOrder = async (req, res) => {

    const tmp = req.body
    const str = 'insert into orders (order_date, status, user_id) values ($1, $2, $3)'
    const arr = [tmp.order_date, tmp.status, tmp.user_id]
    const result = await db.query(str, arr)
    res.status(200).json({ message: "Order Created" })

}

export const putOrder =  async (req, res) => {
    const order_id = req.params.id
    const tmp = req.body
    const arr = [tmp.order_date, tmp.status, tmp.user_id, order_id]

    const sql = ` update orders 
                 set order_date = $1, 
                     status = $2,
                     user_id = $3
                    where order_id= $4`

    const resul = db.query(sql, arr)

    res.json({ message: "Order Updated" })

}

export const deleteOrder = async (req, res) => {

    const order_id = req.params.id
    const sql = `delete from orders where order_id = $1`
    const arr = [order_id]

    const resul = await db.query(sql, arr)

    res.json({ message: "Order Deleted" })

}

export const getDetails = async  (req, res)=> {
    const order_id = req.params.order_id
    const sql = `select a.detail_id, 
                        a.order_id,
                        a.product_id,
                        a.quantity,
                        a.price,
                        b.name as product_name 
                from details a 
                inner join products b 
                on a.product_id = b.product_id
                where order_id = ${order_id}`

    const result = await db.query(sql)
    res.status(200).json(result)

}

export const postDetail = async (req, res) => {

    const order_id = req.params.order_id
    const tmp = req.body
    const str = 'insert into details (order_id, product_id, quantity, price) values ($1, $2, $3, $4)'
    const arr = [order_id, tmp.product_id, tmp.quantity, tmp.price]
    const result = await db.query(str, arr)
    res.status(200).json({ message: "Detail Created" })

}

export const putDetail = async (req, res) => {

    const detail_id = req.params.detail_id
    const tmp = req.body
    const arr = [ tmp.product_id, tmp.quantity, tmp.price, detail_id]

    const sql = ` update details
                 set  product_id = $1,
                     quantity = $2,
                     price = $3
                    where detail_id= $4`

    const resul = db.query(sql, arr)

    res.json({ message: "Detail Updated" })

}

export const deleteDetail = async (req, res) => {

    const detail_id = req.params.detail_id
    const sql = `delete from details where detail_id = $1`
    const arr = [detail_id]

    const resul = await db.query(sql, arr)

    res.json({ message: "Detail Deleted" })

}