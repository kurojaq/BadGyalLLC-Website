/**
 * Router
 * Simple client-side routing system
 */

import { loadHomePage } from './pages/home.js';
import { loadDiscoveryPage } from './pages/discovery.js';
import { loadAtelierPage } from './pages/atelier.js';
import { loadBookingPage } from './pages/booking.js';
import { loadShopPage } from './pages/shop.js';
import { loadAccountPage } from './pages/account.js';
import { loadDashboardPage } from './pages/dashboard.js';
import { loadDesignSystemPage } from './pages/design-system.js';
import { loadAboutPage } from './pages/about.js';
import { load404Page } from './pages/404.js';

const routes = {
  '/': loadHomePage,
  '/about': loadAboutPage,
  '/discovery': loadDiscoveryPage,
  '/atelier': loadAtelierPage,
  '/booking': loadBookingPage,
  '/shop': loadShopPage,
  '/account': loadAccountPage,
  '/dashboard': loadDashboardPage,
  '/design-system': loadDesignSystemPage,
};

/**
 * Deployment base, e.g. '/' locally or '/BadGyalLLC-Website/' on GitHub Pages.
 * Routes are declared at the root ('/about'), so every incoming URL has the
 * base stripped before matching and re-added before it reaches the address bar.
 */
const BASE = (import.meta.env?.BASE_URL || '/').replace(/\/+$/, '');

/** '/BadGyalLLC-Website/about' -> '/about' */
function toRoute(pathname) {
  let path = pathname.split('?')[0].split('#')[0];
  if (BASE && path.startsWith(BASE)) path = path.slice(BASE.length);
  if (path.length > 1) path = path.replace(/\/+$/, '');
  return path === '' ? '/' : path;
}

/** '/about' -> '/BadGyalLLC-Website/about' */
function toUrl(route) {
  return route === '/' ? `${BASE}/` : `${BASE}${route}`;
}

class Router {
  constructor(routes) {
    this.routes = routes;
    // null (not '/') so the first navigate() is never a no-op.
    this.currentPath = null;
    this.outlet = document.getElementById('router-outlet');
  }

  init() {
    // Handle initial route
    this.navigate(window.location.pathname);

    // Handle back/forward
    window.addEventListener('popstate', () => {
      this.navigate(window.location.pathname);
    });

    // Intercept same-origin link clicks
    document.addEventListener('click', (e) => {
      // Let modified clicks (new tab, download, etc.) behave natively.
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const link = e.target.closest('a[href]');
      if (!link || link.hasAttribute('target') || link.hasAttribute('download')) return;

      const raw = link.getAttribute('href');

      // In-page anchors (#section) scroll natively.
      if (raw.startsWith('#')) return;

      // Root-relative hrefs in our own markup ("/about") are route paths, not
      // origin-absolute URLs. Resolving them against the origin would drop the
      // deployment base, so hand them to the router as-is.
      if (raw.startsWith('/')) {
        e.preventDefault();
        this.navigate(raw);
        return;
      }

      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname && url.hash) return;

      e.preventDefault();
      this.navigate(url.pathname);
    });
  }

  navigate(pathname) {
    const path = toRoute(pathname);

    if (this.currentPath === path) return;

    this.currentPath = path;

    // Update browser history
    const href = toUrl(path);
    if (window.location.pathname !== href) {
      window.history.pushState({ path }, '', href);
    }

    // Load route
    this.loadRoute(path);

    // Scroll to top
    window.scrollTo(0, 0);
  }

  loadRoute(path) {
    const loader = this.routes[path] || load404Page;

    // Clear outlet
    this.outlet.innerHTML = '';

    // Load page
    loader(this.outlet);

    // Update active nav link
    this.updateActiveLink(path);
  }

  updateActiveLink(path) {
    document.querySelectorAll('.nav-link').forEach(link => {
      const href = link.getAttribute('href');
      if (href === path) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
}

export const router = new Router(routes);
