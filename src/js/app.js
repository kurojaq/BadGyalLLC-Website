/**
 * BadGyalLLC Website
 * Main application entry point
 */

import { router } from './router.js';
import { setupNavigation } from './components/navigation.js';
import { setupPageTransitions } from './utils/transitions.js';

// Initialize app
function initializeApp() {
  console.log('🚀 BadGyalLLC Platform initializing...');

  // Setup navigation
  setupNavigation();

  // Setup router
  router.init();

  // Setup page transitions
  setupPageTransitions();

  // Initialize event listeners
  setupEventListeners();

  console.log('✅ BadGyalLLC Platform ready');
}

// Global event listeners
function setupEventListeners() {
  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      document.body.classList.toggle('mobile-menu-open');
    });
  }

  // Close mobile menu on link click
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      document.body.classList.remove('mobile-menu-open');
    });
  });
}

// Start app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}

// Export for testing
export { initializeApp };
