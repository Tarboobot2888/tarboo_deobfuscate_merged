import dynamic from 'next/dynamic'
import Layout from '../components/Layout'
import { useState } from 'react'
import { Button } from '../components/ui/button'

export default function DeobfuscatePage() {
  const [code, setCode] = useState('')
  const [output, setOutput] = useState('')

  async function handleSubmit() {
    const res = await fetch('/api/deobfuscate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code }),
    })
    const data = await res.json()
    setOutput(data.result || data.error || '')
  }

  const Editor = dynamic(() => import('../components/SmartEditor'), { ssr: false })

  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-4">أداة فك التشفير</h1>
      <Editor code={code} setCode={setCode} />
      <Button onClick={handleSubmit} className="mt-4">فك التشفير</Button>
      {output && <pre className="whitespace-pre-wrap mt-4">{output}</pre>}
    </Layout>
  )
}
