/**
 * Home Page
 */

export function loadHomePage(outlet) {
  outlet.innerHTML = `
    <section class="hero">
      <div class="container">
        <h1 class="hero-title">BadGyalLLC</h1>
        <p class="hero-subtitle">Luxury Nail Artistry & Digital Atelier</p>
        <div class="hero-actions">
          <a href="/discovery" class="btn btn-primary btn-lg">Explore Portfolio</a>
          <a href="/atelier" class="btn btn-accent btn-lg">Visit Studio</a>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Featured Designs</h2>
          <p class="section-subtitle">Luxury nail artistry at its finest</p>
        </div>

        <div class="portfolio-grid">
          ${[1, 2, 3, 4, 5, 6].map(i => `
            <div class="portfolio-item">
              <div class="portfolio-image">💅</div>
              <div class="portfolio-info">
                <h3 class="portfolio-title">Design ${i}</h3>
                <p class="portfolio-description">Luxury nail art design showcasing exceptional craftsmanship</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <section class="section bg-primary" style="background-color: var(--color-primary); color: var(--color-text-inverse);">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title" style="color: var(--color-text-inverse);">Why BadGyalLLC?</h2>
          <p class="section-subtitle" style="color: var(--color-accent);">Experience the difference of luxury beauty</p>
        </div>

        <div class="grid grid-cols-3">
          <div class="card" style="background-color: var(--color-primary-light); border-color: var(--color-accent);">
            <h3 style="color: var(--color-accent);">✨ Expert Craftsmanship</h3>
            <p style="color: var(--color-text-inverse);">Professional nail artistry with meticulous attention to detail</p>
          </div>
          <div class="card" style="background-color: var(--color-primary-light); border-color: var(--color-accent);">
            <h3 style="color: var(--color-accent);">🎨 Creative Innovation</h3>
            <p style="color: var(--color-text-inverse);">Avant-garde designs inspired by fashion and nature</p>
          </div>
          <div class="card" style="background-color: var(--color-primary-light); border-color: var(--color-accent);">
            <h3 style="color: var(--color-accent);">💎 Luxury Experience</h3>
            <p style="color: var(--color-text-inverse);">Premium service and personalized beauty consultations</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container container-sm">
        <div class="section-header">
          <h2 class="section-title">Book Your Experience</h2>
          <p class="section-subtitle">Transform your nails into art</p>
        </div>

        <div class="card">
          <p style="margin-bottom: var(--spacing-4);">Ready to create your next nail design? Our digital atelier lets you customize, preview, and book your appointment all in one place.</p>
          <a href="/booking" class="btn btn-primary btn-lg btn-block">Book Now</a>
        </div>
      </div>
    </section>
  `;
}
