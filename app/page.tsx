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
  GitBranch,
} from 'lucide-react'

const FROST = 'rgba(214,235,253,0.19)'

const features = [
  {
    icon: ShieldCheck,
    title: 'Authentication',
    description:
      'Email/password auth with Supabase. Confirmation emails, password reset, and SSR-safe sessions out of the box.',
    accent: '#11ff99',
    accentBg: 'rgba(17,255,153,0.07)',
    tag: 'Supabase Auth',
  },
  {
    icon: CreditCard,
    title: 'Stripe Billing',
    description:
      'Subscription checkout, webhook signature verification, and automatic status syncing to your database.',
    accent: '#ff801f',
    accentBg: 'rgba(255,128,31,0.07)',
    tag: 'Stripe',
  },
  {
    icon: Database,
    title: 'Postgres + RLS',
    description:
      'Row-level security and column-level grants enforced at the database layer — not just in application code.',
    accent: '#3b9eff',
    accentBg: 'rgba(59,158,255,0.07)',
    tag: 'Supabase DB',
  },
  {
    icon: Rocket,
    title: 'Edge-ready',
    description:
      'Next.js 15 App Router with Server Components, streaming, and Vercel Edge Functions. Ships fast by default.',
    accent: '#ff801f',
    accentBg: 'rgba(255,128,31,0.07)',
    tag: 'Next.js 15',
  },
  {
    icon: Code2,
    title: 'Fully Typed',
    description:
      'End-to-end TypeScript from your database schema to your UI. Autocomplete everywhere, no runtime surprises.',
    accent: '#3b9eff',
    accentBg: 'rgba(59,158,255,0.07)',
    tag: 'TypeScript',
  },
  {
    icon: Zap,
    title: 'Security Audited',
    description:
      'RLS enforced, webhooks signature-checked, service role keys server-only. Production hardened from day one.',
    accent: '#11ff99',
    accentBg: 'rgba(17,255,153,0.07)',
    tag: 'Audited',
  },
]

const stack = [
  'Next.js 15',
  'Supabase',
  'Stripe',
  'Vercel',
  'TypeScript',
  'Tailwind CSS',
  'shadcn/ui',
]

const testimonials = [
  {
    quote:
      'Saved me at least two weeks of boilerplate. Auth, billing, and RLS all just worked on day one.',
    name: 'Jordan M.',
    role: 'Founder, Buildfast',
  },
  {
    quote:
      'The security audit baked into the template is what sold me. I didn\'t have to think about RLS or webhook verification.',
    name: 'Priya K.',
    role: 'Solo dev',
  },
  {
    quote:
      'Cloned it on a Friday, had a paying customer by Sunday. This is the only SaaS template worth using.',
    name: 'Sam R.',
    role: 'Indie hacker',
  },
]

