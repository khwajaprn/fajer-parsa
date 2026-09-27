-- Fajr Parsa Web v2 — public service catalog foundation
-- Safe to review before applying. Public reads are limited to published rows.
create extension if not exists pgcrypto;

do $$ begin
  create type public.web_service_status as enum ('draft','available','request_quote','coming_soon','unavailable');
exception when duplicate_object then null; end $$;

do $$ begin
  create type public.web_pricing_mode as enum ('fixed','from_price','quote','variable');
exception when duplicate_object then null; end $$;

create table if not exists public.web_countries (
  id uuid primary key default gen_random_uuid(),
  code text not null unique,
  name_fa text not null,
  name_en text not null,
  slug text not null unique,
  is_featured boolean not null default false,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.web_service_categories (
  id uuid primary key default gen_random_uuid(),
  key text not null unique,
  name_fa text not null,
  name_en text not null,
  description_fa text,
  icon_key text,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.web_services (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null,
  country_id uuid references public.web_countries(id) on delete restrict,
  category_id uuid references public.web_service_categories(id) on delete restrict,
  title_fa text not null,
  title_en text,
  slug text not null,
  summary_fa text,
  description_fa text,
  status public.web_service_status not null default 'draft',
  pricing_mode public.web_pricing_mode not null default 'quote',
  currency text,
  base_price numeric(14,2),
  processing_time_text text,
  validity_text text,
  stay_duration_text text,
  entry_type text,
  urgent_available boolean not null default false,
  renewable boolean,
  is_featured boolean not null default false,
  is_published boolean not null default false,
  sort_order int not null default 0,
  seo_title text,
  seo_description text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (organization_id, slug)
);

create table if not exists public.web_service_variants (
  id uuid primary key default gen_random_uuid(),
  service_id uuid not null references public.web_services(id) on delete cascade,
  name_fa text not null,
  code text,
  pricing_mode public.web_pricing_mode not null default 'quote',
  currency text,
  price numeric(14,2),
  processing_time_text text,
  validity_text text,
  stay_duration_text text,
  entry_type text,
  status public.web_service_status not null default 'draft',
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.web_service_requirements (
  id uuid primary key default gen_random_uuid(),
  service_id uuid not null references public.web_services(id) on delete cascade,
  title_fa text not null,
  details_fa text,
  required boolean not null default true,
  sort_order int not null default 0
);

create table if not exists public.web_service_faqs (
  id uuid primary key default gen_random_uuid(),
  service_id uuid not null references public.web_services(id) on delete cascade,
  question_fa text not null,
  answer_fa text not null,
  sort_order int not null default 0
);

create table if not exists public.web_service_addons (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null,
  name_fa text not null,
  slug text not null,
  pricing_mode public.web_pricing_mode not null default 'quote',
  currency text,
  price numeric(14,2),
  is_active boolean not null default true,
  unique (organization_id, slug)
);

create table if not exists public.web_service_addon_links (
  service_id uuid not null references public.web_services(id) on delete cascade,
  addon_id uuid not null references public.web_service_addons(id) on delete cascade,
  sort_order int not null default 0,
  primary key (service_id, addon_id)
);

create table if not exists public.web_promotions (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null,
  title_fa text not null,
  slug text not null,
  promo_code text,
  starts_at timestamptz,
  ends_at timestamptz,
  is_active boolean not null default false,
  content_fa text,
  created_at timestamptz not null default now(),
  unique (organization_id, slug)
);

create index if not exists web_services_country_idx on public.web_services(country_id);
create index if not exists web_services_category_idx on public.web_services(category_id);
create index if not exists web_services_published_idx on public.web_services(is_published, status);
create index if not exists web_variants_service_idx on public.web_service_variants(service_id);

alter table public.web_countries enable row level security;
alter table public.web_service_categories enable row level security;
alter table public.web_services enable row level security;
alter table public.web_service_variants enable row level security;
alter table public.web_service_requirements enable row level security;
alter table public.web_service_faqs enable row level security;
alter table public.web_service_addons enable row level security;
alter table public.web_service_addon_links enable row level security;
alter table public.web_promotions enable row level security;

drop policy if exists "public read countries" on public.web_countries;
create policy "public read countries" on public.web_countries for select using (true);

drop policy if exists "public read categories" on public.web_service_categories;
create policy "public read categories" on public.web_service_categories for select using (true);

drop policy if exists "public read published services" on public.web_services;
create policy "public read published services" on public.web_services
for select using (is_published = true and status in ('available','request_quote','coming_soon'));

drop policy if exists "public read variants of published services" on public.web_service_variants;
create policy "public read variants of published services" on public.web_service_variants
for select using (
  exists (
    select 1 from public.web_services s
    where s.id = service_id
      and s.is_published = true
      and s.status in ('available','request_quote','coming_soon')
  )
);

drop policy if exists "public read requirements of published services" on public.web_service_requirements;
create policy "public read requirements of published services" on public.web_service_requirements
for select using (
  exists (select 1 from public.web_services s where s.id = service_id and s.is_published = true)
);

drop policy if exists "public read faqs of published services" on public.web_service_faqs;
create policy "public read faqs of published services" on public.web_service_faqs
for select using (
  exists (select 1 from public.web_services s where s.id = service_id and s.is_published = true)
);

-- No anonymous INSERT/UPDATE/DELETE policy is created here.
-- Mutations should go through authenticated KAF staff or server-side APIs.
