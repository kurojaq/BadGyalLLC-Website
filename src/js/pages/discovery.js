/**
 * Discovery/Portfolio Page - Luxury Portfolio Experience
 */

const designsData = [
  { name: 'Chrome Luxury', category: 'manicure', tags: ['metallic', 'luxury'], emoji: '💅' },
  { name: 'Gothic Garden', category: 'art', tags: ['dark', 'floral'], emoji: '🌹' },
  { name: 'Minimalist Line', category: 'manicure', tags: ['minimal', 'chic'], emoji: '📍' },
  { name: 'Rainbow Aura', category: 'art', tags: ['colorful', 'holographic'], emoji: '🌈' },
  { name: 'Natural Wellness', category: 'pedicure', tags: ['nude', 'wellness'], emoji: '🌿' },
  { name: 'Y2K Dreams', category: 'extensions', tags: ['fun', 'bold'], emoji: '✨' },
  { name: 'Rose Gold Gem', category: 'manicure', tags: ['gems', 'elegant'], emoji: '💎' },
  { name: 'Ocean Wave', category: 'pedicure', tags: ['beach', 'nature'], emoji: '🌊' },
  { name: 'Celestial Night', category: 'art', tags: ['stars', 'night'], emoji: '⭐' },
  { name: 'Vintage Floral', category: 'manicure', tags: ['retro', 'floral'], emoji: '🌸' },
  { name: 'Tech Modern', category: 'extensions', tags: ['geometric', 'bold'], emoji: '◼️' },
  { name: 'Sunset Ombre', category: 'pedicure', tags: ['gradient', 'warm'], emoji: '🌅' },
];

export function loadDiscoveryPage(outlet) {
  outlet.innerHTML = `
    <section class="section">
      <div class="container">
        <!-- Page Header -->
        <div style="margin-bottom: var(--space-8);">
          <h1 class="display-2" style="margin-bottom: var(--space-3);">Portfolio</h1>
          <p class="heading-5" style="color: var(--color-text-secondary); margin-bottom: var(--space-2);">
            A curated collection of luxury nail designs
          </p>
          <p class="body-sm" style="color: var(--color-text-tertiary);">
            ${designsData.length} designs • Updated regularly
          </p>
        </div>

        <!-- Filter Section -->
        <div style="margin-bottom: var(--space-8);">
          <div style="margin-bottom: var(--space-3);">
            <p class="label" style="color: var(--color-text-secondary); margin-bottom: var(--space-3);">Filter by Type</p>
            <div style="display: flex; gap: var(--space-2); flex-wrap: wrap;">
              <button class="btn btn-primary" data-filter="all">All Designs</button>
              <button class="btn btn-secondary" data-filter="manicure">Manicures</button>
              <button class="btn btn-secondary" data-filter="pedicure">Pedicures</button>
              <button class="btn btn-secondary" data-filter="art">Nail Art</button>
              <button class="btn btn-secondary" data-filter="extensions">Extensions</button>
            </div>
          </div>
        </div>

        <!-- Portfolio Grid -->
        <div class="portfolio-grid">
          ${designsData.map((design, i) => `
            <div class="portfolio-item hover-lift" data-category="${design.category}">
              <div class="portfolio-image" style="font-size: 2rem;">
                ${design.emoji}
              </div>
              <div class="portfolio-info">
                <h3 class="heading-6" style="margin-bottom: var(--space-1);">
                  ${design.name}
                </h3>
                <div style="margin-bottom: var(--space-3);">
                  ${design.tags.map(tag => `
                    <span class="badge" style="
                      display: inline-block;
                      margin-right: var(--space-1);
                      margin-bottom: var(--space-1);
                      background-color: var(--color-accent-200);
                      color: var(--color-accent-900);
                    ">${tag}</span>
                  `).join('')}
                </div>
                <button class="btn btn-secondary btn-sm" style="width: 100%;" onclick="
                  alert('Design: ${design.name}\\nCategory: ${design.category}\\n\\nView full details in your booking!');
                ">
                  View & Customize
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section" style="background-color: var(--color-bg-secondary);">
      <div class="container container-sm">
        <div style="text-align: center;">
          <h2 class="heading-3" style="margin-bottom: var(--space-3);">
            Love a Design?
          </h2>
          <p class="body-base" style="color: var(--color-text-secondary); margin-bottom: var(--space-6);">
            Use our 3D atelier to customize it, then book your appointment.
          </p>
          <div style="display: flex; gap: var(--space-4); justify-content: center;">
            <a href="/atelier" class="btn btn-primary btn-lg">Go to Atelier</a>
            <a href="/booking" class="btn btn-secondary btn-lg">Book Now</a>
          </div>
        </div>
      </div>
    </section>
  `;

  // Add filter functionality
  setTimeout(() => {
    document.querySelectorAll('[data-filter]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const filter = e.target.dataset.filter;

        // Update button states
        document.querySelectorAll('[data-filter]').forEach(b => {
          b.classList.remove('btn-primary');
          b.classList.add('btn-secondary');
        });
        e.target.classList.remove('btn-secondary');
        e.target.classList.add('btn-primary');

        // Filter items with animation
        document.querySelectorAll('.portfolio-item').forEach(item => {
          const matches = filter === 'all' || item.dataset.category === filter;
          if (matches) {
            item.style.display = 'block';
            setTimeout(() => item.style.opacity = '1', 0);
          } else {
            item.style.opacity = '0';
            setTimeout(() => item.style.display = 'none', 150);
          }
        });
      });
    });
  }, 0);
}
