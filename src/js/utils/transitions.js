/**
 * Page Transitions
 * Smooth transitions between pages
 */

export function setupPageTransitions() {
  const outlet = document.getElementById('router-outlet');

  if (!outlet) return;

  // Observe outlet changes
  const observer = new MutationObserver(() => {
    // Fade in content
    outlet.style.opacity = '0';
    requestAnimationFrame(() => {
      outlet.style.transition = 'opacity 0.3s ease';
      outlet.style.opacity = '1';
    });
  });

  observer.observe(outlet, {
    childList: true,
    subtree: true,
  });
}
