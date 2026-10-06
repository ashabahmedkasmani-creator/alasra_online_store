// Connect your backend here. Return { ok: true, id } on success.
export async function placeOrder({ items, total, form }) {
  // const r = await fetch('/api/orders', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({ items, total, form }) })
  // return await r.json()
  return { ok: true, id: 'AS' + Date.now().toString().slice(-6) }
}
