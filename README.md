# CropGuard

CropGuard is a mobile-first crop disease detection prototype built for growers, agri-consultants, farm supply teams, and agritech product owners who need to turn leaf or fruit photos into clear next steps.

The app lets a user upload or capture a crop image, simulates an AI diagnosis, and returns a practical care plan with severity, confidence, yield impact, treatment actions, prevention guidance, and alternate diagnoses. It is designed as a client-ready MVP foundation: simple enough to demo quickly, structured enough to extend into a production plant-health workflow.

> **Prototype note:** The current frontend uses mock diagnosis logic for demo speed. A Flask API is included with deterministic image-based simulated inference and can be replaced with a trained computer-vision model when production data is available.

## What this project is for

Use CropGuard when you need a polished proof of concept for:

- Farm disease triage from phone photos.
- Agronomist support tools for quicker field recommendations.
- Retail or cooperative apps that guide customers toward next-step support.
- Internal demos before investing in labeled datasets and model training.
- Grant, pilot, or stakeholder presentations that need a believable product flow.

## Client value

CropGuard focuses on business outcomes, not just a technical demo:

- **Faster field decisions:** Users receive a likely diagnosis and immediate treatment checklist.
- **Lower support burden:** Common crops, diseases, and prevention guidance are surfaced in-app.
- **Mobile-first workflow:** The interface is optimized for phone use in field conditions.
- **Expandable foundation:** The disease library, Flask API, and Next.js frontend can evolve independently.
- **Pilot-ready scope:** The MVP can be adapted for a crop region, customer segment, or branded deployment.

## Current feature set

- Photo upload from gallery.
- Camera capture flow on supported mobile browsers.
- Disease result screen with confidence score.
- Severity labels for low, moderate, high, and critical cases.
- Treatment and prevention recommendations.
- Yield impact messaging.
- Two alternate diagnoses per scan.
- Supported crop chips for tomato, potato, corn, pepper, grape, apple, and wheat.
- Installable PWA metadata via web manifest.
- Optional Flask API endpoints for health checks, crop lists, and image detection.

## Tech stack

| Layer | Technology | Purpose |
| --- | --- | --- |
| Frontend | Next.js 14, React 18, TypeScript | Mobile web app and client-side scan flow |
| Styling | Tailwind CSS | Fast responsive UI development |
| Icons | lucide-react | Lightweight interface icons |
| API prototype | Flask, Pillow, NumPy | Image upload endpoint and simulated inference |
| Deployment config | Netlify | Static web deployment configuration |

## Product workflow

1. User opens CropGuard on a phone.
2. User uploads or captures a photo of affected plant tissue.
3. The app validates that the selected file is an image.
4. The prototype simulates a scan and selects a likely disease.
5. User receives a result with severity, confidence, treatment, prevention, yield impact, and alternates.
6. User can reset and scan another image.

## Repository structure

```text
.
├── api/app.py              # Flask prototype API with disease data and simulated detection
├── public/manifest.json    # PWA manifest served by Next.js
├── src/app/page.tsx        # Main mobile app experience
├── src/app/layout.tsx      # App metadata, viewport, and manifest link
├── src/app/globals.css     # Tailwind entrypoint and global styles
├── src/lib/diseases.ts     # Frontend disease knowledge base and helpers
├── netlify.toml            # Netlify deployment configuration
└── package.json            # Frontend scripts and dependencies
```

## Getting started

### Prerequisites

- Node.js 18 or newer.
- npm.
- Python 3.10 or newer if you want to run the Flask API prototype.

### Install frontend dependencies

```bash
npm install
```

### Run the frontend locally

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

### Build the frontend

```bash
npm run build
```

### Run the Flask API prototype

The Python API is optional for the current demo UI, but it is useful when integrating real backend inference.

```bash
python -m venv .venv
source .venv/bin/activate
pip install flask flask-cors pillow numpy
python api/app.py
```

The API starts on `http://localhost:5000` by default.

Available endpoints:

- `GET /health` returns service status.
- `GET /api/crops` returns supported crops.
- `POST /api/detect` accepts an uploaded `image` file and returns a simulated diagnosis.

Example detection request:

```bash
curl -X POST http://localhost:5000/api/detect \
  -F "image=@sample-leaf.jpg"
```

## MVP limitations

This repository is intentionally scoped as a prototype. Before using it for real agricultural decisions, plan for:

- A trained model validated against region-specific crop disease images.
- Expert review of treatment guidance for local regulations and crop labels.
- Clear disclaimers that the tool supports, but does not replace, professional agronomy advice.
- Secure upload handling, file size limits, content-type validation, and malware scanning.
- Privacy policy updates if photos include farm, location, customer, or employee data.
- Monitoring for model confidence, false positives, and uncertain diagnoses.

## Suggested production roadmap

### Phase 1: Client pilot

- Brand the UI for the client.
- Narrow crops and diseases to the target geography.
- Add analytics for scans, crops, and user actions.
- Connect the frontend to the Flask detection endpoint.
- Add a feedback button for agronomist review.

### Phase 2: Real inference

- Collect and label field images.
- Train or fine-tune a crop disease classifier.
- Store model version, confidence, and decision metadata.
- Add low-confidence fallback to human review.
- Build admin tooling for disease guidance updates.

### Phase 3: Commercial deployment

- Add authentication and organization accounts.
- Support offline-first field usage.
- Add treatment product mapping by region.
- Integrate weather, scouting history, and farm records.
- Add compliance review for pesticide recommendations.

## Security and privacy notes

- Do not store uploaded crop photos unless the client has consent and a retention policy.
- Avoid exposing precise farm location data unless it is required for the workflow.
- Validate files on both frontend and backend; never trust browser-only checks.
- Keep model outputs explainable enough for agronomist review.
- Treat treatment recommendations as configurable content, not hard-coded legal advice.

## Freelance customization options

This codebase is ready for common client extensions:

- White-label branding and landing page.
- Real API integration with a trained model or third-party plant-health service.
- Crop-specific dashboards for consultants or cooperatives.
- Multilingual farmer-facing instructions.
- Offline PWA improvements for rural connectivity.
- Admin panel for managing diseases, treatments, and prevention content.
- Exportable scan reports for farm records or customer follow-up.

## License and ownership

If you want to retain full rights and control, use a **proprietary / all rights reserved** license rather than an open-source license. Do not use MIT, Apache-2.0, GPL, or similar open-source licenses unless you intentionally want to grant broad rights to copy, modify, redistribute, or sublicense the code.

Recommended approach for freelance or client-controlled work:

- Keep the repository private unless public visibility is part of the sales strategy.
- Add a `LICENSE` file or contract clause that says the software is proprietary and all rights are reserved.
- State exactly who owns the code, designs, trained models, datasets, documentation, and derivative work.
- Grant clients only the rights they need, such as internal evaluation, production use for one organization, or a paid commercial license.
- Put transfer terms in the statement of work if a client is paying to own the final deliverables.

Simple starting notice:

```text
Copyright (c) 2026 [Your Name or Company]. All rights reserved.

This software is proprietary and confidential. No permission is granted to copy, modify, distribute, sublicense, or use this software except under a written agreement with the copyright owner.
```

This is a practical project note, not legal advice. Have an attorney review the final license or client agreement before commercial handoff.
