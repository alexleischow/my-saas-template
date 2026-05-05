import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import {
  Users,
  DollarSign,
  TrendingUp,
  Activity,
  ArrowUpRight,
  CheckCircle2,
  Circle,
  Zap,
  BookOpen,
  MessageSquare,
} from 'lucide-react'

const FROST = 'rgba(214,235,253,0.19)'

const stats = [
  {
    label: 'Total Users',
    value: '1,284',
    change: '+12%',
    icon: Users,
    accent: '#3b9eff',
    accentBg: 'rgba(59,158,255,0.07)',
    bars: [30, 45, 38, 60, 52, 70, 65, 80, 72, 88],
  },
  {
    label: 'Monthly Revenue',
    value: '$4,280',
    change: '+8%',
    icon: DollarSign,
    accent: '#11ff99',
    accentBg: 'rgba(17,255,153,0.07)',
    bars: [50, 55, 48, 62, 58, 74, 70, 80, 78, 92],
  },
  {
    label: 'Active Subs',
    value: '214',
    change: '+5%',
    icon: TrendingUp,
    accent: '#ff801f',
    accentBg: 'rgba(255,128,31,0.07)',
    bars: [40, 50, 45, 55, 50, 65, 60, 72, 68, 80],
  },
  {
    label: 'Active Today',
    value: '89',
    change: '+3%',
    icon: Activity,
    accent: '#3b9eff',
    accentBg: 'rgba(59,158,255,0.07)',
    bars: [20, 35, 28, 45, 40, 58, 50, 62, 55, 70],
  },
]

const revenueMonths = [
  { label: 'Jan', pct: 42 },
  { label: 'Feb', pct: 58 },
  { label: 'Mar', pct: 51 },
  { label: 'Apr', pct: 72 },
  { label: 'May', pct: 66 },
  { label: 'Jun', pct: 85 },
  { label: 'Jul', pct: 100 },
]

const activity = [
  { email: 'jordan@buildfast.io', action: 'Subscribed to Pro', time: '2m ago', color: '#11ff99' },
  { email: 'priya@startup.co', action: 'Subscribed to Pro', time: '18m ago', color: '#11ff99' },
  { email: 'sam@indie.dev', action: 'Created account', time: '1h ago', color: '#3b9eff' },
  { email: 'alex@agency.com', action: 'Subscribed to Pro', time: '3h ago', color: '#11ff99' },
  { email: 'morgan@product.io', action: 'Created account', time: '5h ago', color: '#3b9eff' },
  { email: 'taylor@saas.xyz', action: 'Cancelled subscription', time: '8h ago', color: '#ff2047' },
]

const checklist = [
  { label: 'Auth with Supabase', done: true },
  { label: 'RLS policies configured', done: true },
  { label: 'Stripe billing wired up', done: true },
  { label: 'Update branding and copy', done: false },
  { label: 'Configure Stripe products', done: false },
  { label: 'Set up transactional emails', done: false },
  { label: 'Deploy to production', done: false },
]

const quickLinks = [
  { icon: Zap, label: 'Supabase dashboard', href: 'https://supabase.com/dashboard', color: '#11ff99' },
  { icon: BookOpen, label: 'Stripe dashboard', href: 'https://dashboard.stripe.com', color: '#ff801f' },
  { icon: MessageSquare, label: 'Vercel dashboard', href: 'https://vercel.com/dashboard', color: '#3b9eff' },
]

function Sparkline({ bars, color }: { bars: number[]; color: string }) {
  const max = Math.max(...bars)
  const h = 28
  const bw = 5
  const gap = 2

  return (
    <svg width={bars.length * (bw + gap) - gap} height={h}>
      {bars.map((v, i) => {
        const barH = Math.max(2, (v / max) * h)
        return (
          <rect
            key={i}
            x={i * (bw + gap)}
            y={h - barH}
            width={bw}
            height={barH}
            fill={color}
            rx={1}
            opacity={0.3 + (i / bars.length) * 0.7}
          />
        )
      })}
    </svg>
  )
}

function getGreeting() {
  const h = new Date().getHours()
  if (h < 12) return 'Good morning'
  if (h < 18) return 'Good afternoon'
  return 'Good evening'
}

