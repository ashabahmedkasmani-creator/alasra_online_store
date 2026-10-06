# Al-Asra Store - multi-page Next.js store

    npm install
    npm run sync     # pulls ALL products + images from https://alasra.online (WooCommerce) into this project
    npm run dev

Pages: / , /shop , /product/[slug] , /cart , /checkout , /about , /contact , /track , /faq

## Your photos (put in public/images/)
hero-1.jpg hero-2.jpg hero-3.jpg (slider, wide 1920x900) | cat-1.jpg cat-2.jpg cat-3.jpg (categories, portrait) |
insta-1.jpg ... insta-6.jpg (square, from your Instagram) | about.jpg (wide)
Product photos are downloaded automatically by `npm run sync`. Missing photos show a neutral placeholder.

## Backend later
lib/checkout.js (placeOrder), app/track/page.js (tracking). Delivery fee: FEE in lib/data.js.

## v4 notes
- Hero = 4-stage scroll scene (components/Hero.js + Hero3D.js). Background switches orange <-> white per stage.
- Hero background video (optional): put your file at public/videos/hero.mp4. Hero image (optional): public/images/hero-bg.jpg
- Hero products: if >=3 products in lib/manual-products.js have a transparent PNG `image`, the 3D hero uses those photos automatically. Otherwise it shows the built-in glossy 3D bottles/jar.
- Loader: orange background, cart rides on the progress line (components/Loader.js, CSS block "v4" in app/globals.css)
