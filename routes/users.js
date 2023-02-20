import express from 'express'
 const router = express.Router();
 
import { patchUser, deletUser, addUser, getUsers, getUser } from '../controllers/users.js';





  router.get('/', getUser)

  router.post('/', addUser)

  router.get('/:id', getUsers)
 
  router.delete('/:id', deletUser)

  router.patch('/:id', patchUser )

export default router;