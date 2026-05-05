import Link from 'next/link'
import {
  ShieldCheck,
  CreditCard,
  Database,
  Rocket,
  Code2,
  Zap,
  Check,
  ArrowRight,
} from 'lucide-react'

const FROST = 'rgba(214,235,253,0.19)'

const features = [
  {
    icon: ShieldCheck,
    title: 'Authentication',
    description:
      'Email/password auth with Supabase. Sessions, confirmation emails, and password reset — all wired up.',
    accent: '#11ff99',
    accentBg: 'rgba(17,255,153,0.07)',
  },
  {
    icon: CreditCard,
    title: 'Stripe Billing',
    description:
      'Subscription billing with webhook signature verification and automatic status syncing to your database.',
    accent: '#ff801f',
    accentBg: 'rgba(255,128,31,0.07)',
  },
  {
    icon: Database,
    title: 'Postgres + RLS',
    description:
      'Supabase Postgres with row-level security and column-level grants enforced at the database layer.',
    accent: '#3b9eff',
    accentBg: 'rgba(59,158,255,0.07)',
  },
  {
    icon: Rocket,
    title: 'Deploy to Vercel',
    description:
      'Next.js 15 App Router, Server Components, and edge-ready API routes. One command to ship.',
    accent: '#ff801f',
    accentBg: 'rgba(255,128,31,0.07)',
  },
  {
    icon: Code2,
    title: 'Fully Typed',
    description:
      'TypeScript from database queries to UI components. Catch bugs before they reach production.',
    accent: '#3b9eff',
    accentBg: 'rgba(59,158,255,0.07)',
  },
  {
    icon: Zap,
    title: 'Security Audited',
    description:
      'RLS enforced, webhooks signature-checked, server-only secrets verified. Production from day one.',
    accent: '#11ff99',
    accentBg: 'rgba(17,255,153,0.07)',
  },
]

