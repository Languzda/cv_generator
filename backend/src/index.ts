import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import resumeRouter from './routes/resume'
dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello to the CV generator!')
})

app.use((req, res, next) => {
    console.log('Request:', req.method, req.path)
    next()
})

app.use('/resume', resumeRouter)

app.use((err: any, req: any, res: any, next: any) => {
    console.error(err.stack)
    res.status(500).json({ error: 'Something went wrong!' })
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
