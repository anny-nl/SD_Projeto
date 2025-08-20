
import express from 'express'
import dotenv from 'dotenv'
import booksRoutes from './routes/books.js'

dotenv.config()
const app = express()

app.use(express.json())
app.use('/books', booksRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))
