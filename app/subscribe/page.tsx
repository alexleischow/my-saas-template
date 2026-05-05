import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { buttonVariants } from '@/components/ui/button'
import { CheckoutButton } from '@/components/checkout-button'
import { logout } from '@/app/actions/auth'
import { Check, Clock } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

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
    <main className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="w-full max-w-sm space-y-6">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-2">
          <div className="size-6 rounded bg-foreground" />
          <span className="font-semibold">LaunchKit</span>
        </Link>

        {paid ? (
          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto size-10 rounded-full bg-muted flex items-center justify-center mb-2">
                <Clock className="size-5 text-muted-foreground" />
              </div>
              <CardTitle>Payment received</CardTitle>
              <CardDescription>
                Your subscription is being activated — this usually takes just a moment.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-3">
              <Link
                href="/subscribe"
                className={cn(buttonVariants({ variant: 'outline' }), 'w-full')}
              >
                Refresh
              </Link>
            </CardContent>
          </Card>
        ) : (
          <Card className="border-2 border-foreground">
            <CardHeader>
              <CardTitle>Subscribe to continue</CardTitle>
              <CardDescription>
                A subscription is required to access the dashboard.
              </CardDescription>
              <div className="flex items-baseline gap-1 pt-2">
                <span className="text-4xl font-bold">$20</span>
                <span className="text-muted-foreground text-sm">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2.5">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm">
                    <Check className="size-4 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <CheckoutButton />
              <form action={logout} className="w-full">
                <Button
                  variant="ghost"
                  size="sm"
                  type="submit"
                  className="w-full text-muted-foreground"
                >
                  Sign out
                </Button>
              </form>
            </CardFooter>
          </Card>
        )}
      </div>
    </main>
  )
}
