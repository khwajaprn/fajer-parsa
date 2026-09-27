# Fajr Parsa Web v2 — Travel Commerce & Customer Platform

Status: Architecture/UX blueprint — v0.1
Date: 2026-09-27

## 1. Product Definition
Fajr Parsa Web v2 is not a brochure website. It is a customer-facing travel commerce platform connected to KAF Business OS.

Public experience:
Discover → Compare → Check eligibility → Select service → Configure request → Upload/submit → Get quote / continue on WhatsApp → Track case → Manage account.

Back-office:
All qualified leads, requests, documents, payments, status changes, messages, and AI handoffs should flow into KAF CRM / Supabase.

## 2. Core Product Areas
1. Explore
2. Visa & Residency
3. Business Travel
4. Invitations
5. Flights
6. Hotels
7. Pilgrimage (Umrah / Hajj / Karbala / Iran Ziyarat)
8. Tours & Packages
9. Documents & Consular Services
10. Insurance
11. Translation / Attestation / Appointment Support
12. Deals & Offers
13. Track Application
14. My Fajr Parsa
15. AI Travel Assistant
16. Social & Community Hub
17. Help Center / FAQ / Updates
18. Contact / Office / Maps / Channels

## 3. Global Navigation
### Desktop Mega Menu
- Services
  - Visas
  - Residency
  - Business travel
  - Invitations
  - Flights
  - Hotels
  - Pilgrimage
  - Tours
  - Documents
  - Insurance
  - Translation / Attestation
- Destinations
  - UAE
  - Iran
  - Turkey
  - China
  - Saudi Arabia
  - Iraq
  - Pakistan
  - Uzbekistan
  - Kazakhstan
  - More destinations
- Deals
- Track
- Help
- My Account

Persistent actions:
- Search
- WhatsApp
- Start Request
- Track Case
- AI Assistant
- Language

## 4. Homepage UX
### Hero
Rich destination photography + fast service finder.

Inputs:
- Passport nationality
- Destination
- Travel purpose
- Travel date (optional)
- Number of travelers
- CTA: Find services

### Home sections
- Popular right now
- Visa & residency finder
- Featured destinations
- Business travel
- Pilgrimage
- Flight / hotel / package requests
- Recommended bundles
- Limited-time / member offers
- Recently added services
- Why Fajr Parsa
- Process in 3–4 steps
- Customer stories / verified results
- FAQs
- Social/community
- Contact / office / channels

## 5. Service Catalog Data Model
Country → Category → Service → Variant → Eligibility → Requirements → Pricing Mode → Processing Time → Validity → Entry Type → Add-ons → Promotion → Availability.

Every service supports:
- title
- slug
- destination
- origin/passport rules
- category
- service type
- variants
- description
- who it is for
- requirements
- processing time
- validity
- stay duration
- entry type
- price / request quote
- government fee (if applicable)
- Fajr Parsa service fee (if applicable)
- urgent option
- renewal / extension
- add-ons
- FAQs
- terms
- status: available / request_quote / coming_soon / unavailable
- related services
- SEO content
- images
- CTA rules

## 6. Country Hub
Each country gets a scalable landing hub.

Example: UAE
- Tourist visas
- Business visas
- Residency
- Sponsorship
- Extension / renewal
- Status change
- Invitation
- Hotel
- Flight
- Insurance
- Airport transfer
- Business services
- FAQs
- Deals

No service should be claimed as available unless verified by Fajr Parsa.

## 7. Product / Service Detail Page
Above the fold:
- Service name
- Destination
- Price or Request Quote
- Processing time
- Validity
- Availability
- Key requirements
- Apply / Request Quote / WhatsApp

Full content:
- Overview
- Eligibility
- Requirements
- Process
- Timeline
- Price breakdown
- Add-ons
- FAQs
- Terms
- Related services
- Alternative options
- Customer support
- Save / Share / Compare

## 8. Smart Request Builder
Conditional multi-step form.

Step 1 — Service:
Country / category / service / variant

Step 2 — Traveler:
Name, phone, WhatsApp, nationality, passport country, number of travelers

Step 3 — Context:
Purpose, travel date, urgency, current visa/residency if applicable

Step 4 — Service-specific questions:
Generated from schema.

Step 5 — Add-ons:
Hotel / flight / invitation / insurance / transfer / document review / translation.

Step 6 — Documents:
Optional upload at first contact; can continue later.

Step 7 — Review:
Summary + consent + submit.

Output:
- Lead ID
- Request/Case ID
- CRM record
- source/campaign attribution
- selected service/variant/add-ons
- WhatsApp continuation
- customer portal continuation

## 9. Commerce Without False Checkout
Three selling modes:
1. Fixed price → Request / reserve
2. Quote required → Get Quote
3. Informational / variable → Talk to Expert

Avoid pretending instant booking if supplier confirmation, embassy review, or manual verification is required.

## 10. Bundles & Cross-Sell
Examples:
- Visa only
- Visa + Hotel
- Visa + Flight
- Complete Travel Package
- Business Package: Invitation + Visa + Hotel + Airport transfer
- Pilgrimage Package: Visa + Transport + Hotel + Group service

Support:
- recommended together
- save as package
- member offer
- group pricing
- seasonal campaigns
- coupon/promo codes
- referral offers

