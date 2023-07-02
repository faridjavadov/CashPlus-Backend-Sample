import express from 'express'
import { ConnectMongo } from './config/db.js';
import { userRoutes } from './routes/userRoutes.js';

const app = express();

app.use(express.json())
ConnectMongo();


app.use('/api/auth',userRoutes)
app.listen(8080,()=>{
    console.log("Server Running");
})