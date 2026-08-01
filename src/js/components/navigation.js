/**
 * Navigation Component
 * Handles navigation UI setup
 */

export function setupNavigation() {
  const navbar = document.querySelector('.navbar');
  const menuToggle = document.getElementById('menu-toggle');

  if (!navbar || !menuToggle) return;

  // Add mobile menu
  const mobileMenu = document.createElement('div');
  mobileMenu.className = 'mobile-menu';
  mobileMenu.innerHTML = `
    <ul class="mobile-menu-list">
      <li><a href="/" class="nav-link">Home</a></li>
      <li><a href="/discovery" class="nav-link">Portfolio</a></li>
      <li><a href="/atelier" class="nav-link">Studio</a></li>
      <li><a href="/booking" class="nav-link">Book</a></li>
      <li><a href="/shop" class="nav-link">Shop</a></li>
      <li><a href="/account" class="nav-link">Account</a></li>
    </ul>
  `;

  navbar.appendChild(mobileMenu);

  // Toggle mobile menu
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });
}
