import Link from 'next/link'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { DashboardNav } from '@/components/dashboard-nav'
import { logout } from '@/app/actions/auth'
import { LogOut } from 'lucide-react'

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

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar — hidden on mobile */}
      <aside className="hidden md:flex w-56 shrink-0 border-r flex-col">
        {/* Logo */}
        <div className="h-14 flex items-center px-4 border-b shrink-0">
          <Link href="/" className="flex items-center gap-2">
            <div className="size-6 rounded bg-foreground" />
            <span className="font-semibold text-sm">LaunchKit</span>
          </Link>
        </div>

        {/* Nav */}
        <DashboardNav />

        <Separator />

        {/* User */}
        <div className="p-3 space-y-2">
          <p className="text-xs text-muted-foreground truncate px-1">{user.email}</p>
          <form action={logout}>
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start gap-2 text-muted-foreground"
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
        <header className="md:hidden h-14 border-b flex items-center justify-between px-4 shrink-0">
          <Link href="/" className="flex items-center gap-2">
            <div className="size-6 rounded bg-foreground" />
            <span className="font-semibold text-sm">LaunchKit</span>
          </Link>
          <form action={logout}>
            <Button variant="outline" size="sm" type="submit">
              Sign out
            </Button>
          </form>
        </header>

        <main className="flex-1 p-6 lg:p-8 overflow-auto">{children}</main>
      </div>
    </div>
  )
}
