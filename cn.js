const pg = require('pg-promise')
const pgc = pg()

const str = 'postgresql://neondb_owner:npg_rQxaD0YFp7He@ep-black-scene-a5j6rgvq-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require'

const db = pgc(str)

db.connect()
    .then(() => {
        console.log("Success Connection")
    })
    .catch((err) => {
        console.log(` Error Connection ${err} `)
    })

exports.default = db