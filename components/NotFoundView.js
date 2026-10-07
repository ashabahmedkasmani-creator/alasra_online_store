'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Img from './Img'
import { PRODUCTS } from '../lib/data'

// Al-Asra 404: full-viewport, no scroll. Reuses the global Header (nav) and brand tokens; everything else is scoped to html.nf.
export default function NotFoundView() {
  const stage = useRef(null)
  const p = PRODUCTS[0]
  useEffect(() => {
    const root = document.documentElement, prev = document.title
    document.title = '404 — Page Not Found | Al-Asra'
    root.classList.add('nf')
    // start the stage right under the (existing) announce bar + nav, whatever height they have
    const fit = () => {
      const h = document.querySelector('.nav'); if (!h || !stage.current) return
      stage.current.style.setProperty('--nft', Math.ceil(h.getBoundingClientRect().bottom) + 'px')
    }
    fit(); addEventListener('resize', fit); const t = setTimeout(fit, 400)
    // subtle desktop-only parallax (max ~12px)
    let raf = 0, tx = 0, ty = 0
    const fine = matchMedia('(hover:hover) and (pointer:fine)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches
    const mm = (e) => {
      tx = e.clientX / innerWidth - 0.5; ty = e.clientY / innerHeight - 0.5
      if (!raf) raf = requestAnimationFrame(() => { raf = 0; stage.current && (stage.current.style.setProperty('--mx', tx.toFixed(3)), stage.current.style.setProperty('--my', ty.toFixed(3))) })
    }
    if (fine) addEventListener('mousemove', mm)
    return () => { root.classList.remove('nf'); document.title = prev; removeEventListener('resize', fit); removeEventListener('mousemove', mm); clearTimeout(t); if (raf) cancelAnimationFrame(raf) }
  }, [])
  return (
    <section className="nf-stage" ref={stage} aria-labelledby="nf-title">
      <div className="nf-bg" aria-hidden="true" />
      <div className="nf-num" aria-hidden="true"><span>404</span></div>
      <div className="nf-vis">
        {p && <div className="nf-prod"><Img src={p.image} color={p.color} alt="" /><i className="nf-shadow" aria-hidden="true" /></div>}
      </div>
      <div className="nf-msg">
        <h1 id="nf-title">Looks like you&rsquo;ve wandered off the shelves.</h1>
        <p>Let&rsquo;s get you back to the store.</p>
        <div className="nf-cta">
          <Link className="btn" href="/">Back to Home</Link>
          <Link className="nf-sec" href="/shop">Continue Shopping</Link>
        </div>
      </div>
    </section>
  )
}
