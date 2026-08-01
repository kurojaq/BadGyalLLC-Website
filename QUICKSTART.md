# BadGyalLLC Website - Quick Start Guide

## Project Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

The site will be available at `http://localhost:5173` (or similar — Vite will show the port in console).

### 3. Build for Production
```bash
npm run build
npm run preview
```

## Project Structure

```
├── index.html              # Main HTML entry point
├── src/
│   ├── js/
│   │   ├── app.js         # Application bootstrap
│   │   ├── router.js      # Client-side routing
│   │   ├── api.js         # HTTP client
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components (home, atelier, booking, etc)
│   │   └── utils/         # Utility functions
│   └── styles/
│       ├── base.css       # Reset & typography
│       ├── theme.css      # Design tokens
│       ├── components.css # Component styles
│       └── pages.css      # Page-specific styles
├── package.json
└── README.md
```

## Pages Implemented (Wireframes)

- **Home** (`/`) — Hero, featured designs, value proposition
- **Discovery** (`/discovery`) — Portfolio with filtering
- **Atelier** (`/atelier`) — 3D customization studio (placeholder)
- **Booking** (`/booking`) — Multi-step booking form
- **Shop** (`/shop`) — Product grid with categories
- **Account** (`/account`) — Customer profile & history
- **Dashboard** (`/dashboard`) — Artist operations dashboard

## Navigation

Use the top navigation bar to explore all pages. Mobile menu available on smaller screens.

## Next Steps

1. **Design System Refinement**
   - Update colors, typography, spacing tokens in `src/styles/theme.css`
   - Create design system documentation
   - Add component library showcase

2. **3D Atelier Implementation**
   - Integrate Three.js for 3D rendering
   - Build nail customization controls
   - Add model loading and preview

3. **Backend Integration**
   - Connect API endpoints in `src/js/api.js`
   - Implement authentication
   - Wire up real data

4. **Advanced Features**
   - User authentication & accounts
   - Real booking system
   - Payment processing
   - 3D visualization with customization
   - Analytics tracking

## Development Tips

### Hot Module Reloading
Vite automatically refreshes your browser when you save changes. Just edit files and save!

### Console Logging
Open browser DevTools (F12) to see console messages for debugging.

### Mobile Testing
Use DevTools device emulation or resize your browser window to test responsive design.

### Git Workflow
```bash
git checkout -b feature/description
# ... make changes ...
git add src/
git commit -m "feat: description"
git push origin feature/description
```

## Performance Budget

- Homepage: < 3s load time
- Page transitions: < 500ms
- Navigation response: < 100ms

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile: iOS 12+, Android 8+

## Troubleshooting

**Port already in use?**
```bash
npm run dev -- --port 5174
```

**Styles not loading?**
Make sure all CSS files are imported in `index.html`.

**Router not working?**
Check browser console for errors. Make sure page loader functions are exported from `src/js/pages/*.js`.

## Support

Refer to the main BadGyalLLC vault for architecture decisions and planning.
Located at: `C:\Users\lorna\Desktop\BadGyalLLC\`

---

Happy building! 🎨💅
