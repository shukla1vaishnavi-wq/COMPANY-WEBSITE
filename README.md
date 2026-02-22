# TheBirbal Consulting — Website Documentation

> **Empowering Women. Enabling Business. Building Futures Across India.**

A fully responsive, multi-page website for TheBirbal Consulting — India's women-first work-from-home platform connecting skilled women professionals with businesses across India.

---

## Project Structure

```
thebirbal-website/
├── index.html              # Homepage
├── services.html           # Services page
├── careers.html            # Job listings & careers
├── people.html             # Team & leadership
├── blog.html               # Blog listing page
├── contact.html            # Contact form & info
│
├── blog-homemaker.html     # Blog: Homemaker to professional
├── blog-interview.html     # Blog: Interview tips
├── blog-outsourcing.html   # Blog: Outsourcing guide
├── blog-plugplay.html      # Blog: Plug & play model
├── blog-post.html          # Blog: Generic post template
├── blog-startup.html       # Blog: Startup consulting
├── blog-wfh-tier2.html     # Blog: WFH in Tier 2 cities
│
├── css/
│   └── style.css           # Global shared stylesheet
│
└── js/
    └── main.js             # Shared JavaScript interactions
```

---

## Pages Overview

### 1. Homepage (`index.html`)

The main landing page. Introduces TheBirbal's brand, services, clients and vision.

**Sections:**
- **Loader** — Animated logo pulse with 3 bouncing dots; shown once per session via `sessionStorage`
- **Navbar** — Sticky, blur-backdrop navbar with dark mode toggle and mobile hamburger
- **Hero** — Split two-column layout with headline, CTA buttons, service pills, and floating stat badges (500+ Women Empowered, 120+ Business Partners)
- **Stats Band** — Full-width blue bar with animated counters: 10Mn+ Customer Connects, 80+ B2B Clients, 500+ Resources, 120+ Assignments, 35+ Happy Clients
- **Services Grid** — 5 service cards (Sales Support, Customer Support, Recruitment, Transaction Services, Hotel Call Center) with hover animations
- **Who We Are** — Two-column section with team photo, "8+ Years of Excellence" badge, description, and tag pills
- **Why TheBirbal** — 9-card grid covering Plug & Play, Multilingual, Pan India, Customized, Cost Effective, Agility, End-to-End, Experienced, Trusted
- **Comparison Table** — TheBirbal vs Conventional comparison across 7 criteria with green/red indicators
- **Clients Section** — 5×5 logo grid (25 client logos), followed by 4-stat bar: 120+ Partners, 8+ Years, 98% Retention, 15+ Industries
- **Testimonials** — 6 testimonial cards with client photos, names, roles, and star ratings
- **Mission, Vision & Values** — 4-card grid (Mission, Vision, Values, Culture)
- **Partner CTA** — Full-width blue call-to-action section
- **Footer** — 4-column grid with brand info, quick links, services, contact details, and social icons

---

### 2. Services (`services.html`)

Detailed breakdown of all 5 service offerings with alternating image-text layouts.

**Sections:**
- **Page Hero** — Eyebrow tag + title + subtitle
- **Sticky Service Tabs** — Horizontal scrollable tab bar with anchor links to each service section (tab highlighted on scroll based on current section)
- **Stats Strip** — Blue 5-column stats band (same metrics as homepage)
- **Service Sections** (alternating left/right image + content layout):
  - **Sales Support** — Inside sales, telecalling, lead gen, 15+ languages, Pan India coverage. Badge: "Plug & Play in 1 Week"
  - **Customer Support** — Inbound/outbound, live chat, email, CSAT monitoring. Badge: "15+ Languages"
  - **Recruitment Support** — Full-cycle hiring, sourcing, screening, onboarding, HR compliance. Badge: "End-to-End Hiring"
  - **Transaction Services** — Capital raising, M&A, valuations; CFA-qualified advisors (ex-KPMG India, Deutsche Bank). Badge: "CFA Expertise"
  - **Hotel Call Center** — Hospitality-specific reservations, upselling, OTA & direct booking support. Badge: "Hospitality Experts"
- **Why TheBirbal** — 6-card grid (Plug & Play, Multilingual, Pan India, Customized, Cost Effective, High Agility)
- **CTA Section** — Blue section with "Get In Touch" and "Join Our Team" buttons
- **Footer**

---

### 3. People (`people.html`)

Showcases the leadership team, advisor, and project associates community.

**Sections:**
- **Page Hero** — Title with 4 inline stat pills: 5 Co-Founders, 500+ Women Empowered, 8+ Years Together, 15+ Cities
- **Team Intro** — Single paragraph describing the team's collective expertise in sales, distribution, fund-raising, training and engagement
- **Core Team / Founders Grid** — 5 founder cards with real photos, name, role, bio, and LinkedIn link. Hover animation shows gradient top border. Members:

