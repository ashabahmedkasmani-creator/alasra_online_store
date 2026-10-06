'use client'
import { useState } from 'react'
import ProductCard from './ProductCard'
import { CATEGORIES, PRODUCTS } from '../lib/data'
export default function Featured() {
  const [cat, setCat] = useState('All')
  const list = PRODUCTS.filter((p) => cat === 'All' || p.cat === cat).slice(0, 8)
  return (
    <section className="sec">
      <div className="center"><span className="kick">Our selection</span><h2>Fresh from our shelves</h2></div>
      <div className="chips mid">{CATEGORIES.map((c) => <button key={c} className={c === cat ? 'on' : ''} onClick={() => setCat(c)}>{c}</button>)}</div>
      <div className="pgrid">{list.map((p) => <ProductCard key={p.id} p={p} />)}</div>
    </section>
  )
}
