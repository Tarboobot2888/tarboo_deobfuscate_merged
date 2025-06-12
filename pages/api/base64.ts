import type { NextApiRequest, NextApiResponse } from 'next'
import { deobfuscate } from '../../lib/deobfuscators/base64'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }
  const { code } = req.body
  if (!code || typeof code !== 'string') {
    return res.status(400).json({ error: 'Invalid code input' })
  }
  const result = deobfuscate(code)
  res.status(200).json({ result })
}
