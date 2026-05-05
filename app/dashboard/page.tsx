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
  },
  {
    label: 'Monthly Revenue',
    value: '$4,280',
    change: '+8%',
    icon: DollarSign,
    accent: '#11ff99',
    accentBg: 'rgba(17,255,153,0.07)',
  },
  {
    label: 'Active Subs',
    value: '214',
    change: '+5%',
    icon: TrendingUp,
    accent: '#ff801f',
    accentBg: 'rgba(255,128,31,0.07)',
  },
  {
    label: 'Active Today',
    value: '89',
    change: '+3%',
    icon: Activity,
    accent: '#3b9eff',
    accentBg: 'rgba(59,158,255,0.07)',
  },
]

const checklist = [
  { label: 'Auth with Supabase', done: true },
  { label: 'RLS policies configured', done: true },
  { label: 'Stripe billing wired up', done: true },
  { label: 'Update branding and copy', done: false },
  { label: 'Configure your Stripe products', done: false },
  { label: 'Set up transactional emails', done: false },
  { label: 'Deploy to Vercel', done: false },
]

export default async function DashboardPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) redirect('/login')

  return (
    <div className="space-y-10 max-w-5xl">
      {/* Header */}
      <div>
        <h1 className="font-heading text-3xl sm:text-4xl text-[#f0f0f0] tracking-tight leading-tight mb-1">
          Dashboard
        </h1>
        <p className="text-sm text-[#a1a4a5]">
          Welcome back,{' '}
          <span className="text-[#f0f0f0]">{user.email}</span>
        </p>
      </div>

      {/* Stats */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <p className="text-xs text-[#464a4d] uppercase tracking-widest">
            Overview
          </p>
          <span
            className="text-xs text-[#464a4d] px-2.5 py-0.5 rounded-full"
            style={{ border: `1px solid ${FROST}` }}
          >
            Sample data
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px"
          style={{ background: FROST }}>
          {stats.map((stat) => (
            <div key={stat.label} className="bg-[#000000] p-5">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs text-[#a1a4a5]">{stat.label}</p>
                <div
                  className="size-7 rounded-md flex items-center justify-center"
                  style={{ background: stat.accentBg }}
                >
                  <stat.icon className="size-3.5" style={{ color: stat.accent }} />
                </div>
              </div>
              <p className="text-2xl font-semibold text-[#f0f0f0] tracking-tight">
                {stat.value}
              </p>
              <p
                className="text-xs mt-1 flex items-center gap-0.5"
                style={{ color: '#11ff99' }}
              >
                <ArrowUpRight className="size-3" />
                {stat.change} this month
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Launch checklist */}
      <section className="max-w-sm">
        <h2 className="text-xs text-[#464a4d] uppercase tracking-widest mb-4">
          Launch checklist
        </h2>
        <div
          className="rounded-2xl overflow-hidden"
          style={{ border: `1px solid ${FROST}` }}
        >
          {checklist.map((item, i) => (
            <div
              key={item.label}
              className="flex items-center gap-3 px-5 py-3.5 text-sm"
              style={{
                borderBottom:
                  i < checklist.length - 1 ? `1px solid ${FROST}` : undefined,
              }}
            >
              {item.done ? (
                <CheckCircle2
                  className="size-4 shrink-0"
                  style={{ color: '#11ff99' }}
                />
              ) : (
                <Circle className="size-4 shrink-0 text-[#464a4d]" />
              )}
              <span
                className={
                  item.done ? 'text-[#464a4d] line-through' : 'text-[#f0f0f0]'
                }
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
