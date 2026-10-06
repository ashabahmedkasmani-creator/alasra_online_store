'use client'
import { useState } from 'react'
import { PRODUCTS } from '../../lib/data'
const FILES = ['/logo.png', '/images/hero-bg.jpg', '/images/about.jpg', '/images/cat-1.jpg', '/images/cat-2.jpg', '/images/cat-3.jpg', '/images/insta-1.jpg', '/images/products/demo-olive-oil.png', ...PRODUCTS.map((p) => p.image).filter(Boolean)]
function Row({ src }) {
  const [s, setS] = useState('loading...')
  return (
    <div style={{ display: 'flex', gap: 14, alignItems: 'center', padding: 8, borderBottom: '1px solid #ddd' }}>
      <img src={src} alt="" width={64} height={64} style={{ objectFit: 'contain', background: '#eee' }} onLoad={() => setS('OK')} onError={() => setS('FAIL - file not found at this path')} />
      <code style={{ flex: 1 }}>{src}</code><b style={{ color: s === 'OK' ? 'green' : s === 'loading...' ? '#999' : 'red' }}>{s}</b>
    </div>
  )
}
export default function Page() {
  return (
    <section className="sec">
      <h1 className="ptitle">Image check</h1>
      <p style={{ marginBottom: 16 }}>Products loaded: <b>{PRODUCTS.length}</b>. Every line below should say OK. Send me a screenshot of this page.</p>
      {[...new Set(FILES)].map((f) => <Row key={f} src={f} />)}
    </section>
  )
}
