import { useState } from 'react'
import Layout from '../components/Layout'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'
import { Card } from '../components/ui/card'

export default function Page() {
  const [code, setCode] = useState('')
  const [result, setResult] = useState('')
  const [algorithm, setAlgorithm] = useState('base64')

  async function handleDeobfuscate() {
    const res = await fetch(`/api/${algorithm}`, {
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
        <select
          className="border rounded p-2"
          value={algorithm}
          onChange={(e) => setAlgorithm(e.target.value)}
        >
          <option value="base64">Base64</option>
          <option value="eval">Eval Unpacker</option>
          <option value="humanify">Humanify</option>
        </select>
        <Button onClick={handleDeobfuscate}>فك التشفير</Button>
        {result && <pre className="whitespace-pre-wrap">{result}</pre>}
      </Card>
    </Layout>
  )
}
