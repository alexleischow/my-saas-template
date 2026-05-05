'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export function CheckoutButton() {
  const [loading, setLoading] = useState(false)

  async function handleClick() {
    setLoading(true)
    try {
      const res = await fetch('/api/checkout', { method: 'POST' })
      const { url, error } = await res.json()
      if (error) throw new Error(error)
      window.location.href = url
    } catch (err) {
      console.error(err)
      setLoading(false)
    }
  }

  return (
    <Button onClick={handleClick} disabled={loading} className="w-full">
      {loading ? 'Redirecting…' : 'Upgrade to Pro — $20/mo'}
    </Button>
  )
}
