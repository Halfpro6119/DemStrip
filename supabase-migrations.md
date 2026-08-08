# Supabase migration

Run this in the Supabase SQL editor:

```sql
create table if not exists public.enquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  full_name text not null, company text, email text not null, phone text not null,
  project_type text not null, project_location text not null,
  project_description text not null, preferred_contact_method text not null,
  consent boolean not null, source text not null default 'demstrip.co.uk',
  status text not null default 'new'
);
alter table public.enquiries enable row level security;
```

No anonymous policies are created: anonymous users cannot read, update, delete or insert enquiries. The Next.js route uses `SUPABASE_SERVICE_ROLE_KEY` only on the server to insert records.