## 11. Customer Account — My Fajr Parsa
Dashboard:
- Requests
- Active cases
- Status timeline
- Missing documents
- Upload documents
- Quotes
- Payments
- Receipts
- Contracts
- Messages
- Appointments
- Downloads
- Saved services
- Recently viewed
- Renew / extend / reorder
- Support

## 12. Tracking
Public lightweight tracking:
- Case / Reference ID
- Last name or phone verification

Logged-in tracking:
- full case timeline
- current stage
- next action
- expected update
- documents needed
- assigned support channel

## 13. AI Assistant — Real Gemini
Floating assistant across site.

Knowledge:
- verified service catalog
- company FAQs
- approved policies
- service requirements
- document guides
- active offers
- company contact information

Tools:
- search_services
- compare_services
- check_service_availability
- start_request
- create_lead
- get_quote_request
- check_case_status
- list_required_documents
- handoff_to_whatsapp
- create_support_request

Rules:
- Never invent availability, price, visa approval, or legal guarantee.
- Sensitive actions require confirmation.
- API key stays server-side.
- Responses should cite the relevant internal source where possible.
- AI must distinguish verified business information from general guidance.

## 14. Social & Community Hub
- WhatsApp direct
- WhatsApp Channel
- WhatsApp Group
- Telegram
- Facebook
- Instagram
- YouTube
- TikTok if used
- Email
- Phone
- Office address / map
- Working hours

Use social CTAs contextually, not only in the footer.

## 15. Content & Trust
- About Fajr Parsa
- licenses / legal information
- office photos
- team/contact
- verified customer stories
- real travel/visa outcomes where publication is authorized
- document/receipt examples with private data removed
- FAQs
- policies
- privacy
- terms
- refund/cancellation policy where applicable
- disclaimer: visa decisions remain with relevant authorities

## 16. Promotions Engine
- campaigns
- promo banners
- scheduled offers
- member offers
- coupon codes
- group offers
- referral offers
- seasonal offers
- featured services
- campaign landing pages

Each campaign must support:
source, medium, campaign, landing page, CTA, leads, qualified leads, sales/conversion.

## 17. Analytics
Track:
- visits
- source / campaign
- service views
- search terms
- finder completions
- request starts
- request submissions
- WhatsApp clicks
- quote requests
- tracking usage
- AI conversations
- AI → lead conversion
- returning users
- service conversion

## 18. SEO & Discoverability
- country hubs
- service-specific URLs
- structured page titles/descriptions
- OpenGraph
- schema markup where valid
- clean slugs
- fast images (WebP/AVIF)
- multilingual metadata
- internal linking
- FAQ pages
- travel/visa update content

## 19. Design Direction
Public site ≠ ERP UI.

Style:
- premium light-first experience
- ivory / warm white foundation
- restrained brand gold
- strong typography
- rich destination photography
- large visual cards
- cinematic but fast hero
- subtle motion
- high contrast CTA
- polished RTL
- mobile-first
- optional dark accents, not a full dark admin look

## 20. Architecture
Frontend:
React + TypeScript + Vite + Tailwind

Backend:
Supabase Auth + PostgreSQL + Storage + RLS

Deployment:
Vercel

Internal operations:
KAF Business OS

AI:
Gemini via server-side endpoint / edge function

Integrations:
Google Drive / Sheets / Apps Script as integration and export layer, not primary database.

Flow:
Public Web → Supabase/KAF API → CRM/Case/Docs → Staff Operations → Customer Portal.

## 21. Security
- no Gemini keys in browser
- no service-role keys in browser
- RLS on customer data
- signed/private document URLs
- safe upload validation
- audit trail for status/payment/document changes
- soft delete for business records
- sanitized user-generated HTML/text
- rate limiting for public forms
- CAPTCHA/anti-abuse on public actions where needed

## 22. 14-Day Parallel Delivery Target
Day 1: information architecture + design system + repo setup
Day 2: catalog schema + Supabase tables + seed structure
Day 3: homepage + mega menu + search/finder
Day 4: country hub + service detail template
Day 5: smart request builder + lead creation
Day 6: customer auth + My Fajr Parsa shell
Day 7: tracking + documents + uploads
Day 8: deals + bundles + social/community hub
Day 9: Gemini AI server endpoint + knowledge
Day 10: AI tools + CRM handoff
Day 11: campaign pages + analytics events
Day 12: multilingual / SEO / performance / PWA
Day 13: real data loading + mobile QA + security review
Day 14: production release + monitoring + handoff

## 23. Data Required From Owner
Owner can provide incrementally; development must not wait for all data.
For each real service:
- country
- service name
- variant
- price or quote-only
- processing time
- validity
- stay duration
- requirements
- eligibility/conditions
- renewal/extension
- urgent option
- add-ons
- verified disclaimers
- real contact/social URLs

Unknown values remain explicitly “Ask / Request Quote / To be verified”; they are never invented.

## 24. Definition of Done for v1
A visitor must be able to:
- discover a real service
- understand requirements
- compare/select a variant
- start and submit a request
- continue via WhatsApp
- receive a Case ID
- sign in
- track the case
- upload required documents
- see updates
- interact with a real Gemini assistant grounded in verified Fajr Parsa data

A staff user must see the created lead/case in KAF and continue operations without retyping the customer data.
