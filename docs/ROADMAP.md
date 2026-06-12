# Production roadmap

This roadmap separates the client-facing pitch from the technical path needed to move CropGuard from prototype to production.

## Phase 1: Client pilot

Goal: make the demo useful for a specific buyer, crop, and region.

- Brand the UI for the client.
- Narrow crops and diseases to the target use case.
- Connect the frontend to the Flask detection endpoint or a hosted inference endpoint.
- Add basic scan analytics for crops, disease results, and user actions.
- Add an agronomist feedback or review button.
- Write client-specific disclaimers and support language.

## Phase 2: Real inference

Goal: replace simulated diagnosis with a measurable model workflow.

- Collect and label field images with expert review.
- Train, fine-tune, or integrate a crop disease classifier.
- Store model version, confidence, and decision metadata for each scan.
- Add low-confidence fallback to human review.
- Create an admin process for updating disease, treatment, and prevention content.
- Define model evaluation metrics before expanding crop coverage.

## Phase 3: Commercial deployment

Goal: make CropGuard reliable for paid usage and support operations.

- Add authentication and organization accounts.
- Add secure upload handling, file size limits, rate limits, and abuse monitoring.
- Support offline-first field usage where connectivity is limited.
- Add treatment product mapping by region, subject to compliance review.
- Integrate weather, scouting history, or farm records if they improve recommendations.
- Add reporting for farm records, customer follow-up, and support teams.

## Production risks to manage

- Model false positives and false negatives.
- Region-specific disease pressure and treatment rules.
- Pesticide label and regulatory compliance.
- Privacy for farm, location, customer, and employee data.
- Client expectations around AI confidence and human review.
