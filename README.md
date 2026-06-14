# CropGuard

CropGuard is a mobile-first crop disease detection prototype for growers, agri-consultants, farm supply teams, and agritech companies that need a fast way to turn crop photos into clear next steps.

It demonstrates a simple field workflow: upload or capture a plant photo, review a likely diagnosis, and see practical guidance for severity, confidence, treatment, prevention, yield impact, and alternate diagnoses.

> **Client demo note:** CropGuard is currently an MVP prototype. The user experience is ready for demos and pilots, while the diagnosis engine is simulated and should be replaced with a validated model before real agronomic use.

## Why clients care

CropGuard is built to show how an AI-assisted plant health tool can reduce friction between field observations and action.

- **Faster triage:** Give growers and support teams an immediate first-pass read on visible crop symptoms.
- **Clear next steps:** Present treatment, prevention, severity, and yield-risk information in plain language.
- **Mobile-first field use:** Keep the workflow focused on the device growers already have in hand.
- **Pilot-ready foundation:** Adapt the prototype to a specific crop, region, cooperative, retailer, or advisory service.
- **Expandable product path:** Move from demo to production by adding real model inference, review workflows, analytics, and client-specific content.

## Best-fit client projects

CropGuard is a strong starting point for:

- Agritech MVPs and investor demos.
- Farm service or crop advisory portals.
- Cooperative or retail support tools.
- Disease scouting pilots for a specific crop region.
- White-label mobile experiences for growers.
- Internal prototypes before funding a larger AI/data program.

## What the prototype shows

- Photo upload from gallery.
- Camera capture flow on supported mobile browsers.
- AI-style diagnosis result with confidence score.
- Severity labels for low, moderate, high, and critical cases.
- Treatment and prevention recommendations.
- Yield impact messaging.
- Alternate diagnoses for uncertainty handling.
- Supported crop examples: tomato, potato, corn, pepper, grape, apple, and wheat.
- Installable web app metadata for a PWA-style experience.

## Client customization options

Common freelance delivery packages could include:

- Branding, landing page, and visual polish for a client demo.
- Crop and disease library tailored to the client’s region.
- Real model or third-party plant-health API integration.
- Agronomist review queue for low-confidence scans.
- Admin tools for editing crop guidance and treatment copy.
- Multilingual farmer-facing instructions.
- Offline-first improvements for rural field conditions.
- Scan reports for customer support, sales follow-up, or farm records.

## Technical snapshot

| Area | Current implementation |
| --- | --- |
| Frontend | Next.js, React, TypeScript |
| Styling | Tailwind CSS |
| Prototype API | Flask with simulated image inference |
| App format | Mobile-first web app with PWA metadata |
| Deployment target | Static web deployment configuration included |

## Important production note

This prototype should not be used as the sole basis for agricultural treatment decisions. A production version should include validated disease models, expert-reviewed recommendations, regional compliance checks, secure file handling, privacy controls, and clear human-review fallback paths.

## Supporting documents

- [Development setup](docs/DEVELOPMENT.md)
- [Production roadmap](docs/ROADMAP.md)
- [Ownership and licensing notes](docs/OWNERSHIP.md)

## Rights

All rights reserved.
