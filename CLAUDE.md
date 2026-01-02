# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a GitHub Pages static website for KilkaLabs OU, a mobile app development and UX/UI design company based in Tallinn, Estonia. The site is hosted at kilkalabs.com and serves as the company's public-facing website.

## Architecture

**Single-Page Application (SPA)**: The entire site is contained in `index.html` with vanilla JavaScript for interactivity. No build system or framework is used.

**Styling**: Uses Tailwind CSS loaded via CDN (`https://cdn.tailwindcss.com`). All styles are applied through Tailwind utility classes directly in the HTML.

**Analytics**: Google Analytics is integrated with tracking ID `G-R077NKJ12M`.

**SEO Structure**:
- Comprehensive meta tags for SEO, Open Graph, and Twitter Cards
- Structured data using JSON-LD (Schema.org Organization type)
- `sitemap.xml` for search engine crawling
- `robots.txt` for crawler directives
- `CNAME` file for custom domain configuration

## Key Components

**Navigation**:
- Responsive header with mobile hamburger menu
- Desktop dropdown menu for "Our Apps" section (hover-based)
- Mobile dropdown menu (click-based)
- JavaScript handles menu toggling and dropdown behavior

**Sections**:
- Hero section with call-to-action
- Services section (Mobile App Development, UX/UI Design)
- Support section with FAQ-style content
- Contact section with email addresses for general inquiries and support

**Contact Information**:
- General inquiries: info@kilkalabs.com
- Technical support: support@kilkalabs.com

## Development Workflow

Since this is a static site hosted on GitHub Pages:

1. **Local Testing**: Open `index.html` directly in a browser or use any local HTTP server (e.g., `python -m http.server` or `npx serve`)
2. **Deployment**: Push changes to the `main` branch to deploy to GitHub Pages
3. **Domain**: The site is served at kilkalabs.com via the CNAME configuration

## Important Notes

- No build process required - all changes are direct HTML/CSS/JS edits
- Tailwind is loaded via CDN - no compilation needed
- Update `sitemap.xml` `<lastmod>` dates when making significant content changes
- The site links to an external app: "In The Mood" at https://inthemood.kilkalabs.com
