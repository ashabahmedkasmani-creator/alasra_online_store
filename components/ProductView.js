'use client'
import { useState } from 'react'
import Img from './Img'
import ProductCard from './ProductCard'
import { useCart } from './Cart'
import { PRODUCTS, fmt } from '../lib/data'
export default function ProductView({ p }) {
  const { add } = useCart(); const [n, setN] = useState(1), [k, setK] = useState(0)
  const imgs = p.images?.length ? p.images : [p.image]
  const more = PRODUCTS.filter((x) => x.id !== p.id && x.cat === p.cat).slice(0, 4)
  return (
    <section className="sec">
      <div className="pdp">
        <div className="gal"><Img className="main" src={imgs[k]} color={p.color} alt={p.name} />
          {imgs.length > 1 && <div className="thumbs">{imgs.map((s, i) => <button key={i} className={i === k ? 'on' : ''} onClick={() => setK(i)}><Img src={s} alt="" /></button>)}</div>}</div>
        <div className="info">
          <small>{p.cat}</small><h1>{p.name}</h1>
          <p className="price">{fmt(p.price)}{p.oldPrice && <s>{fmt(p.oldPrice)}</s>}</p>
          <p className="desc">{p.desc}</p>
          <div className="buy"><div className="qty"><button onClick={() => setN(Math.max(1, n - 1))}>−</button><span>{n}</span><button onClick={() => setN(n + 1)}>+</button></div>
            <button className="btn" onClick={() => add(p, n)}>Add to bag</button></div>
          <ul className="perks"><li>Free delivery over PKR 10,000</li><li>Cash on delivery available</li><li>Original and imported</li></ul>
        </div>
      </div>
      {!!more.length && <><h2 className="mh">You may also like</h2><div className="pgrid">{more.map((x) => <ProductCard key={x.id} p={x} />)}</div></>}
    </section>
  )
}
