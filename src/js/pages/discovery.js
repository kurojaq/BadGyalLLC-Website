/**
 * Discovery/Portfolio Page
 */

export function loadDiscoveryPage(outlet) {
  outlet.innerHTML = `
    <section class="section">
      <div class="container">
        <div class="section-header">
          <h1 class="section-title">Portfolio</h1>
          <p class="section-subtitle">Luxury nail designs and creative inspiration</p>
        </div>

        <div style="margin-bottom: var(--spacing-6);">
          <div class="card">
            <div style="display: flex; gap: var(--spacing-3); flex-wrap: wrap;">
              <button class="btn btn-primary" data-filter="all">All Designs</button>
              <button class="btn btn-secondary" data-filter="manicure">Manicures</button>
              <button class="btn btn-secondary" data-filter="pedicure">Pedicures</button>
              <button class="btn btn-secondary" data-filter="art">Nail Art</button>
              <button class="btn btn-secondary" data-filter="extensions">Extensions</button>
            </div>
          </div>
        </div>

        <div class="portfolio-grid">
          ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(i => `
            <div class="portfolio-item" data-category="manicure">
              <div class="portfolio-image">💅</div>
              <div class="portfolio-info">
                <h3 class="portfolio-title">Luxury Design ${i}</h3>
                <p class="portfolio-description">
                  <span class="badge badge-primary">Manicure</span>
                </p>
                <button class="btn btn-secondary btn-sm" style="margin-top: var(--spacing-2); width: 100%;">View Details</button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;

  // Add filter functionality
  document.querySelectorAll('[data-filter]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const filter = e.target.dataset.filter;

      // Update button states
      document.querySelectorAll('[data-filter]').forEach(b => b.classList.remove('btn-primary'));
      document.querySelectorAll('[data-filter]').forEach(b => b.classList.add('btn-secondary'));
      e.target.classList.remove('btn-secondary');
      e.target.classList.add('btn-primary');

      // Filter items
      document.querySelectorAll('.portfolio-item').forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}
