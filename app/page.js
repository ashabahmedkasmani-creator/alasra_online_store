import Link from 'next/link'
import Hero from '../components/Hero'
import Featured from '../components/Featured'
import HScroll from '../components/HScroll'
import Cinema from '../components/Cinema'
import Shelf from '../components/Shelf'
import Img from '../components/Img'
import { PRODUCTS, CATEGORIES } from '../lib/data'
const CATS = CATEGORIES.slice(1, 5).map((c) => { const l = PRODUCTS.filter((p) => p.cat === c); return [c, l.length + ' products', l[0].image] })
const TRUST = [['Free delivery', 'On orders over PKR 10,000'], ['Cash on delivery', 'Or bank transfer'], ['Track your order', 'Real-time updates'], ['Always here', 'Mon–Sat, 11:00am–8:30pm']]
const TICK = 'ORIGINAL ✦ DAILY ESSENTIALS ✦ FAST DELIVERY ✦ CASH ON DELIVERY ✦ DELIVERED ACROSS PAKISTAN ✦ '
export default function Home() {
  const two = PRODUCTS.slice(0, 2), strip = PRODUCTS.slice(0, 12)
  return (
    <>
      <Hero />
      <section className="trust">{TRUST.map(([a, b]) => <div key={a}><b>{a}</b><span>{b}</span></div>)}</section>
      <section className="sec">
        <div className="center"><span className="kick">Shop by category</span><h2>Find what you need</h2></div>
        <div className="cats">{CATS.map(([c, d, img]) => (
          <Link key={c} href={'/shop?cat=' + encodeURIComponent(c)} className="cat"><Img src={img} alt={c} /><div><h3>{c}</h3><p>{d}</p></div></Link>))}
        </div>
      </section>
      <Cinema />
      <Featured />
      <section className="obnd">
        <div className="obt"><span className="kick w">Why Al-Asra</span><h2>Original products you can trust.</h2><p>Every item is checked before it ships from Karachi to your door.</p><Link className="btn white" href="/shop">Browse the shop</Link></div>
        <div className="obv">{two.map((p, n) => <div key={p.id} className={'ob ob' + n}><Img src={p.image} alt={p.name} /></div>)}</div>
      </section>
      <HScroll />
      <Shelf />
      <div className="marquee"><div>{TICK.repeat(6)}</div></div>
      <section className="pmq"><div>{Array.from({ length: 2 * Math.ceil(10 / strip.length) }, () => strip).flat().map((p, i) => <Link key={i} href={'/product/' + p.slug}><img src={p.image} alt={p.name} /></Link>)}</div></section>
    </>
  )
}
