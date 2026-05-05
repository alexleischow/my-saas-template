import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Users,
  DollarSign,
  TrendingUp,
  Activity,
  ArrowUpRight,
  CheckCircle2,
  Circle,
} from 'lucide-react'

const stats = [
  { label: 'Total Users', value: '1,284', change: '+12%', icon: Users },
  { label: 'Monthly Revenue', value: '$4,280', change: '+8%', icon: DollarSign },
  { label: 'Active Subs', value: '214', change: '+5%', icon: TrendingUp },
  { label: 'Active Today', value: '89', change: '+3%', icon: Activity },
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
    <div className="space-y-8 max-w-5xl">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Welcome back,{' '}
          <span className="text-foreground font-medium">{user.email}</span>
        </p>
      </div>

      {/* Stats */}
      <section>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
            Overview
          </h2>
          <span className="text-xs text-muted-foreground bg-muted px-2.5 py-0.5 rounded-full">
            Sample data — replace with real queries
          </span>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <Card key={stat.label}>
              <CardHeader className="pb-1">
                <div className="flex items-center justify-between">
                  <CardDescription className="text-xs">{stat.label}</CardDescription>
                  <stat.icon className="size-3.5 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold tracking-tight">{stat.value}</p>
                <p className="text-xs text-muted-foreground flex items-center gap-0.5 mt-1">
                  <ArrowUpRight className="size-3" />
                  {stat.change} this month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Launch checklist */}
      <div className="max-w-sm">
        <Card>
          <CardHeader>
            <CardTitle>Launch checklist</CardTitle>
            <CardDescription>
              Things to customize before you ship your SaaS.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {checklist.map((item) => (
                <li key={item.label} className="flex items-center gap-3 text-sm">
                  {item.done ? (
                    <CheckCircle2 className="size-4 shrink-0 text-foreground" />
                  ) : (
                    <Circle className="size-4 shrink-0 text-muted-foreground" />
                  )}
                  <span className={item.done ? 'text-muted-foreground line-through' : ''}>
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
