
import express from 'express'
import { createBook, getBooks, updateBook, deleteBook } from '../controllers/booksController.js'
import { authenticate } from '../middleware/auth.js'

const router = express.Router()

router.post('/', authenticate, createBook)
router.get('/', authenticate, getBooks)
router.put('/:id', authenticate, updateBook)
router.delete('/:id', authenticate, deleteBook)

export default router
