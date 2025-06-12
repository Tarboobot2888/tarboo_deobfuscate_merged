import type { NextApiRequest, NextApiResponse } from 'next';
 5aijwv-codex/update-project-name-and-restructure-site
import { runDeobfuscateLocal } from '../../lib/tarboo-wrapper';

import { deobfuscateLocal } from '../../lib/tarboo-wrapper';
 main

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { code } = req.body;
  if (!code) {
    return res.status(400).json({ error: 'No code provided' });
  }

  try {
    const decoded = await runDeobfuscateLocal(code);
    res.status(200).json({ decoded });
  } catch (error) {
    res.status(500).json({ error: 'Error during deobfuscation' });
  }
}