
import { supabase } from '../services/supabase.js'

export const authenticate = async (req, res, next) => {
  const token = req.headers.authorization?.replace('Bearer ', '')

  if (!token) return res.status(401).json({ error: 'Token não enviado' })

  const { data, error } = await supabase.auth.getUser(token)

  if (error || !data.user) {
    return res.status(401).json({ error: 'Usuário não autenticado' })
  }

  req.user = data.user
  next()
}
