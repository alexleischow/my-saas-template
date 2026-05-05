# LaunchKit — Next.js SaaS Starter Template

A production-ready SaaS template built with Next.js 15, Supabase, and Stripe. It ships with email/password authentication, subscription billing (including webhook handling and automatic status syncing), a Postgres database with row-level security enforced at the column level, and a dark Resend-inspired UI. Clone it, swap in your branding, and you have a fully working SaaS foundation in under an hour — auth, payments, database, and a polished landing page and dashboard included.

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router, Server Components) |
| Language | TypeScript |
| Styling | Tailwind CSS + shadcn/ui |
| Auth + Database | Supabase (Postgres, Auth, RLS) |
| Payments | Stripe (subscriptions + webhooks) |
| Deployment | Vercel |

## Prerequisites

You'll need free accounts on all four platforms before you start:

- **GitHub** — to host the repo
- **Supabase** — for auth and database ([supabase.com](https://supabase.com))
- **Stripe** — for subscription billing ([stripe.com](https://stripe.com))
- **Vercel** — for deployment ([vercel.com](https://vercel.com))

You'll also need Node.js 18+ and the Vercel CLI (`npm i -g vercel`).

## Setup

### 1. Clone and install

```bash
git clone https://github.com/your-username/launchkit my-app
cd my-app
npm install
```

### 2. Create your Supabase project

1. Go to [supabase.com](https://supabase.com) → New project
2. Once created, open **Project Settings → API** and copy:
   - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon` key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role` key → `SUPABASE_SERVICE_ROLE_KEY`
3. Run the database migrations (see step 5)

### 3. Create your Stripe products

1. Go to [stripe.com](https://stripe.com) → **Product catalog → Add product**
2. Set a recurring price (e.g. $20/month)
3. Copy the **Price ID** (starts with `price_`) → `STRIPE_PRICE_ID`
4. Copy your **API keys** from Developers → API keys → `STRIPE_SECRET_KEY` and `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`

### 4. Configure environment variables

```bash
cp .env.example .env.local
```

Fill in all values in `.env.local`. For local development, set `NEXT_PUBLIC_SITE_URL=http://localhost:3000`.

### 5. Run database migrations

With the Supabase CLI installed (`npm i -g supabase`):

```bash
supabase login
supabase link --project-ref YOUR_PROJECT_REF
supabase db push
```

Or paste the contents of `supabase/migrations/` into the Supabase SQL editor manually.

### 6. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

For Stripe webhooks locally, use the Stripe CLI:

```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

Copy the webhook signing secret it prints → `STRIPE_WEBHOOK_SECRET` in `.env.local`.

### 7. Deploy to Vercel

```bash
vercel link          # connect to a new Vercel project
vercel env add ...   # add each key from .env.local to production
vercel deploy --prod
```

Then go to your Stripe dashboard → **Developers → Webhooks → Add endpoint**:
- URL: `https://your-app.vercel.app/api/webhooks/stripe`
- Event: `checkout.session.completed`
- Copy the signing secret → update `STRIPE_WEBHOOK_SECRET` on Vercel → redeploy

## Project structure

```
app/
  (auth)/          # Login and signup pages
  api/
    checkout/      # POST — creates Stripe checkout session (auth required)
    webhooks/
      stripe/      # POST — handles Stripe events, updates subscription status
  auth/confirm/    # GET — email confirmation callback
  dashboard/       # Protected: requires active subscription
  subscribe/       # Paywall: shown to authenticated but unsubscribed users
  page.tsx         # Public landing page
components/
  ui/              # shadcn/ui primitives
  checkout-button  # Client component that calls /api/checkout
  dashboard-nav    # Client component with active-link highlighting
lib/
  stripe.ts        # Stripe client (server-only)
utils/supabase/
  client.ts        # Browser client
  server.ts        # SSR-safe server client
  admin.ts         # Service-role client (server-only, webhook use)
```

## What's already secured

- Dashboard is gated by `subscription_status = 'active'` enforced server-side in the layout
- Stripe webhook verifies the signature with `constructEvent()` before trusting any payload
- `/api/checkout` requires a valid Supabase session before creating a Stripe session
- `SUPABASE_SERVICE_ROLE_KEY` and `STRIPE_SECRET_KEY` are never exposed to the client
- `profiles.subscription_status` is protected by column-level grants — authenticated users cannot self-promote their subscription
- `handle_new_user` trigger creates a profile row on signup as `SECURITY DEFINER`

## Customising

| What | Where |
|---|---|
| App name and branding | `app/page.tsx`, `app/layout.tsx`, `components/dashboard-nav.tsx` |
| Colors and fonts | `app/globals.css` |
| Pricing copy | `app/page.tsx` (pricing section), `app/subscribe/page.tsx` |
| Dashboard widgets | `app/dashboard/page.tsx` |
| Auth email redirect | `app/actions/auth.ts` → `emailRedirectTo` |
| Add nav items | `components/dashboard-nav.tsx` |

## License

MIT — use this however you want.
