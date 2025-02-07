import express from 'express'
export const users = express()
users.use(express.json())
import { userGet , userGetId , userPost, userPut, userDelete} from '../controllers/usersController.js'

users.get('/users', userGet)

users.get('/users/:id',userGetId )

users.post('/users', userPost)

users.put('/users/:id', userPut )

users.delete('/users/:id',userDelete )