import { supabase } from '../services/supabase.js'


export const createBook = async (req, res) => {
  const { titulo, autor, paginas, ano } = req.body

  const { data, error } = await supabase
    .from('books')
    .insert([{ titulo, autor, paginas, ano }])

  if (error) return res.status(400).json({ error: error.message })
  res.json({ message: 'Livro cadastrado com sucesso!', data })
}

export const getBooks = async (req, res) => {
  const { data, error } = await supabase.from('books').select('*')
  if (error) return res.status(400).json({ error: error.message })
  res.json(data)
}

export const updateBook = async (req, res) => {
  const { id } = req.params
  const { titulo, autor, paginas, ano } = req.body

  const { data, error } = await supabase
    .from('books')
    .update({ titulo, autor, paginas, ano })
    .eq('id', id)

  if (error) return res.status(400).json({ error: error.message })
  res.json({ message: 'Livro atualizado com sucesso!', data })
}

export const deleteBook = async (req, res) => {
  const { id } = req.params

  const { data, error } = await supabase.from('books').delete().eq('id', id)

  if (error) return res.status(400).json({ error: error.message })
  res.json({ message: 'Livro removido com sucesso!', data })
}
