/**
 * Shop Page
 */

export function loadShopPage(outlet) {
  outlet.innerHTML = `
    <section class="section">
      <div class="container">
        <div class="section-header">
          <h1 class="section-title">Shop</h1>
          <p class="section-subtitle">Luxury nail care, press-ons, and accessories</p>
        </div>

        <div style="margin-bottom: var(--spacing-6); display: flex; gap: var(--spacing-3); flex-wrap: wrap;">
          <button class="btn btn-primary" data-category="all">All Products</button>
          <button class="btn btn-secondary" data-category="press-ons">Press-Ons</button>
          <button class="btn btn-secondary" data-category="care">Care Products</button>
          <button class="btn btn-secondary" data-category="accessories">Accessories</button>
          <button class="btn btn-secondary" data-category="merchandise">Merchandise</button>
        </div>

        <div class="product-grid">
          ${[1, 2, 3, 4, 5, 6, 7, 8].map(i => `
            <div class="product-card" data-category="press-ons">
              <div class="product-image">💅</div>
              <div class="product-body">
                <h3 class="product-name">Product ${i}</h3>
                <div class="product-price">$45</div>
                <div class="product-footer">
                  <button class="btn btn-secondary btn-sm" style="flex: 1;">View</button>
                  <button class="btn btn-accent btn-sm" style="flex: 1;">Add to Cart</button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <script>
      document.querySelectorAll('[data-category]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const category = e.target.dataset.category;

          // Update button states
          document.querySelectorAll('[data-category]').forEach(b => {
            b.classList.remove('btn-primary');
            b.classList.add('btn-secondary');
          });
          e.target.classList.remove('btn-secondary');
          e.target.classList.add('btn-primary');

          // Filter products
          document.querySelectorAll('.product-card').forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
              card.style.display = 'block';
            } else {
              card.style.display = 'none';
            }
          });
        });
      });
    </script>
  `;
}
