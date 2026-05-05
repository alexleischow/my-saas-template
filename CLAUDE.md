# Project Overview

## Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + shadcn/ui
- **Backend/DB:** Supabase (Postgres, Auth, Storage, Edge Functions)
- **Payments:** Stripe
- **Deployment:** Vercel

## Skills

Three agent skills are installed in `.agents/skills/`. Use them on every relevant task — they load automatically but apply their guidance proactively:

- **`vercel-react-best-practices`** — Next.js and React performance patterns (Server Components, streaming, caching, image/font optimization). Apply on any component, page, or layout work.
- **`supabase`** — Supabase auth, RLS policies, client libraries, SSR patterns. Apply on any auth, database, or Supabase integration work.
- **`supabase-postgres-best-practices`** — Postgres schema design, indexing, query performance. Apply on any migration, schema, or query work.

## MCP Servers

Two MCP servers are connected and authenticated. Prefer MCP actions over manual file edits when the MCP can do the job:

- **`supabase`** — run migrations, execute SQL, manage projects and branches, deploy edge functions, fetch logs and advisors.
- **`stripe`** — manage products, prices, customers, subscriptions, invoices, and refunds.

## Deployment

Deploy via the **Vercel CLI** (`vercel` / `vercel --prod`). Do not use an MCP for deployment. Environment variables are managed in the Vercel dashboard or via `vercel env`.

## Conventions

- **Server Components by default.** Only add `'use client'` when the component needs browser APIs, event handlers, or React hooks.
- **All secrets go in `.env.local`.** Never commit `.env.local`. It is gitignored.
- **Import alias:** `@/*` maps to the project root.
- **shadcn/ui components** live in `components/ui/`. Do not edit generated files directly — override via composition.
- **Supabase client:** use the SSR-safe client from `@supabase/ssr` in Server Components and Route Handlers; use the browser client only in Client Components.
