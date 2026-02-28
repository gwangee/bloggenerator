# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint
npm run lint
```

No test framework is configured yet.

## Architecture

This is a **Next.js 16** project using the **App Router** with **TypeScript**, **Tailwind CSS v4**, and **React 19**.

- `app/layout.tsx` — Root layout with Geist font setup and global metadata
- `app/page.tsx` — Home page (entry point for UI development)
- `app/globals.css` — Global styles

Path alias `@/*` maps to the project root.

There is also a standalone `test_claude.py` script (not part of the Next.js app) that uses the Anthropic Python SDK to call the Claude API. It requires `ANTHROPIC_API_KEY` set in the environment.
