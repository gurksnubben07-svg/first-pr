/* All copy below is original writing for the Cascade demo brand. */

export const NAV_LINKS = [
  { label: 'Platform', href: '#platform' },
  { label: 'Workflows', href: '#workflows' },
  { label: 'Why Cascade', href: '#proof' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export const PROMPT_SUGGESTIONS = [
  'Amber serum bottle on wet terrazzo, editorial morning light',
  'Five UGC-style hooks for a vitamin launch on TikTok',
  'Lifestyle scene: candle on a windowsill, rainy evening',
  'Recolour the whole sneaker line for the spring drop',
  '9:16 launch teaser cut from our latest pack shots',
  'Holiday gift-guide ads across the full coffee range',
]

export const HERO_CHIPS = [
  { label: 'Studio hero shot', prompt: 'Studio hero shot of our hero SKU on travertine, soft daylight' },
  { label: 'TikTok ad set', prompt: 'A set of five 9:16 paid social ads for our spring launch' },
  { label: 'Lifestyle scene', prompt: 'Lifestyle scene: product on a kitchen counter, golden hour' },
  { label: 'Batch recolour', prompt: 'Batch recolour every product image to the new palette' },
]

export const BRAND_WORDMARKS = [
  { name: 'NORD & CO', style: 'serif' },
  { name: 'botanica', style: 'low' },
  { name: 'Maison Fleur', style: 'serif-it' },
  { name: 'ATLAS SUPPLY', style: 'caps' },
  { name: 'feld', style: 'mono' },
  { name: 'Wellmore', style: 'round' },
  { name: 'KINDSKIN', style: 'caps-wide' },
  { name: 'Orange Rabbit', style: 'serif' },
]

export const FEATURES = [
  { icon: 'stack', title: 'Catalog ingest', desc: 'Pull product photos, variants and pack shots straight from your store, feed or drive.' },
  { icon: 'palette', title: 'Brand memory', desc: 'Lock in logos, colours, fonts and tone so every output leaves on-brand by default.' },
  { icon: 'camera', title: 'AI photoshoots', desc: 'Studio, lifestyle and campaign photography — without booking a single shoot.' },
  { icon: 'zap', title: 'Ad creatives', desc: 'Paid-social formats, offer graphics and PDP visuals generated inside your brand system.' },
  { icon: 'film', title: 'Motion & video', desc: 'Turn stills and scenes into scroll-stopping short-form video for every placement.' },
  { icon: 'layers', title: 'Batch edit', desc: 'One edit, applied everywhere — resize, recolour, translate or swap a product across a set.' },
  { icon: 'bot', title: 'Pilot agent', desc: 'Give Cascade a goal. It plans the run, generates, checks its own work and improves it.' },
  { icon: 'scissors', title: 'Layer editing', desc: 'Headlines, logos, CTAs and badges stay editable as real layers over every visual.' },
]

export const CHANNELS = ['Meta', 'TikTok Shop', 'Google / PMax', 'Shopify', 'Amazon', 'Klaviyo', 'Pinterest']

export const SHOWCASE = [
  {
    kicker: 'Step 01 — Onboard',
    title: 'Connect your catalog. <em>Capture your brand.</em>',
    body: 'Import products from your store or feed once. Cascade keeps pack details, variants and brand rules attached to every generation that follows.',
    img: '/assets/group.jpg',
    cta: 'Start free',
    overlay: { type: 'tokens', items: ['Brand kit synced', '214 SKUs imported', '.OTF fonts loaded'] },
  },
  {
    kicker: 'Step 02 — Create',
    title: 'Ads built around <em>your product.</em>',
    body: 'Generate on-brand ad variations from a product, a message and your rules — sized and ready for Meta, TikTok and everywhere else you sell.',
    img: '/assets/sneaker.jpg',
    overlay: { type: 'chips', items: ['1:1', '4:5', '9:16', '16:9'] },
  },
  {
    kicker: 'Step 03 — Scale',
    title: 'Edit a whole campaign <em>in one pass.</em>',
    body: 'Resize, recolour, translate or swap products across an entire set at once. The brief stays written once — the outputs multiply.',
    img: '/assets/spray.jpg',
    overlay: { type: 'toolbar' },
  },
  {
    kicker: 'Step 04 — Ship anywhere',
    title: 'Your AI assistant. <em>Cascade\u2019s engine.</em>',
    body: 'Kick off generations from your favourite AI chat and find every finished asset waiting for you in Cascade, organised by brand and campaign.',
    img: '/assets/candle.jpg',
    overlay: { type: 'chat', items: ['Make me 4 story ads for the candle drop', 'Done — 4 assets saved to “Autumn launch”'] },
  },
  {
    kicker: 'Step 05 — Refine',
    title: 'Control the final <em>five percent.</em>',
    body: 'Headlines, badges, logos and CTAs stay as controllable layers over your creative. No round-trips to a separate design tool.',
    img: '/assets/bag.jpg',
    overlay: { type: 'layers', items: ['Headline', 'Offer badge', 'Logo', 'CTA button'] },
  },
  {
    kicker: 'Step 06 — Grow',
    title: 'Many brands. <em>One creative system.</em>',
    body: 'Give each brand its own products, styles, references and workflows — all managed from one shared workspace your whole team can see.',
    img: '/assets/watch.jpg',
    overlay: { type: 'tokens', items: ['3 brand workspaces', '12 shared styles', '1 team'] },
  },
]

export const WORKFLOW_TABS = [
  { id: 'photoshoot', label: 'Photoshoot' },
  { id: 'image', label: 'Image' },
  { id: 'video', label: 'Video' },
  { id: 'ads', label: 'Ads' },
  { id: 'batch', label: 'Batch' },
  { id: 'edit', label: 'Edit' },
]

export const WORKFLOW_TILES = {
  photoshoot: [
    { img: '/assets/serum.jpg', label: 'Studio hero', tag: '1:1' },
    { img: '/assets/creamjar.jpg', label: 'Texture set', tag: '4:5' },
    { img: '/assets/perfume.jpg', label: 'Dune editorial', tag: '4:5' },
    { img: '/assets/group.jpg', label: 'Range lineup', tag: '16:9' },
    { img: '/assets/watch.jpg', label: 'Low-key macro', tag: '1:1' },
    { img: '/assets/candle.jpg', label: 'Home lifestyle', tag: '4:5' },
  ],
  image: [
    { img: '/assets/group.jpg', label: 'Campaign key visual', tag: '16:9' },
    { img: '/assets/bag.jpg', label: 'Editorial still', tag: '4:5' },
    { img: '/assets/serum.jpg', label: 'Pack shot', tag: '1:1' },
    { img: '/assets/watch.jpg', label: 'Detail macro', tag: '1:1' },
  ],
  video: [
    { img: '/assets/perfume.jpg', label: 'Launch teaser', tag: '0:08', video: true },
    { img: '/assets/candle.jpg', label: 'UGC cut', tag: '0:15', video: true },
    { img: '/assets/group.jpg', label: 'Range sizzle', tag: '0:12', video: true },
    { img: '/assets/sneaker.jpg', label: 'Drop loop', tag: '0:06', video: true },
  ],
  ads: [
    { img: '/assets/sneaker.jpg', label: 'Spring drop · Meta', tag: '4:5' },
    { img: '/assets/spray.jpg', label: 'Mist launch · TikTok', tag: '9:16' },
    { img: '/assets/coffee.jpg', label: 'Gift guide · PMax', tag: '1:1' },
    { img: '/assets/bag.jpg', label: 'Editorial · Pinterest', tag: '2:3' },
  ],
  batch: [
    { img: '/assets/creamjar.jpg', label: 'Recolour ×12', tag: 'done' },
    { img: '/assets/serum.jpg', label: 'Resize ×4', tag: 'done' },
    { img: '/assets/spray.jpg', label: 'Translate ×3', tag: 'running' },
    { img: '/assets/candle.jpg', label: 'Swap scene ×8', tag: 'queued' },
  ],
  edit: [
    { img: '/assets/bag.jpg', label: 'Scene swap', tag: 'compare', compare: true },
    { img: '/assets/serum.jpg', label: 'Layer pass', tag: 'layers' },
  ],
}

export const FIDELITY_POINTS = [
  { title: 'Product details stay true', desc: 'Labels, shapes, packaging and proportions hold to your references — generation after generation.' },
  { title: 'Brand rules carry through', desc: 'Your colours, type and visual style apply consistently across products, campaigns and channels.' },
  { title: 'Edit where it matters', desc: 'Add text, badges, logos and CTAs as controllable layers — no flatten-and-pray exports.' },
  { title: 'Review before it ships', desc: 'Approve, retry or refine with your team before a single asset leaves the workspace.' },
]

export const STATS = [
  { num: 8, suffix: '×', label: 'faster than traditional production cycles' },
  { num: 97, suffix: '%', label: 'of outputs pass brand review first time' },
  { num: 4, suffix: '×', label: 'more campaign assets shipped monthly' },
]

export const TESTIMONIALS = [
  {
    quote: 'We replaced a six-week shoot schedule with an afternoon in Cascade. The packaging came out pixel-true — which is where every other tool fell apart for us.',
    name: 'Maya Lindqvist',
    role: 'Creative Lead, Nord & Co',
  },
  {
    quote: 'Our paid social team tests four times the concepts now. The brand guardrails mean nothing off-brand ever makes it to review in the first place.',
    name: 'Daniel Okafor',
    role: 'Growth Director, Wellmore',
  },
  {
    quote: 'I refreshed imagery across 200 SKUs in a single weekend. PDP conversion started moving within days of the new shots going live.',
    name: 'Priya Raman',
    role: 'Founder, Kindskin',
  },
  {
    quote: 'It slots straight into our wider AI stack and still respects the brand system. That combination is genuinely rare.',
    name: 'Tomás Ferreira',
    role: 'Design Director, Maison Fleur',
  },
]

export const PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    blurb: 'For solo founders shipping their first campaigns.',
    monthly: 39,
    annual: 31,
    credits: '3,000 credits / month',
    features: [
      '1 seat + unlimited viewers',
      '2 active brand profiles',
      'Up to 300 images or 60 videos / month',
      'Full commercial usage rights',
      'Core photoshoot & ad workflows',
      'Email support',
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
    blurb: 'For teams producing content every single week.',
    monthly: 89,
    annual: 71,
    credits: '9,000 credits / month',
    popular: true,
    features: [
      '3 seats + unlimited viewers',
      '6 active brand profiles',
      'Up to 900 images or 180 videos / month',
      '10 bonus video runs included / month',
      'Batch edit & layer editing',
      'Create from your AI chat tools',
      'Priority email support',
    ],
  },
  {
    id: 'scale',
    name: 'Scale',
    blurb: 'For brands multiplying output across channels.',
    monthly: 219,
    annual: 175,
    credits: '24,000 credits / month',
    features: [
      '10 seats + unlimited viewers',
      '18 active brand profiles',
      'Up to 2,400 images or 480 videos / month',
      '30 bonus video runs included / month',
      'Pilot agent workflows',
      'Early access to new models',
      'Dedicated onboarding + priority support',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    blurb: 'For organisations with security and scale needs.',
    enterprise: true,
    features: [
      'Custom seats, brands & credit pools',
      'SSO, audit logs & admin controls',
      'Dedicated customer success manager',
      'Custom model training & SLAs',
    ],
  },
]

export const FAQS = [
  {
    q: 'Can Cascade learn my brand?',
    a: 'Yes. Point Cascade at your website or upload logos, fonts, colours and reference imagery, and it builds a brand profile that every generation follows automatically.',
  },
  {
    q: 'Does it work across my full product catalog?',
    a: 'Import from Shopify, a product feed or plain folders. Product details, variants and pack shots stay attached, so batch workflows can run across hundreds of SKUs at once.',
  },
  {
    q: 'Is Cascade only for photoshoots?',
    a: 'No — photoshoots, static ads, short-form video, batch edits and layered creative all run from the same workspace and the same brand profile.',
  },
  {
    q: 'How do credits work?',
    a: 'Every generation costs credits based on output type — images cost the least, video the most. Plans include a monthly allowance and you can top up any time; unused credits roll over for 60 days.',
  },
  {
    q: 'Can I edit the final creative?',
    a: 'Yes. Headlines, CTAs, logos and badges are stored as real layers, so you can adjust copy, swap elements or restyle without regenerating the image underneath.',
  },
  {
    q: 'Do you support channel formats?',
    a: 'Every asset can be rendered to 1:1, 4:5, 9:16, 16:9 and 2:3 presets tuned for Meta, TikTok, Google, Shopify, Amazon and email.',
  },
  {
    q: 'How many team members can I add?',
    a: 'Viewer seats are unlimited on every plan. Full seats depend on your tier, and you can add more at any time from workspace settings.',
  },
  {
    q: 'Where are you based?',
    a: 'Cascade is a remote-first company with team members across Europe and North America, and support coverage on both sides of the Atlantic.',
  },
]

export const FOOTER_COLS = [
  {
    title: 'Product',
    links: ['Photoshoots', 'Ad creatives', 'Motion & video', 'Batch edit', 'Layer editing', 'Pilot agent'],
  },
  {
    title: 'Company',
    links: ['About', 'Careers', 'Contact', 'Press kit'],
  },
  {
    title: 'Resources',
    links: ['Help centre', 'Changelog', 'Blog', 'Status'],
  },
  {
    title: 'Legal',
    links: ['Privacy', 'Terms', 'Security', 'DPA'],
  },
]

export const STUDIO_POOL = [
  '/assets/serum.jpg',
  '/assets/creamjar.jpg',
  '/assets/perfume.jpg',
  '/assets/candle.jpg',
  '/assets/coffee.jpg',
  '/assets/sneaker.jpg',
  '/assets/watch.jpg',
  '/assets/bag.jpg',
  '/assets/spray.jpg',
  '/assets/group.jpg',
]

export const STUDIO_MODES = [
  { id: 'photoshoot', label: 'Photoshoot', icon: 'camera' },
  { id: 'image', label: 'Image', icon: 'sparkle' },
  { id: 'ad', label: 'Ad', icon: 'zap' },
  { id: 'video', label: 'Video', icon: 'film' },
]

export const ASPECTS = [
  { id: '1:1', w: 1080, h: 1080 },
  { id: '4:5', w: 1080, h: 1350 },
  { id: '9:16', w: 1080, h: 1920 },
  { id: '16:9', w: 1920, h: 1080 },
]

export const GEN_STEPS = [
  'Reading your brand rules',
  'Composing the scene',
  'Rendering pixels',
  'Checking product fidelity',
  'Refining the details',
]
