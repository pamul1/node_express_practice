import { db } from "../cn.js"

export const userGet = async (req, res) => {
    const sql = 'select * from users'
    const result = await db.query(sql)
    res.status(200).json(result)

}

export const userGetId = async (req, res) => {

    const user_id = req.params.id
    const sql = `select * from users where user_id = ${user_id}`
    const result = await db.query(sql)
    res.json(result)
}

export const userPost =  async (req, res) => {

    const tmp = req.body
    const str = 'insert into users (name, email) values ($1, $2)'
    const arr = [tmp.name, tmp.email]
    const result = await db.query(str, arr)
    res.status(200).json({ message: "User Created" })

}

export const userPut = async (req, res) => {
    const user_id = req.params.id
    const tmp = req.body
    const arr = [tmp.name, tmp.email, user_id]

    const sql = ` update users 
                 set name = $1, 
                        email = $2 
                    where user_id= $3`

    const resul = db.query(sql, arr)

    res.json({ message: "User Updated" })

}

export const userDelete = async (req, res) => {

    const user_id = req.params.id
    const sql = `delete from users where user_id = $1`
    const arr = [user_id]

    const resul = await db.query(sql, arr)

    res.json({ message: "User Deleted" })

}