# Development setup

This document is for developers or technical client evaluators who need to run or inspect the CropGuard prototype locally.

## Prerequisites

- Node.js 18 or newer.
- npm.
- Python 3.10 or newer if you want to run the optional Flask API prototype.

## Install frontend dependencies

```bash
npm install
```

## Run the frontend locally

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Build the frontend

```bash
npm run build
```

## Repository structure

```text
.
├── api/app.py              # Flask prototype API with disease data and simulated detection
├── docs/                   # Setup, roadmap, and ownership notes
├── public/manifest.json    # PWA manifest served by Next.js
├── src/app/page.tsx        # Main mobile app experience
├── src/app/layout.tsx      # App metadata, viewport, and manifest link
├── src/app/globals.css     # Tailwind entrypoint and global styles
├── src/lib/diseases.ts     # Frontend disease knowledge base and helpers
├── netlify.toml            # Netlify deployment configuration
└── package.json            # Frontend scripts and dependencies
```

## Optional Flask API prototype

The Python API is optional for the current demo UI, but it is useful when integrating backend inference.

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

## Implementation notes

- The current frontend uses mock diagnosis logic for demo speed.
- The Flask API returns deterministic simulated results based on image data.
- A production deployment should replace simulated inference with a validated model or trusted plant-health service.
- File validation should exist on both the frontend and backend before handling real user uploads.