| Name | Role |
|---|---|
| Sushil Verma | CEO & Co-Founder — 20+ yrs Sales & Distribution, MBA Marketing (Double Gold Medal), NLP Practitioner |
| Jyoti Soni | Co-Founder & Head — Financial Advisory; CFA Charter holder, ex-KPMG India & Deutsche Bank KPO |
| Manju Chauhan | Co-Founder & Head — People & Culture; 15 yrs at SITEL & MakeMyTrip, Masters Psychology |
| Surendra Shukla | Co-Founder & Head — Revenue & Strategy |
| Vinod Choudhary | Co-Founder & Head — Sales & Distribution |

- **Advisor Section** — Single centered card: Vikrant Pande (IIM Bangalore, ex-TeamLease Skills University, Adjunct Faculty, author)
- **Team Photo** — Full-width group photo from thebirbal.com with caption
- **Project Associates** — 7 associate cards with icon avatars and first-person testimonial quotes: Khushboo, Drishti, Kanika, Heena, Savita, Manjari, Sonal
- **Join CTA** — Blue section with "View Openings" and "Get In Touch" buttons
- **Footer**

---

### 4. Contact (`contact.html`)

Contact form and office information page.

**Sections:**
- **Page Hero** — "Get In Touch" header
- **Contact Layout** — Two-column grid (1:2 ratio):
  - **Left — Info Cards**: Office (Delhi, India), Email (info@thebirbal.com), Website (thebirbal.com), Working Hours (Mon–Sat 9AM–6PM), Social media icon buttons (LinkedIn, Instagram, YouTube, Facebook, Twitter)
  - **Right — Contact Form**: Name, Email, Phone, Company, Subject dropdown (9 options), Message textarea; client-side validation with 6-second success toast on submit
- **Google Maps Embed** — New Delhi map (iframe), automatically CSS-inverted to dark mode when dark theme is active
- **Footer**

**Form Subject Options:** Looking for Job/WFH, Looking to Hire/Partner, Sales Support, Customer Support, Recruitment Support, Transaction Services, Hotel Call Center, Startup Consulting, Other

---

### 5. Careers (`careers.html`)

Job listings page with live search and filter functionality.

**Features:**
- Live search bar — filters job cards by title, location, and type in real time (`keyup`)
- Filter dropdowns — Job Type and Category filters
- Job cards — role name, location, type badge, category badge, description snippet, and "Apply Now" button
- Empty state message when no results match

---

### 6. Blog (`blog.html`)

Blog listing page with tag filtering and newsletter subscription.

**Features:**
- Featured post hero card at the top
- Tag filter buttons (All, WFH, Business, Startup, Women) — instantly filters blog cards by `data-tag`
- Blog post card grid with cover image, category, title, excerpt, author and date
- Newsletter subscription form with email validation and success message

---

### 7. Blog Posts (Individual Pages)

All 7 individual blog pages share the same layout structure.

**Features:**
- Reading progress bar — thin colored bar at top of page that fills as user scrolls
- Breadcrumb navigation
- Article header (title, author, date, category, estimated read time)
- Full article body with headings, paragraphs, inline images
- Social share buttons — LinkedIn share URL, WhatsApp share, clipboard copy link
- Sidebar with related posts and newsletter signup
- Related Posts section at the bottom of the article

**Blog Posts Index:**

| File | Title / Topic |
|---|---|
| `blog-homemaker.html` | From Homemaker to Working Professional |
| `blog-interview.html` | Interview Tips for Work From Home Jobs |
| `blog-outsourcing.html` | Why Businesses Should Outsource |
| `blog-plugplay.html` | The Plug & Play Business Model |
| `blog-post.html` | Generic Blog Post Template |
| `blog-startup.html` | Startup Consulting Guide |
| `blog-wfh-tier2.html` | WFH Opportunities in Tier 2 Cities |

---

## Design System

### Color Palette

| Token | Light Mode | Dark Mode |
|---|---|---|
| `--primary` | `#1a56db` | `#4f86f7` |
| `--primary-dark` | `#1447c0` | `#3b6fe0` |
| `--primary-glow` | `rgba(26,86,219,0.14)` | `rgba(79,134,247,0.18)` |
| `--gold` | `#f5a623` | `#f5c842` |
| `--bg` | `#ffffff` | `#0a0f1e` |
| `--bg2` | `#f4f7fe` | `#111827` |
| `--bg3` | `#eef2fb` | `#1a2236` |
| `--surface` | `#ffffff` | `#141c2f` |
| `--border` | `#dde4f5` | `#1e2d4a` |
| `--text` | `#0f172a` | `#f1f5f9` |
| `--text2` | `#475569` | `#94a3b8` |

### Typography

| Use | Font | Weights |
|---|---|---|
| Body / UI | Outfit (Google Fonts) | 300, 400, 500, 600, 700, 800 |
| Headings / Display | Playfair Display (Google Fonts) | 700, 800 |

### Spacing & Tokens

- `--radius`: `14px` (cards, inputs, buttons)
- `--shadow`: `0 4px 24px rgba(26,86,219,0.10)`
- `--shadow-lg`: `0 16px 48px rgba(26,86,219,0.14)`
- `--transition`: `0.3s cubic-bezier(0.4, 0, 0.2, 1)`

