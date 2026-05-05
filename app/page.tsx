import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
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

const features = [
  {
    icon: ShieldCheck,
    title: 'Authentication',
    description:
      'Email/password auth with Supabase. Confirm emails, reset passwords, and manage sessions — all wired up.',
  },
  {
    icon: CreditCard,
    title: 'Stripe Payments',
    description:
      'Subscription billing with webhook handling, signature verification, and automatic status syncing.',
  },
  {
    icon: Database,
    title: 'Postgres + RLS',
    description:
      'Supabase Postgres with row-level security policies from day one. Your data is protected at the database layer.',
  },
  {
    icon: Rocket,
    title: 'Deploy to Vercel',
    description:
      'Optimized for Vercel with Next.js 15 App Router, Server Components, and edge-ready API routes.',
  },
  {
    icon: Code2,
    title: 'Fully Typed',
    description:
      'TypeScript throughout — from database queries to UI components. Catch errors before they ship.',
  },
  {
    icon: Zap,
    title: 'Production-Ready',
    description:
      'Security-audited, RLS enforced, webhooks verified. Skip the scary stuff and focus on your product.',
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
    <div className="min-h-screen bg-background flex flex-col">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="size-6 rounded bg-foreground" />
            <span className="font-semibold text-sm">LaunchKit</span>
          </div>
          <nav className="flex items-center gap-2">
            <Link
              href="/login"
              className={cn(buttonVariants({ variant: 'ghost', size: 'sm' }))}
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              className={cn(buttonVariants({ size: 'sm' }))}
            >
              Get started
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-24 sm:py-32 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground mb-8">
          <span className="size-1.5 rounded-full bg-green-500" />
          Open source · Next.js 15 · Supabase · Stripe
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-foreground mb-6 max-w-3xl mx-auto leading-tight">
          Ship your SaaS in{' '}
          <span className="text-muted-foreground">days</span>
          {', '}not months
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
          A production-ready Next.js 15 starter with authentication, subscription payments,
          and a secure database already wired up and security-audited.
        </p>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <Link
            href="/signup"
            className={cn(buttonVariants({ size: 'lg' }), 'gap-2')}
          >
            Get started free <ArrowRight className="size-4" />
          </Link>
          <Link
            href="/login"
            className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}
          >
            Sign in
          </Link>
        </div>
      </section>

      <Separator />

      {/* Features */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-3">
            Everything you need to launch
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Skip months of boilerplate. The hard parts are already built, tested, and secured.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <div className="size-9 rounded-lg bg-muted flex items-center justify-center mb-3">
                  <feature.icon className="size-4 text-foreground" />
                </div>
                <CardTitle className="text-base">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* Pricing */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-3">Simple pricing</h2>
          <p className="text-muted-foreground">
            One plan. Everything included. No surprises.
          </p>
        </div>
        <div className="max-w-xs mx-auto">
          <Card className="border-2 border-foreground">
            <CardHeader>
              <CardTitle>Pro</CardTitle>
              <CardDescription>Full access to everything</CardDescription>
              <div className="flex items-baseline gap-1 pt-2">
                <span className="text-4xl font-bold">$20</span>
                <span className="text-muted-foreground text-sm">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2.5">
                {pricingFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm">
                    <Check className="size-4 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Link
                href="/signup"
                className={cn(buttonVariants(), 'w-full gap-2')}
              >
                Get started <ArrowRight className="size-4" />
              </Link>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t mt-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="size-5 rounded bg-foreground" />
            <span className="font-semibold text-foreground">LaunchKit</span>
          </div>
          <p>Built with Next.js 15, Supabase, and Stripe.</p>
          <div className="flex items-center gap-4">
            <Link href="/login" className="hover:text-foreground transition-colors">
              Sign in
            </Link>
            <Link href="/signup" className="hover:text-foreground transition-colors">
              Sign up
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
