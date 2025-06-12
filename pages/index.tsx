import { useState } from 'react'
import Layout from '../components/Layout'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'
import { Card } from '../components/ui/card'

export default function Page() {
  const [code, setCode] = useState('')
  const [result, setResult] = useState('')

  async function handleDeobfuscate() {
    const res = await fetch('/api/deobfuscate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code }),
    })
    const data = await res.json()
    setResult(data.result || data.error || '')
  }

  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-4">TARBOO DEOBFUSCATE JS</h1>
      <Card className="space-y-4">
        <Input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="أدخل الكود المشفر هنا"
        />
        <Button onClick={handleDeobfuscate}>فك التشفير</Button>
        {result && <pre className="whitespace-pre-wrap">{result}</pre>}
      </Card>
    </Layout>
  )
}
