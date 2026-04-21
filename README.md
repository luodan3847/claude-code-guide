# Claude Code Guide

Claude Code Guide is a public-facing project about turning AI-assisted exploration into a clearer, more professional workflow.

Instead of treating Claude Code as a one-off coding assistant, this repository frames it as part of a broader system for research, resource curation, structured learning, and practical experimentation. The goal is to make the work legible: easier to understand, easier to maintain, and easier to present to collaborators, recruiters, or stakeholders.

## What this project demonstrates

- AI workflow design grounded in repeatable structure
- Next.js implementation for a polished public interface
- Clear information architecture across content, automation, and presentation
- Product thinking that connects technical decisions to user value
- Documentation that explains the system, not just the code

## Project focus

The current version is designed around a practical knowledge workflow:

- curating updates and resources from multiple sources
- organizing learning materials into a more navigable system
- separating interface code from content and automation logic
- presenting AI-assisted work as a reusable product, not a loose experiment

## Tech stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Anthropic SDK
- Axios
- Cheerio

## Repository structure

```text
app/        App routes, layout, metadata, and homepage UI
public/     Static assets
data/       Structured source material and content inputs
scripts/    Automation, scraping, and data-processing logic
docs/       Architecture, product thinking, and roadmap notes
.github/    GitHub workflows and repository automation
```

## Documentation

- [Architecture overview](docs/architecture.md)
- [Product thinking](docs/product-thinking.md)
- [Roadmap](docs/roadmap.md)

## Why this repo exists

Many AI projects stay fragmented. They rely on scattered prompts, ad hoc notes, and undocumented steps, which makes them hard to reuse and hard to explain.

This repository is an attempt to solve that problem with structure. It shows how AI tools can be wrapped in better interface decisions, clearer documentation, and a more maintainable project shape.

## Local development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build the production version:

```bash
npm run build
```

Run TypeScript checks:

```bash
npm run typecheck
```

Run the combined verification step:

```bash
npm run check
```

## Suggested next improvements

- expand the homepage into reusable UI sections and components
- add richer filtering and discovery flows for curated resources
- introduce stronger automation documentation for data refreshes
- add screenshots or branded demo assets for public sharing
- publish contribution and license guidance for wider reuse

## About the author

This project reflects a working style centered on strategy, research, customer understanding, and applied AI. The intention is not only to build functional tools, but to present them with clarity, structure, and professional execution.
