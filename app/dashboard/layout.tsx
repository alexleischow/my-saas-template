import Link from 'next/link'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import { Button } from '@/components/ui/button'
import { DashboardNav } from '@/components/dashboard-nav'
import { logout } from '@/app/actions/auth'
import { LogOut } from 'lucide-react'

const FROST = 'rgba(214,235,253,0.19)'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
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

  if (profile?.subscription_status !== 'active') redirect('/subscribe')

  return (
    <div className="flex min-h-screen bg-black">
      {/* Sidebar */}
      <aside
        className="hidden md:flex w-56 shrink-0 flex-col bg-black"
        style={{ borderRight: `1px solid ${FROST}` }}
      >
        {/* Logo */}
        <div
          className="h-14 flex items-center px-5 shrink-0"
          style={{ borderBottom: `1px solid ${FROST}` }}
        >
          <Link href="/" className="flex items-center gap-2.5">
            <div className="size-5 rounded-sm bg-[#f0f0f0]" />
            <span className="text-sm font-medium text-[#f0f0f0] tracking-tight">
              LaunchKit
            </span>
          </Link>
        </div>

        {/* Nav */}
        <DashboardNav />

        {/* User */}
        <div
          className="p-3 space-y-1"
          style={{ borderTop: `1px solid ${FROST}` }}
        >
          <p className="text-xs text-[#464a4d] truncate px-2 py-1">
            {user.email}
          </p>
          <form action={logout}>
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start gap-2 text-[#a1a4a5] hover:text-[#f0f0f0] hover:bg-white/[0.04]"
              type="submit"
            >
              <LogOut className="size-4" />
              Sign out
            </Button>
          </form>
        </div>
      </aside>

      {/* Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile top bar */}
        <header
          className="md:hidden h-14 flex items-center justify-between px-5 shrink-0 bg-black"
          style={{ borderBottom: `1px solid ${FROST}` }}
        >
          <Link href="/" className="flex items-center gap-2.5">
            <div className="size-5 rounded-sm bg-[#f0f0f0]" />
            <span className="text-sm font-medium text-[#f0f0f0]">LaunchKit</span>
          </Link>
          <form action={logout}>
            <Button
              variant="ghost"
              size="sm"
              className="text-[#a1a4a5] hover:text-[#f0f0f0]"
              type="submit"
            >
              Sign out
            </Button>
          </form>
        </header>

        <main className="flex-1 p-6 lg:p-10 overflow-auto">{children}</main>
      </div>
    </div>
  )
}
