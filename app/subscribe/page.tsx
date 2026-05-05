import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import { Button } from '@/components/ui/button'
import { CheckoutButton } from '@/components/checkout-button'
import { logout } from '@/app/actions/auth'
import { Check, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const FROST = 'rgba(214,235,253,0.19)'

const features = [
  'Unlimited access',
  'Priority support',
  'All future features',
  'Cancel any time',
]

export default async function SubscribePage({
  searchParams,
}: {
  searchParams: Promise<{ paid?: string }>
}) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) redirect('/login')

  const { data: profile } = await supabase
    .from('profiles')
    .select('subscription_status')
    .eq('id', user.id)
    .single()

  if (profile?.subscription_status === 'active') redirect('/dashboard')

  const { paid } = await searchParams

  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-sm flex flex-col items-center gap-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="size-5 rounded-sm bg-[#f0f0f0]" />
          <span className="text-sm font-medium text-[#f0f0f0] tracking-tight">
            LaunchKit
          </span>
        </Link>

        {paid ? (
          /* ── Payment received — waiting for webhook ─────────────── */
          <div
            className="w-full rounded-2xl p-8 text-center"
            style={{ border: `1px solid ${FROST}` }}
          >
            <div
              className="mx-auto size-12 rounded-full flex items-center justify-center mb-5"
              style={{ background: 'rgba(17,255,153,0.07)' }}
            >
              <Clock className="size-5" style={{ color: '#11ff99' }} />
            </div>
            <h1 className="font-heading text-2xl text-[#f0f0f0] mb-2 leading-tight">
              Payment received
            </h1>
            <p className="text-sm text-[#a1a4a5] leading-relaxed mb-7">
              Your subscription is being activated. This usually takes just a
              moment — refresh when you're ready.
            </p>
            <Link
              href="/subscribe"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full text-sm font-medium text-[#f0f0f0] hover:bg-white/[0.06] transition-colors"
              style={{ border: `1px solid ${FROST}` }}
            >
              Refresh <ArrowRight className="size-3.5" />
            </Link>
          </div>
        ) : (
          /* ── Pricing card ───────────────────────────────────────── */
          <div
            className="w-full rounded-2xl p-8"
            style={{ border: `1px solid ${FROST}` }}
          >
            <p className="text-xs text-[#a1a4a5] uppercase tracking-widest mb-3">
              Pro
            </p>
            <div className="flex items-baseline gap-1.5 mb-2">
              <span className="font-heading text-5xl font-semibold text-[#f0f0f0]">
                $20
              </span>
              <span className="text-[#a1a4a5] text-sm">/month</span>
            </div>
            <p className="text-sm text-[#a1a4a5] mb-7">
              A subscription is required to access the dashboard.
            </p>

            <ul className="space-y-3 mb-8">
              {features.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-3 text-sm text-[#f0f0f0]"
                >
                  <Check className="size-4 shrink-0" style={{ color: '#11ff99' }} />
                  {f}
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-2">
              <CheckoutButton />
              <form action={logout}>
                <Button
                  variant="ghost"
                  size="sm"
                  type="submit"
                  className="w-full text-[#464a4d] hover:text-[#a1a4a5] hover:bg-white/[0.03]"
                >
                  Sign out
                </Button>
              </form>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
