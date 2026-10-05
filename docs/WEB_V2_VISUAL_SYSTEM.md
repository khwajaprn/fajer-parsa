# Fajr Parsa Web v2 — Visual & UI System

## Design direction
Public customer experience: premium, luminous, travel-led, conversion-first.

Not an ERP dashboard. The visual system uses:
- warm ivory / cream surfaces
- deep navy for trust and contrast
- restrained gold as brand accent
- real destination photography
- soft glass surfaces only where useful
- large rounded geometry with tight spacing discipline
- mobile-first action hierarchy

## Typography
Primary Persian/Arabic UI: Vazirmatn Variable, self-hosted through Fontsource.
Latin labels / numbers / technical microcopy: Manrope Variable, self-hosted through Fontsource.

Rationale:
- Vazirmatn supports Arabic/Persian and weights 100–900.
- Variable self-hosting avoids runtime dependency on Google Fonts.
- Manrope gives cleaner Latin labels and numeric UI while keeping the overall modern travel-commerce character.

## Type hierarchy
- Hero: 42–68px / 900
- Section title: 30–40px / 900
- Card title: 18–22px / 850+
- Body: 14–15px / 500
- Labels: 10–12px / 750+
- Latin micro-labels: 9–10px / 800 + tracking

## UI principles
1. Every screen has one dominant CTA.
2. Commercial data is never invented; unavailable or unknown values remain request/quote states.
3. Real photography carries destination emotion; UI chrome stays restrained.
4. Glass effects are used only for hero/finder and overlays.
5. RTL alignment is native, not mirrored after the fact.
6. Mobile has a persistent Request / WhatsApp action bar.
7. Motion is subtle and respects prefers-reduced-motion.
8. UI cards use depth hierarchy rather than excessive gradients.

## Current implemented visual components
- top trust bar
- premium sticky header
- desktop mega menu
- mobile menu
- cinematic hero
- service finder
- trust strip
- service catalog cards
- destination image cards
- smart request explanation
- bundles/offers block
- My Fajr Parsa tracking card
- Gemini AI card
- luminous final CTA
- premium footer
- floating AI entry
- mobile bottom CTA

## Asset policy
Current destination photos are reused from the existing repository as placeholders.
Before production:
- convert to AVIF/WebP
- provide responsive sizes
- add editorial image crop review
- remove/replace any low-resolution or off-brand image
- verify usage rights for every public image
