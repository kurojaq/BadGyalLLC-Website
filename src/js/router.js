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
import { load404Page } from './pages/404.js';

const routes = {
  '/': loadHomePage,
  '/discovery': loadDiscoveryPage,
  '/atelier': loadAtelierPage,
  '/booking': loadBookingPage,
  '/shop': loadShopPage,
  '/account': loadAccountPage,
  '/dashboard': loadDashboardPage,
  '/design-system': loadDesignSystemPage,
};

class Router {
  constructor(routes) {
    this.routes = routes;
    this.currentPath = '/';
    this.outlet = document.getElementById('router-outlet');
  }

  init() {
    // Handle initial route
    this.navigate(window.location.pathname);

    // Handle navigation
    window.addEventListener('popstate', () => {
      this.navigate(window.location.pathname);
    });

    // Handle link clicks
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href^="/"]');
      if (link && !link.hasAttribute('target')) {
        e.preventDefault();
        this.navigate(link.href);
      }
    });
  }

  navigate(path) {
    // Normalize path
    path = path.split('?')[0].split('#')[0];

    if (this.currentPath === path) return;

    this.currentPath = path;

    // Update browser history
    if (window.location.pathname !== path) {
      window.history.pushState({ path }, '', path);
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
