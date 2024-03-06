import express from 'express'

import userRouterHandler from './user.route'

const router = express.Router()

router.use('/users', userRouterHandler)

export default router
