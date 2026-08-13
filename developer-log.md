# Developer log

## Research

- Attempted to crawl `http://demstrip.co.uk/` and `https://demstrip.co.uk/` on 7 August 2026; the crawler returned an internal error.
- Verified via public listings that DemStrip is family-run, Norwich-based, has 25+ years of experience and offers deconstruction, demolition and site clearance. MyWorkman supports nationwide coverage and additionally lists dismantling, strip-out, asbestos removal and site clearance. Real contact details are intentionally omitted from this demo branch.
- No accreditations, project details, email address, company photography, client names or case-study facts were verified; the application explicitly marks these for confirmation.

## Implementation

- Created a Next.js App Router / TypeScript / Tailwind application without a `src` folder.
- Implemented responsive corporate industrial visual design, sticky navigation, semantic page structure, skip link, responsive layout and reduced-motion support.
- Added service and project static routes, metadata, robots and sitemap.
- Built a React Hook Form + Zod enquiry form with debounced localStorage recovery, honeypot, server revalidation, optional Supabase insertion and optional webhook forwarding.
- Generated one clearly labelled visual-development concept asset with ImageGen. It is not presented as a DemStrip project and must be replaced with approved company imagery before launch.

## Remaining client requirements

- Confirm email, project details, imagery, asbestos scope/licensing and any accreditation/insurance claims.
- Add a live Supabase instance and production site URL.
- Verify content against the restored original website before publishing.

## Validation

- `npm install --no-audit --no-fund` completed.
- `npx tsc --noEmit` passed after adding a narrow local declaration for an incompletely extracted package declaration in this environment.
- `npm run build` could not run because the installed Windows Next SWC binary was reported as an invalid Win32 application.
- `npm run lint` could not run because an ESLint transitive package (`prelude-ls`) was missing from the local installation. These are local dependency/runtime extraction issues, not reported application lint failures.