---

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 (semantic) |
| Styling | CSS3 (Custom Properties, Grid, Flexbox, no framework) |
| Scripting | Vanilla JavaScript (ES6+, no framework) |
| Icons | Font Awesome 6.4.0 (CDN) |
| Fonts | Google Fonts — Outfit + Playfair Display |
| Images | Unsplash (stock photos) + thebirbal.com (team/client photos) |
| Maps | Google Maps Embed (iframe) |
| Build Tools | None — zero build step, runs directly in browser |

---

## JavaScript Modules

All JS is written as inline `<script>` per page. No external libraries or frameworks.

| Module | Pages | How It Works |
|---|---|---|
| **Loading Screen** | All | Shows logo + animated dots on first visit. Sets `sessionStorage('birbalLoaded')` to skip on revisit. Hides after 2–2.2 seconds by adding `.hide` class (opacity 0 + visibility hidden). |
| **Theme Toggle** | All | Clicking toggle switches `data-theme` on `<html>` between `light`/`dark`. Saved to `localStorage('birbalTheme')`. Updates icon between `fa-sun` and `fa-moon`. |
| **Mobile Nav** | All | `#navToggle` button toggles `.open` on `#navLinks`. Clicking any nav link closes the menu. |
| **Stats Counter** | index, services | `IntersectionObserver` watches the stats strip. On first intersection, all `.counter[data-target]` elements animate from 0 to their target value using a cubic-ease RAF loop. Runs once via `countersAnimated` flag. |
| **Scroll Reveal** | All | `IntersectionObserver` on `.reveal` elements. Adds `.visible` (opacity 1, translateY 0). Staggers child elements with `transitionDelay: i * 0.07s`. |
| **Service Tab Highlight** | services | `scroll` listener checks `offsetTop` of each service section and toggles `.active` on matching `.stab` anchor. |
| **Job Filter** | careers | `keyup` on search input + `change` on dropdowns. Filters `.job-card` elements by comparing text content and data attributes. |
| **Blog Tag Filter** | blog | Tag buttons filter `.blog-card` by matching `data-tag` attribute. "All" tag shows every card. |
| **Contact Form** | contact | `submit` handler checks name, email, message are non-empty. On pass: shows `.form-success` for 6 seconds, then resets and hides. No backend — frontend only. |
| **Newsletter Form** | blog | Email field validated on submit. Success message displayed. |
| **Reading Progress Bar** | blog posts | `scroll` event calculates `(scrollY / (scrollHeight - clientHeight)) * 100` and sets the bar's `width` percent. |
| **Social Share** | blog posts | LinkedIn opens share URL in new tab. WhatsApp builds `wa.me` URL with current page URL. Copy Link uses `navigator.clipboard.writeText(location.href)`. |
| **Back to Top** | All | `#backTop` button appears when `scrollY > 400` (toggles `.show`). Click triggers `window.scrollTo({ top: 0, behavior: 'smooth' })`. |

---

## Key Features

- **Fully Responsive** — Mobile-first breakpoints at 900px (tablet/mobile) and 520px (small mobile). Grids collapse, navbar becomes hamburger.
- **Dark Mode** — Complete theme via CSS custom properties on `[data-theme="dark"]`. Persists across sessions via `localStorage`. Google Maps embed auto-inverted in dark mode.
- **Loading Screen** — Branded loader with animated logo, tagline, and progress bar. Shown once per browser session.
- **Sticky Glassmorphism Navbar** — `position: sticky` with `backdrop-filter: blur(16px)`.
- **Animated Stats Counters** — Smooth cubic-eased count-up triggered by scroll intersection.
- **Scroll Reveal Animations** — Staggered fade-up reveals on all major content sections.
- **Client-side Form Validation** — No backend required; contact and newsletter validated in JS.
- **No Build Step** — Open any HTML file in a browser or serve with a simple local server.

---

## Social & Contact

| Platform / Field | Value |
|---|---|
| LinkedIn | https://www.linkedin.com/company/thebirbal/ |
| Instagram | https://www.instagram.com/thebirbal_wfh/ |
| YouTube | https://www.youtube.com/@thebirbalWFH |
| Email | info@thebirbal.com |
| Location | Delhi, India |
| Hours | Mon–Sat, 9:00 AM – 6:00 PM |

---

## Getting Started

No build tools or npm required. Just serve the files.

**Option 1 — Python:**
```bash
cd thebirbal-website
python -m http.server 3000
# Open http://localhost:3000
```

**Option 2 — Node.js:**
```bash
npx serve .
```

**Option 3 — Direct:** Double-click `index.html` (fonts/maps may not load without a local server due to CORS).

---

## Browser Support

| Browser | Support |
|---|---|
| Chrome 90+ | Full |
| Firefox 88+ | Full |
| Safari 14+ | Full |
| Edge 90+ | Full |
| Internet Explorer 11 | Not supported |

---

## License

© 2026 TheBirbal Consulting. All Rights Reserved.  
Made with love for Women Empowerment.