export default async function DashboardPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) redirect('/login')

  const greeting = getGreeting()
  const displayName = user.email?.split('@')[0] ?? 'there'

  return (
    <div className="space-y-8 max-w-6xl pb-16">

      {/* ── Header ──────────────────────────────────────────────────── */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-heading text-3xl sm:text-4xl text-[#f0f0f0] tracking-tight leading-tight">
            {greeting}, {displayName}.
          </h1>
          <p className="text-sm text-[#464a4d] mt-1">
            {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
          </p>
        </div>
        <span
          className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#464a4d] px-3 py-1.5 rounded-full"
          style={{ border: `1px solid ${FROST}` }}
        >
          <span className="size-1.5 rounded-full bg-[#11ff99]" />
          All systems operational
        </span>
      </div>

      {/* ── Stats ───────────────────────────────────────────────────── */}
      <section>
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs text-[#464a4d] uppercase tracking-widest">Overview</p>
          <span
            className="text-xs text-[#464a4d] px-2.5 py-0.5 rounded-full"
            style={{ border: `1px solid ${FROST}` }}
          >
            Sample data — replace with real queries
          </span>
        </div>
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-px"
          style={{ background: FROST }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="bg-black p-5 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <p className="text-xs text-[#a1a4a5]">{stat.label}</p>
                <div
                  className="size-7 rounded-md flex items-center justify-center shrink-0"
                  style={{ background: stat.accentBg }}
                >
                  <stat.icon className="size-3.5" style={{ color: stat.accent }} />
                </div>
              </div>
              <div>
                <p className="text-2xl font-semibold text-[#f0f0f0] tracking-tight leading-none mb-1">
                  {stat.value}
                </p>
                <p className="text-xs flex items-center gap-0.5" style={{ color: '#11ff99' }}>
                  <ArrowUpRight className="size-3" />
                  {stat.change} vs last month
                </p>
              </div>
              <Sparkline bars={stat.bars} color={stat.accent} />
            </div>
          ))}
        </div>
      </section>

      {/* ── Revenue chart + Activity ─────────────────────────────────── */}
      <div className="grid lg:grid-cols-2 gap-4">

        {/* Revenue chart */}
        <div className="rounded-2xl p-6" style={{ border: `1px solid ${FROST}` }}>
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-xs text-[#464a4d] uppercase tracking-widest mb-1">Revenue</p>
              <p className="text-2xl font-semibold text-[#f0f0f0] tracking-tight">$4,280</p>
            </div>
            <span className="text-xs px-2.5 py-1 rounded-full" style={{ color: '#11ff99', border: '1px solid rgba(17,255,153,0.2)' }}>
              ↑ 8% MoM
            </span>
          </div>
          <div className="flex items-end gap-2 h-28">
            {revenueMonths.map((m) => (
              <div key={m.label} className="flex-1 flex flex-col items-center gap-2">
                <div
                  className="w-full rounded-sm transition-all"
                  style={{
                    height: `${m.pct}%`,
                    background: m.label === 'Jul'
                      ? 'rgba(17,255,153,0.5)'
                      : 'rgba(255,255,255,0.06)',
                    border: m.label === 'Jul' ? '1px solid rgba(17,255,153,0.3)' : `1px solid ${FROST}`,
                  }}
                />
                <p className="text-xs text-[#464a4d]">{m.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Activity feed */}
        <div className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${FROST}` }}>
          <div
            className="px-5 py-4 flex items-center justify-between"
            style={{ borderBottom: `1px solid ${FROST}` }}
          >
            <p className="text-xs text-[#464a4d] uppercase tracking-widest">Recent activity</p>
            <span className="text-xs text-[#464a4d]">Last 24h</span>
          </div>
          <div>
            {activity.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-5 py-3.5"
                style={{
                  borderBottom: i < activity.length - 1 ? `1px solid ${FROST}` : undefined,
                }}
              >
                <span
                  className="size-1.5 rounded-full shrink-0"
                  style={{ background: item.color }}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-[#f0f0f0] truncate">{item.email}</p>
                  <p className="text-xs text-[#464a4d]">{item.action}</p>
                </div>
                <span className="text-xs text-[#464a4d] shrink-0">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Checklist + Quick links ─────────────────────────────────── */}
      <div className="grid lg:grid-cols-2 gap-4">

        {/* Launch checklist */}
        <div className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${FROST}` }}>
          <div
            className="px-5 py-4"
            style={{ borderBottom: `1px solid ${FROST}` }}
          >
            <p className="text-xs text-[#464a4d] uppercase tracking-widest">Launch checklist</p>
          </div>
          {checklist.map((item, i) => (
            <div
              key={item.label}
              className="flex items-center gap-3 px-5 py-3.5 text-sm"
              style={{
                borderBottom: i < checklist.length - 1 ? `1px solid ${FROST}` : undefined,
              }}
            >
              {item.done ? (
                <CheckCircle2 className="size-4 shrink-0" style={{ color: '#11ff99' }} />
              ) : (
                <Circle className="size-4 shrink-0 text-[#464a4d]" />
              )}
              <span className={item.done ? 'text-[#464a4d] line-through' : 'text-[#f0f0f0]'}>
                {item.label}
              </span>
              {item.done && (
                <span className="ml-auto text-xs text-[#464a4d]">Done</span>
              )}
            </div>
          ))}
        </div>

        {/* Quick links */}
        <div className="flex flex-col gap-4">
          <div className="rounded-2xl p-6" style={{ border: `1px solid ${FROST}` }}>
            <p className="text-xs text-[#464a4d] uppercase tracking-widest mb-4">Quick links</p>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/[0.03] transition-colors"
                  style={{ border: `1px solid ${FROST}` }}
                >
                  <div
                    className="size-7 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: `${link.color}12` }}
                  >
                    <link.icon className="size-3.5" style={{ color: link.color }} />
                  </div>
                  <span className="text-sm text-[#a1a4a5]">{link.label}</span>
                  <ArrowUpRight className="size-3.5 text-[#464a4d] ml-auto" />
                </a>
              ))}
            </div>
          </div>

          <div
            className="rounded-2xl p-6 flex flex-col gap-2"
            style={{ border: `1px solid rgba(17,255,153,0.12)`, background: 'rgba(17,255,153,0.03)' }}
          >
            <p className="text-xs" style={{ color: '#11ff99' }}>Pro subscription active</p>
            <p className="text-sm text-[#a1a4a5]">
              You&rsquo;re all set. Build something great.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
