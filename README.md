# BadGyalLLC Website

A luxury nail artistry platform combining discovery, digital customization, booking, and commerce.

## Project Structure

```
src/
├── index.html              # Homepage & main layout
├── styles/
│   ├── base.css           # Reset, typography, utilities
│   ├── components.css     # Reusable component styles
│   ├── pages.css          # Page-specific styles
│   └── theme.css          # Design tokens, colors, spacing
├── js/
│   ├── app.js             # Main application entry point
│   ├── router.js          # Page routing
│   ├── api.js             # API client
│   ├── components/        # Reusable component logic
│   ├── pages/             # Page-specific logic
│   └── utils/             # Helpers and utilities
├── pages/                 # HTML pages (wireframes)
│   ├── index.html         # Homepage
│   ├── discovery.html     # Discovery/portfolio
│   ├── atelier.html       # 3D customization studio
│   ├── booking.html       # Booking workflow
│   ├── shop.html          # Product shop
│   ├── account.html       # Customer account/profile
│   ├── dashboard.html     # Artist operations dashboard
│   └── 404.html           # Not found
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
└── data/
    └── fixtures.json      # Mock data for development
```

## Development

```bash
npm install
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Lint code
npm run type-check   # Type check (TypeScript)
```

## Architecture

This is a client-side rendered SPA with clear separation:

- **Discovery** — Public-facing luxury brand experience
- **Digital Atelier** — Interactive 3D customization studio
- **Commerce** — Product shop and checkout
- **Booking** — Service consultation and appointment system
- **Account** — Customer profile and order history
- **Dashboard** — Artist operations and management

## Implementation Phases

### Phase 1: Wireframes & Structure (Current)
- [ ] HTML wireframes for all major pages
- [ ] Basic navigation and routing
- [ ] Mock data fixtures
- [ ] Responsive grid and layout foundations

### Phase 2: Design System
- [ ] Color tokens and design variables
- [ ] Typography system
- [ ] Reusable component library
- [ ] Motion and interaction patterns

### Phase 3: Discovery Experience
- [ ] Homepage design and storytelling
- [ ] Portfolio and gallery
- [ ] Service showcase
- [ ] Editorial content areas

### Phase 4: Digital Atelier
- [ ] 3D rendering setup (Three.js)
- [ ] Nail customization controls
- [ ] Guided and Studio modes
- [ ] Design preview and comparison

### Phase 5: Booking & Commerce
- [ ] Booking workflow implementation
- [ ] Payment integration
- [ ] Deposit and quote system
- [ ] Order management

### Phase 6: Customer Experience
- [ ] Account dashboard
- [ ] Design archive and history
- [ ] Loyalty and recommendations
- [ ] Post-service flows

### Phase 7: Artist Operations
- [ ] Artist dashboard
- [ ] Client preparation briefs
- [ ] Inventory management
- [ ] Analytics and reporting

### Phase 8: Deployment & Hardening
- [ ] Production build optimization
- [ ] Security audit
- [ ] Performance optimization
- [ ] Monitoring and observability

## Git Workflow

```bash
# New feature
git checkout -b feature/description
# ... make changes ...
git add .
git commit -m "feat: description of feature"
git push origin feature/description
# Create pull request

# Bug fix
git checkout -b fix/description
git commit -m "fix: description of issue"
git push origin fix/description

# Documentation
git commit -m "docs: description of doc change"
```

## Design Principles

- **Mobile-first** — Optimize for mobile, enhance for desktop
- **Accessible** — WCAG 2.1 AA compliance
- **Performance** — Fast load times and smooth interactions
- **Ownership** — Complete control over experience and data
- **Scalable** — Architecture designed for future white-label and SaaS

## API Endpoints (Future)

```
POST   /api/auth/login
POST   /api/auth/logout
GET    /api/customer/profile
POST   /api/designs
GET    /api/designs/:id
POST   /api/bookings
GET    /api/bookings/:id
POST   /api/orders
GET    /api/products
POST   /api/payments
```

## Contributing

See CONTRIBUTING.md in the main BadGyalLLC vault for contribution guidelines.

## License

Proprietary — All rights reserved to BadGyalLLC LLC

---

**Created:** 2026-08-01  
**Current Status:** Wireframe Phase  
**Next Gate:** Design System Completion