const pricingFeatures = [
  'Unlimited access',
  'Priority support',
  'All future features',
  'Cancel any time',
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-[#f0f0f0] flex flex-col">
      {/* ── Navbar ──────────────────────────────────────────────────── */}
      <header
        className="sticky top-0 z-50 flex items-center justify-between h-14 px-6 sm:px-10 bg-black/80 backdrop-blur-md"
        style={{ borderBottom: `1px solid ${FROST}` }}
      >
        <Link href="/" className="flex items-center gap-2.5">
          <div className="size-5 rounded-sm bg-[#f0f0f0]" />
          <span className="text-sm font-medium tracking-tight">LaunchKit</span>
        </Link>

        <nav className="flex items-center gap-1">
          <Link
            href="/login"
            className="px-4 py-1.5 rounded-full text-sm text-[#a1a4a5] hover:text-[#f0f0f0] transition-colors"
          >
            Sign in
          </Link>
          <Link
            href="/signup"
            className="px-4 py-1.5 rounded-full text-sm bg-white text-black font-medium hover:bg-[#f0f0f0] transition-colors"
          >
            Get started
          </Link>
        </nav>
      </header>

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="flex flex-col items-center text-center px-6 pt-28 pb-28 sm:pt-36 sm:pb-36">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs text-[#a1a4a5] mb-8"
          style={{ border: `1px solid ${FROST}` }}
        >
          <span className="size-1.5 rounded-full bg-[#11ff99]" />
          Open source · Next.js 15 · Supabase · Stripe
        </div>

        {/* Headline — Playfair Display at display scale */}
        <h1 className="font-heading text-[3.6rem] sm:text-[5.5rem] leading-none tracking-[-0.02em] text-[#f0f0f0] max-w-4xl mb-6">
          Ship your SaaS in days,{' '}
          <span className="text-[#464a4d]">not months.</span>
        </h1>

        {/* Sub */}
        <p className="text-lg text-[#a1a4a5] max-w-md mb-10 leading-relaxed">
          A production-ready starter with authentication, subscription payments,
          and a secure database already wired up and audited.
        </p>

        {/* CTAs */}
        <div className="flex items-center gap-3 flex-wrap justify-center">
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-sm font-medium hover:bg-[#f0f0f0] transition-colors"
          >
            Get started free <ArrowRight className="size-3.5" />
          </Link>
          <Link
            href="/login"
            className="inline-flex items-center px-5 py-2.5 rounded-full text-sm text-[#f0f0f0] hover:bg-white/[0.06] transition-colors"
            style={{ border: `1px solid ${FROST}` }}
          >
            Sign in
          </Link>
        </div>
      </section>

      {/* ── Divider ─────────────────────────────────────────────────── */}
      <div className="h-px" style={{ background: FROST }} />

      {/* ── Features ────────────────────────────────────────────────── */}
      <section className="px-6 sm:px-12 py-28 sm:py-36 max-w-6xl mx-auto w-full">
        <div className="mb-16 max-w-sm">
          <h2 className="font-heading text-[2.4rem] sm:text-[3.2rem] leading-tight tracking-[-0.02em] text-[#f0f0f0] mb-4">
            Everything to launch.
          </h2>
          <p className="text-[#a1a4a5] leading-relaxed">
            The hard parts are already built, tested, and secured. Just clone
            and ship.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ background: FROST }}>
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-black p-7 flex flex-col gap-4 hover:bg-[#080808] transition-colors"
            >
              <div
                className="size-9 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: f.accentBg }}
              >
                <f.icon className="size-4" style={{ color: f.accent }} />
              </div>
              <div>
                <h3 className="text-[#f0f0f0] font-medium mb-1.5">{f.title}</h3>
                <p className="text-[#a1a4a5] text-sm leading-relaxed">
                  {f.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Divider ─────────────────────────────────────────────────── */}
      <div className="h-px" style={{ background: FROST }} />

      {/* ── Pricing ─────────────────────────────────────────────────── */}
      <section className="px-6 py-28 sm:py-36 flex flex-col items-center">
        <h2 className="font-heading text-[2.4rem] sm:text-[3.2rem] leading-tight tracking-[-0.02em] text-[#f0f0f0] mb-3 text-center">
          Simple pricing.
        </h2>
        <p className="text-[#a1a4a5] mb-14 text-center">
          One plan. Everything included. No surprises.
        </p>

        <div
          className="w-full max-w-xs rounded-2xl p-8"
          style={{ border: `1px solid ${FROST}` }}
        >
          <p className="text-xs text-[#a1a4a5] uppercase tracking-widest mb-3">
            Pro
          </p>
          <div className="flex items-baseline gap-1.5 mb-7">
            <span className="text-5xl font-semibold text-[#f0f0f0] font-heading">
              $20
            </span>
            <span className="text-[#a1a4a5] text-sm">/month</span>
          </div>

          <ul className="space-y-3 mb-8">
            {pricingFeatures.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-sm text-[#f0f0f0]"
              >
                <Check className="size-4 shrink-0" style={{ color: '#11ff99' }} />
                {item}
              </li>
            ))}
          </ul>

          <Link
            href="/signup"
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-white text-black text-sm font-medium hover:bg-[#f0f0f0] transition-colors"
          >
            Get started <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────── */}
      <footer
        className="px-6 sm:px-12 py-8 mt-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#464a4d]"
        style={{ borderTop: `1px solid ${FROST}` }}
      >
        <div className="flex items-center gap-2">
          <div className="size-4 rounded-sm bg-[#464a4d]" />
          <span className="text-[#a1a4a5] font-medium">LaunchKit</span>
        </div>
        <p>Built with Next.js 15, Supabase, and Stripe.</p>
        <div className="flex items-center gap-5">
          <Link href="/login" className="hover:text-[#f0f0f0] transition-colors">
            Sign in
          </Link>
          <Link href="/signup" className="hover:text-[#f0f0f0] transition-colors">
            Sign up
          </Link>
        </div>
      </footer>
    </div>
  )
}