const pricingFeatures = [
  'Unlimited users',
  'Stripe subscription billing',
  'Supabase Postgres + auth',
  'Row-level security (RLS)',
  'Vercel-ready deployment',
  'All future updates',
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
          <span className="text-sm font-semibold tracking-tight">LaunchKit</span>
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
      <section className="relative flex flex-col items-center text-center px-6 pt-24 pb-20 sm:pt-32 sm:pb-28 overflow-hidden">
        {/* Warm glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(255,128,31,0.07) 0%, transparent 100%)',
          }}
        />

        {/* Badge */}
        <div
          className="relative inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs text-[#a1a4a5] mb-8"
          style={{ border: `1px solid ${FROST}` }}
        >
          <span className="size-1.5 rounded-full bg-[#11ff99]" />
          Open source · MIT License · Free to clone
        </div>

        {/* Headline */}
        <h1 className="relative font-heading text-[3.2rem] sm:text-[5.5rem] leading-none tracking-[-0.02em] text-[#f0f0f0] max-w-4xl mb-6">
          The SaaS template
          <br />
          <span className="text-[#464a4d]">that ships.</span>
        </h1>

        <p className="relative text-lg text-[#a1a4a5] max-w-lg mb-10 leading-relaxed">
          Auth, billing, database, and security — all wired up and production-ready.
          Clone it. Brand it. Ship it.
        </p>

        {/* CTAs */}
        <div className="relative flex items-center gap-3 flex-wrap justify-center mb-16">
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-[#f0f0f0] transition-colors"
          >
            Start building free <ArrowRight className="size-3.5" />
          </Link>
          <Link
            href="https://github.com/alexleischow/my-saas-template"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm text-[#a1a4a5] hover:text-[#f0f0f0] hover:bg-white/[0.05] transition-colors"
            style={{ border: `1px solid ${FROST}` }}
          >
            <GitBranch className="size-3.5" />
            View on GitHub
          </Link>
        </div>

        {/* Terminal block */}
        <div
          className="relative w-full max-w-lg rounded-2xl overflow-hidden text-left"
          style={{ border: `1px solid ${FROST}` }}
        >
          <div
            className="flex items-center gap-1.5 px-4 py-3"
            style={{
              borderBottom: `1px solid ${FROST}`,
              background: 'rgba(255,255,255,0.02)',
            }}
          >
            <span className="size-2.5 rounded-full bg-[#ff5f57]" />
            <span className="size-2.5 rounded-full bg-[#febc2e]" />
            <span className="size-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-2 text-xs text-[#464a4d] font-mono">~ terminal</span>
          </div>
          <div className="p-5 font-mono text-sm space-y-2" style={{ background: 'rgba(255,255,255,0.01)' }}>
            <p>
              <span className="text-[#464a4d]">$ </span>
              <span className="text-[#11ff99]">git clone</span>
              <span className="text-[#f0f0f0]"> github.com/you/launchkit</span>
            </p>
            <p>
              <span className="text-[#464a4d]">$ </span>
              <span className="text-[#11ff99]">cp</span>
              <span className="text-[#f0f0f0]"> .env.example .env.local</span>
            </p>
            <p>
              <span className="text-[#464a4d]">$ </span>
              <span className="text-[#3b9eff]">vercel deploy</span>
              <span className="text-[#ff801f]"> --prod</span>
            </p>
            <p className="text-[#464a4d]">
              <span className="text-[#11ff99]">✓</span> Live in 60 seconds.
            </p>
          </div>
        </div>
      </section>

      {/* ── Stack pills ─────────────────────────────────────────────── */}
      <section className="px-6 py-14" style={{ borderTop: `1px solid ${FROST}` }}>
        <p className="text-xs text-[#464a4d] uppercase tracking-widest text-center mb-6">
          Built on the best stack
        </p>
        <div className="flex flex-wrap justify-center gap-2.5">
          {stack.map((tech) => (
            <span
              key={tech}
              className="px-4 py-1.5 rounded-full text-sm text-[#a1a4a5]"
              style={{ border: `1px solid ${FROST}` }}
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* ── Features ────────────────────────────────────────────────── */}
      <section
        className="px-6 sm:px-12 py-24 sm:py-32 max-w-6xl mx-auto w-full"
        style={{ borderTop: `1px solid ${FROST}` }}
      >
        <div className="mb-16 max-w-lg">
          <h2 className="font-heading text-[2.2rem] sm:text-[3rem] leading-tight tracking-[-0.02em] text-[#f0f0f0] mb-4">
            Everything to launch.
            <br />
            <span className="text-[#464a4d]">Nothing to figure out.</span>
          </h2>
          <p className="text-[#a1a4a5] leading-relaxed">
            The hard parts — auth, payments, database security — are already built,
            tested, and audited. You write the product, not the plumbing.
          </p>
        </div>

        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ background: FROST }}
        >
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-black p-8 flex flex-col gap-5 hover:bg-[#060606] transition-colors group"
            >
              <div className="flex items-start justify-between">
                <div
                  className="size-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: f.accentBg }}
                >
                  <f.icon className="size-5" style={{ color: f.accent }} />
                </div>
                <span
                  className="text-xs rounded-full px-2.5 py-0.5"
                  style={{ color: f.accent, border: `1px solid ${f.accentBg.replace('0.07', '0.2')}` }}
                >
                  {f.tag}
                </span>
              </div>
              <div>
                <h3 className="text-[#f0f0f0] font-medium text-base mb-2">{f.title}</h3>
                <p className="text-[#a1a4a5] text-sm leading-relaxed">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonials ────────────────────────────────────────────── */}
      <section
        className="px-6 sm:px-12 py-24 sm:py-32 max-w-6xl mx-auto w-full"
        style={{ borderTop: `1px solid ${FROST}` }}
      >
        <h2 className="font-heading text-[2.2rem] sm:text-[3rem] leading-tight tracking-[-0.02em] text-[#f0f0f0] mb-16 max-w-sm">
          Builders love it.
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl p-7 flex flex-col justify-between gap-6"
              style={{ border: `1px solid ${FROST}` }}
            >
              <p className="text-[#a1a4a5] text-sm leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="size-8 rounded-full shrink-0"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: `1px solid ${FROST}`,
                  }}
                />
                <div>
                  <p className="text-sm text-[#f0f0f0] font-medium">{t.name}</p>
                  <p className="text-xs text-[#464a4d]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Pricing ─────────────────────────────────────────────────── */}
      <section
        className="px-6 py-24 sm:py-32"
        style={{ borderTop: `1px solid ${FROST}` }}
      >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-heading text-[2.2rem] sm:text-[3rem] leading-tight tracking-[-0.02em] text-[#f0f0f0] mb-4">
              Simple pricing.
            </h2>
            <p className="text-[#a1a4a5] leading-relaxed mb-8 max-w-md">
              One plan. Everything included. No per-seat fees, no hidden costs.
              Replace this with your own tiers when you&rsquo;re ready to customize.
            </p>
            <ul className="space-y-3">
              {pricingFeatures.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-[#f0f0f0]">
                  <Check className="size-4 shrink-0" style={{ color: '#11ff99' }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="rounded-2xl p-10"
            style={{ border: `1px solid ${FROST}` }}
          >
            <p className="text-xs text-[#a1a4a5] uppercase tracking-widest mb-4">
              Pro plan
            </p>
            <div className="flex items-baseline gap-1.5 mb-2">
              <span className="font-heading text-6xl font-semibold text-[#f0f0f0]">
                $20
              </span>
              <span className="text-[#a1a4a5]">/month</span>
            </div>
            <p className="text-sm text-[#464a4d] mb-10">
              Cancel any time. No contracts.
            </p>
            <Link
              href="/signup"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-white text-black text-sm font-semibold hover:bg-[#f0f0f0] transition-colors"
            >
              Get started free <ArrowRight className="size-3.5" />
            </Link>
            <p className="text-xs text-[#464a4d] text-center mt-4">
              No credit card required to start
            </p>
          </div>
        </div>
      </section>

      {/* ── Final CTA ───────────────────────────────────────────────── */}
      <section
        className="relative px-6 py-28 sm:py-36 flex flex-col items-center text-center overflow-hidden"
        style={{ borderTop: `1px solid ${FROST}` }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 80% at 50% 100%, rgba(59,158,255,0.05) 0%, transparent 100%)',
          }}
        />
        <h2 className="relative font-heading text-[2.6rem] sm:text-[4rem] leading-none tracking-[-0.02em] text-[#f0f0f0] mb-5 max-w-2xl">
          Ready to stop building infrastructure?
        </h2>
        <p className="relative text-[#a1a4a5] mb-10 max-w-md leading-relaxed">
          Clone the template, add your keys, and deploy.
          Your first user is minutes away.
        </p>
        <Link
          href="/signup"
          className="relative inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-black text-sm font-semibold hover:bg-[#f0f0f0] transition-colors"
        >
          Start building — it&rsquo;s free <ArrowRight className="size-3.5" />
        </Link>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────── */}
      <footer
        className="px-6 sm:px-12 py-12"
        style={{ borderTop: `1px solid ${FROST}` }}
      >
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between gap-10">
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="size-5 rounded-sm bg-[#f0f0f0]" />
              <span className="font-semibold text-sm">LaunchKit</span>
            </div>
            <p className="text-sm text-[#464a4d] leading-relaxed">
              A production-ready SaaS template. Clone it, brand it, ship it.
            </p>
          </div>
          <div className="flex gap-12 text-sm">
            <div className="flex flex-col gap-3">
              <p className="text-xs uppercase tracking-widest text-[#464a4d]">Product</p>
              <Link href="/signup" className="text-[#a1a4a5] hover:text-[#f0f0f0] transition-colors">Sign up</Link>
              <Link href="/login" className="text-[#a1a4a5] hover:text-[#f0f0f0] transition-colors">Sign in</Link>
              <Link href="/dashboard" className="text-[#a1a4a5] hover:text-[#f0f0f0] transition-colors">Dashboard</Link>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-xs uppercase tracking-widest text-[#464a4d]">Stack</p>
              <span className="text-[#a1a4a5]">Next.js 15</span>
              <span className="text-[#a1a4a5]">Supabase</span>
              <span className="text-[#a1a4a5]">Stripe</span>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10 pt-6 flex items-center justify-between text-xs text-[#464a4d]" style={{ borderTop: `1px solid ${FROST}` }}>
          <p>© {new Date().getFullYear()} LaunchKit. MIT License.</p>
          <p>Built with Next.js 15, Supabase, and Stripe.</p>
        </div>
      </footer>
    </div>
  )
}
