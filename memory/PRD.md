# EasyDust – Landing Page PRD

## Original Problem Statement
Build a high-converting one-page landing page for the Swedish cleaning company **EasyDust**. Lead generation via a simple email form (mailto), maximize conversions with clear CTAs, keep implementation simple (no database).

## User Choices (locked)
- Email delivery: **Mailto-fallback** (opens user's email client – no backend)
- Accent color: **Lugn blå** (calm blue)
- Images: **Mix** of real photos and icons
- Language: **Swedish**

## Architecture
- React 19 (CRA) + Tailwind CSS + Shadcn/UI (Accordion, Button, Input, Label, Textarea, Sonner)
- Fonts: Outfit (display) + Manrope (body)
- Frontend-only: no backend routes, no MongoDB, no external integrations
- `handleSubmit` builds `mailto:ivicaikica81@gmail.com?subject=...&body=...` and sets `window.location.href`

## Core Requirements (static)
- Lead form above the fold with: Namn, E-post, Telefon, Meddelande (optional), honeypot
- Client-side validation (required name, valid email regex, phone ≥ 7 digits)
- Loading / success / error states via sonner toasts
- 8 service cards in bento grid: Hemstäd, Företagsstäd, Flyttstäd, Storstäd, Trapphusstäd, Byggstäd, Fönsterputs, Visningsstädning
- Value proposition band, dark CTA section, testimonials (3), FAQ accordion (5), contact section with clickable phone/email
- Mobile-first responsive, dark-mode-ready tokens, accessible labels, data-testid on all interactive elements
- SEO meta (title, description, keywords) in index.html

## What's been implemented (2025-12)
- Hero section with headline "Skinande rent, utan krångel." + form card + trust badges + decorative hero image
- Sticky glass header with nav + mobile menu toggle
- Value proposition band (4 items)
- Services bento grid (mix of photo cards and icon-only cards)
- Dark CTA section with "Begär offert nu" + tel: button
- Testimonials grid (3 cards, 2 with photos, 1 with initial)
- FAQ accordion (5 questions)
- Footer with oversized contact info, company details, secondary CTA
- Form validation, honeypot, mailto submit, toast feedback
- Custom fonts + CSS tokens tuned to Lugn blå palette

## Testing
- `iteration_1.json`: 10/11 acceptance criteria passed. Fixed the one LOW-priority issue (added `noValidate` so custom JS errors render instead of browser native tooltip).

## Prioritized Backlog
- P1: Split LandingPage.jsx into smaller section components (Header, Hero, Services, FAQ, Footer) for maintainability
- P2: Add optional lead-capture backend (Resend/SendGrid) if user wants leads delivered without user's mail client
- P2: Add schema.org LocalBusiness JSON-LD for better SEO
- P2: Add before/after gallery section
- P3: Blog/guide section for organic SEO traffic
- P3: Online booking calendar (Google Calendar integration)

## Next Tasks
- Awaiting user feedback / content tweaks
