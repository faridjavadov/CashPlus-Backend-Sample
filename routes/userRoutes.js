import express from 'express'
import { userController } from '../controllers/userController.js';

export const userRoutes = express.Router();

userRoutes.get('/',userController.getData)
userRoutes.post('/login',userController.login)
userRoutes.post('/register',userController.register)
userRoutes.post('/confirmcode',userController.userConfirm)