import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { clerkMiddleware, requireAuth } from '@clerk/express'
import aiRouter from './routes/aiRoutes.js';
import connectCloudinary from './configs/cloudinary.js';
import userRouter from './routes/userRoutes.js';



const app = express()

await connectCloudinary()

//these are called middlewares
app.use(cors())
app.use(express.json())
app.use(clerkMiddleware()) //all req will be passed using this and with auth we ll get user data

app.get('/', (req,res)=>res.send('Server is live...'))

app.use(requireAuth())

app.use('/api/ai', aiRouter)
app.use('/api/user', userRouter)

const PORT = process.env.PORT || 3000;

//start backend server app on port 3000
app.listen(PORT, ()=>{
    console.log('Server is running on port', PORT);  
})