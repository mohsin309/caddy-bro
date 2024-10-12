'use client'

import { useState } from 'react'

export default function LinkForm() {
  const [url, setUrl] = useState('')
  const [customDomain, setCustomDomain] = useState('')
  const [shortUrl, setShortUrl] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch('/api/shorten', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url, customDomain }),
    })
    const data = await res.json()
    setShortUrl(`https://${data.customDomain}/${data.shortCode}`)
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL to shorten"
        required
        className="p-2 border rounded mr-2"
      />
      <input
        type="text"
        value={customDomain}
        onChange={(e) => setCustomDomain(e.target.value)}
        placeholder="Custom domain (optional)"
        className="p-2 border rounded mr-2"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">Shorten</button>
      {shortUrl && <p className="mt-2">Shortened URL: {shortUrl}</p>}
    </form>
  )
}