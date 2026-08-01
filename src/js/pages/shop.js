/**
 * Shop Page — product catalogue with working filters and cart
 */

import { store } from '../store.js';

const PRODUCTS = [
  { id: 'po-1', name: 'Custom Press-On Set', price: 45, category: 'press-ons', emoji: '💅' },
  { id: 'po-2', name: 'Chrome Press-On Kit', price: 52, category: 'press-ons', emoji: '✨' },
  { id: 'ca-1', name: 'Cuticle Oil Duo', price: 28, category: 'care', emoji: '🧴' },
  { id: 'ca-2', name: 'Strengthening Base Coat', price: 22, category: 'care', emoji: '🧪' },
  { id: 'ca-3', name: 'Premium Care Kit', price: 35, category: 'care', emoji: '🎁' },
  { id: 'ac-1', name: 'Travel Nail File Set', price: 18, category: 'accessories', emoji: '📏' },
  { id: 'me-1', name: 'Logo Tee', price: 25, category: 'merchandise', emoji: '👕' },
  { id: 'me-2', name: 'Atelier Tote', price: 32, category: 'merchandise', emoji: '👜' },
];

const CATEGORIES = [
  { key: 'all', label: 'All products' },
  { key: 'press-ons', label: 'Press-ons' },
  { key: 'care', label: 'Care' },
  { key: 'accessories', label: 'Accessories' },
  { key: 'merchandise', label: 'Merchandise' },
];

export function loadShopPage(outlet) {
  outlet.innerHTML = `
    <section class="section">
      <div class="container">
        <div style="display: flex; justify-content: space-between; align-items: flex-end; gap: var(--space-4); flex-wrap: wrap; margin-bottom: var(--space-6);">
          <div>
            <h1 class="heading-2" style="margin-bottom: var(--space-2);">Shop</h1>
            <p class="body-base" style="color: var(--color-text-secondary);">
              Nail care, press-ons, and accessories from the atelier.
            </p>
          </div>
          <div class="cart-pill" id="cart-pill" aria-live="polite">
            <span aria-hidden="true">🛒</span>
            <span id="cart-count">0 items</span>
            <strong id="cart-total">$0.00</strong>
          </div>
        </div>

        <div role="group" aria-label="Filter products by category"
             style="display: flex; gap: var(--space-2); flex-wrap: wrap; margin-bottom: var(--space-6);">
          ${CATEGORIES.map((c, i) => `
            <button class="btn ${i === 0 ? 'btn-primary' : 'btn-secondary'}"
                    data-category="${c.key}"
                    aria-pressed="${i === 0}">${c.label}</button>
          `).join('')}
        </div>

        <div class="product-grid" id="product-grid">
          ${PRODUCTS.map(p => `
            <article class="product-card" data-category="${p.category}">
              <div class="product-image" aria-hidden="true">${p.emoji}</div>
              <div class="product-body">
                <h2 class="heading-6" style="margin-bottom: var(--space-1);">${p.name}</h2>
                <p class="product-price">$${p.price}</p>
                <button class="btn btn-accent btn-sm" style="width: 100%;"
                        data-add-to-cart="${p.id}">Add to cart</button>
              </div>
            </article>
          `).join('')}
        </div>

        <p id="empty-state" class="body-base" hidden
           style="text-align: center; color: var(--color-text-secondary); padding: var(--space-8) 0;">
          No products in this category yet.
        </p>
      </div>
    </section>
  `;

  initShop();
}

function initShop() {
  const grid = document.getElementById('product-grid');
  const emptyState = document.getElementById('empty-state');
  if (!grid) return;

  // Category filter
  document.querySelectorAll('[data-category]').forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.category;

      document.querySelectorAll('[data-category]').forEach(b => {
        const isActive = b === btn;
        b.classList.toggle('btn-primary', isActive);
        b.classList.toggle('btn-secondary', !isActive);
        b.setAttribute('aria-pressed', String(isActive));
      });

      let visible = 0;
      grid.querySelectorAll('.product-card').forEach(card => {
        const match = category === 'all' || card.dataset.category === category;
        card.hidden = !match;
        if (match) visible++;
      });

      emptyState.hidden = visible > 0;
    });
  });

  // Add to cart
  document.querySelectorAll('[data-add-to-cart]').forEach(btn => {
    btn.addEventListener('click', () => {
      const product = PRODUCTS.find(p => p.id === btn.dataset.addToCart);
      if (!product) return;

      store.addToCart(product);

      // Confirm visually without locking the button — repeat adds are valid.
      btn.textContent = 'Added ✓';
      clearTimeout(btn._resetLabel);
      btn._resetLabel = setTimeout(() => {
        btn.textContent = 'Add to cart';
      }, 1000);
    });
  });

  // Keep the cart pill in sync with the store.
  const unsubscribe = store.subscribe(state => {
    const count = state.cart.items.reduce((n, i) => n + i.quantity, 0);
    const countEl = document.getElementById('cart-count');
    const totalEl = document.getElementById('cart-total');
    if (!countEl || !totalEl) {
      unsubscribe();
      return;
    }
    countEl.textContent = `${count} item${count === 1 ? '' : 's'}`;
    totalEl.textContent = `$${state.cart.total.toFixed(2)}`;
  });

  store.notify();
}
