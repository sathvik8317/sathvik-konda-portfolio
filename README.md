# Sathvik Konda — Portfolio

Personal portfolio site: dark, terminal/systems-dashboard-themed, built to showcase projects, skills, and experience with a working contact form.

## Tech Stack

- **React + Vite + TypeScript** — app shell and build tooling
- **Tailwind CSS + shadcn/ui** — design system, built on Radix primitives
- **Geist, IBM Plex Sans Condensed, JetBrains Mono** — self-hosted via `@fontsource`
- **Supabase** — stores contact form submissions (Postgres, RLS-protected `messages` table)
- **EmailJS** — sends a notification email on form submission

## Getting Started

### Prerequisites

- Node.js (LTS) and npm

### Install & run

```bash
npm install
npm run dev
```

### Environment variables

The contact form sends email via EmailJS. Create a `.env` file in the project root:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Supabase connection details are already configured in `src/integrations/supabase/client.ts` (the anon/publishable key is safe to expose client-side; access is governed by Row Level Security policies — see `supabase/migrations/`).

### Build

```bash
npm run build
```

## Project Structure

- `src/components/` — page sections (Hero, About, Skills, Projects, Contact, Footer) and shared UI (`src/components/ui/`, shadcn primitives)
- `src/hooks/` — `use-reveal` (scroll-triggered animation), `use-mobile`, `use-toast`
- `src/integrations/supabase/` — Supabase client and generated types
- `supabase/migrations/` — database schema for the `messages` table
