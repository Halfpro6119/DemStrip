# DemStrip Services Ltd redesign

Premium Next.js 14 redesign for DemStrip. Business content is centralised in `data/siteData.ts`; content marked with brackets needs client confirmation.

## Setup

1. Copy `.env.example` to `.env.local` and add the required values.
2. Run `npm install` then `npm run dev`.
3. Use `npm run build` for a production check.

## Maintaining content

- Update phone, address, email and company claims in `data/siteData.ts`.
- Add or replace services and projects in the same file; images belong in `public/images/`.
- Replace `demolition-development-concept.png` with approved DemStrip photography before launch.
- Add only approved, attributable testimonials and accreditation information.

## Contact form

Run the SQL in `supabase-migrations.md`, then set `NEXT_PUBLIC_SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY`. The browser posts only to `/api/contact`; service-role credentials are never exposed. Optionally set `WEBHOOK_CONTACT_URL` to forward accepted enquiries to n8n.
