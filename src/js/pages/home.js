/**
 * Home Page - Luxury Discovery Experience
 */

export function loadHomePage(outlet) {
  outlet.innerHTML = `
    <!-- Hero Section -->
    <section class="hero-luxury">
      <div class="container">
        <div style="max-width: 800px; margin: 0 auto; text-align: center;">
          <h1 class="display-1" style="margin-bottom: var(--space-5); color: var(--color-primary-900);">
            BadGyalLLC
          </h1>
          <p class="heading-4" style="color: var(--color-text-secondary); margin-bottom: var(--space-8); font-weight: 300;">
            Luxury Nail Artistry & Creative Digital Atelier
          </p>
          <div style="display: flex; gap: var(--space-4); justify-content: center; flex-wrap: wrap; margin-bottom: var(--space-8);">
            <a href="/discovery" class="btn btn-primary btn-lg hover-lift">Explore Portfolio</a>
            <a href="/atelier" class="btn btn-accent btn-lg hover-lift">Design Nails</a>
          </div>
          <p class="body-sm" style="color: var(--color-text-tertiary);">
            From inspiration to creation • Luxury at every step
          </p>
        </div>
      </div>
    </section>

    <!-- Services Overview -->
    <section class="section" style="background-color: var(--color-bg-secondary);">
      <div class="container">
        <div class="section-header">
          <h2 class="heading-2">Services</h2>
          <p class="body-lg" style="color: var(--color-text-secondary);">
            Premium nail artistry tailored to your vision
          </p>
        </div>

        <div class="grid grid-cols-3" style="gap: var(--space-6);">
          <div class="service-card" style="padding: var(--space-6);">
            <div style="
              font-size: 3rem;
              margin-bottom: var(--space-4);
            ">💅</div>
            <h3 class="heading-5" style="margin-bottom: var(--space-2);">Manicures</h3>
            <p class="body-sm" style="color: var(--color-text-secondary); margin-bottom: var(--space-3);">
              Custom polish, extensions, and artistic designs
            </p>
            <p class="label" style="color: var(--color-accent-600);">From $65</p>
          </div>

          <div class="service-card" style="padding: var(--space-6);">
            <div style="
              font-size: 3rem;
              margin-bottom: var(--space-4);
            ">✨</div>
            <h3 class="heading-5" style="margin-bottom: var(--space-2);">Pedicures</h3>
            <p class="body-sm" style="color: var(--color-text-secondary); margin-bottom: var(--space-3);">
              Wellness-focused foot care with luxury finishes
            </p>
            <p class="label" style="color: var(--color-accent-600);">From $85</p>
          </div>

          <div class="service-card" style="padding: var(--space-6);">
            <div style="
              font-size: 3rem;
              margin-bottom: var(--space-4);
            ">🎨</div>
            <h3 class="heading-5" style="margin-bottom: var(--space-2);">Extensions</h3>
            <p class="body-sm" style="color: var(--color-text-secondary); margin-bottom: var(--space-3);">
              Professional builder gel and acrylic systems
            </p>
            <p class="label" style="color: var(--color-accent-600);">From $120</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Portfolio -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="heading-2">Featured Designs</h2>
          <p class="body-lg" style="color: var(--color-text-secondary); margin-bottom: var(--space-6);">
            Curated collection of our most coveted creations
          </p>
        </div>

        <div class="portfolio-grid">
          ${[
            { name: 'Chrome Luxury', category: 'Manicure', emoji: '💅' },
            { name: 'Gothic Garden', category: 'Nail Art', emoji: '💅' },
            { name: 'Minimalist Chic', category: 'Pedicure', emoji: '✨' },
            { name: 'Y2K Dreams', category: 'Extensions', emoji: '💅' },
            { name: 'Nature Inspired', category: 'Manicure', emoji: '🌿' },
            { name: 'Celestial', category: 'Nail Art', emoji: '✨' },
          ].map((design, i) => `
            <div class="portfolio-item hover-lift">
              <div class="portfolio-image" style="font-size: 2rem;">
                ${design.emoji}
              </div>
              <div class="portfolio-info">
                <h3 class="heading-6" style="margin-bottom: var(--space-1);">${design.name}</h3>
                <p class="body-sm" style="color: var(--color-text-secondary); margin-bottom: var(--space-3);">
                  ${design.category}
                </p>
                <a href="/discovery" class="btn btn-secondary btn-sm" style="width: 100%;">View Details</a>
              </div>
            </div>
          `).join('')}
        </div>

        <div style="text-align: center; margin-top: var(--space-8);">
          <a href="/discovery" class="heading-6" style="color: var(--color-accent-600); text-decoration: underline;">
            View Full Portfolio →
          </a>
        </div>
      </div>
    </section>

    <!-- Why BadGyalLLC -->
    <section class="section" style="background-color: var(--color-primary-900); color: white;">
      <div class="container">
        <div class="section-header">
          <h2 class="heading-2" style="color: white; margin-bottom: var(--space-3);">Why BadGyalLLC?</h2>
          <p class="heading-5" style="color: var(--color-accent-400); font-weight: 300;">
            Experience the intersection of luxury, creativity, and technology
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-6);">
          <div style="padding: var(--space-6);">
            <h4 class="heading-5" style="color: var(--color-accent-400); margin-bottom: var(--space-2);">Expert Artistry</h4>
            <p class="body-base" style="color: rgba(255,255,255,0.9);">
              Licensed professional with years of experience in avant-garde nail design and wellness-focused care.
            </p>
          </div>

          <div style="padding: var(--space-6);">
            <h4 class="heading-5" style="color: var(--color-accent-400); margin-bottom: var(--space-2);">Digital Innovation</h4>
            <p class="body-base" style="color: rgba(255,255,255,0.9);">
              3D atelier lets you design, preview, and visualize your nails before the appointment.
            </p>
          </div>

          <div style="padding: var(--space-6);">
            <h4 class="heading-5" style="color: var(--color-accent-400); margin-bottom: var(--space-2);">Personal Service</h4>
            <p class="body-base" style="color: rgba(255,255,255,0.9);">
              Customized experience respecting your preferences, health needs, and creative vision.
            </p>
          </div>

          <div style="padding: var(--space-6);">
            <h4 class="heading-5" style="color: var(--color-accent-400); margin-bottom: var(--space-2);">Luxury Positioning</h4>
            <p class="body-base" style="color: rgba(255,255,255,0.9);">
              Premium, curated experience over high-volume commodity service.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Digital Atelier CTA -->
    <section class="section">
      <div class="container">
        <div style="
          background: linear-gradient(135deg, var(--color-primary-900) 0%, var(--color-primary-800) 100%);
          padding: var(--space-8);
          border-radius: var(--radius-xl);
          text-align: center;
          color: white;
        ">
          <h2 class="heading-2" style="color: white; margin-bottom: var(--space-3);">
            Ready to Create?
          </h2>
          <p class="heading-5" style="color: var(--color-accent-300); margin-bottom: var(--space-6); font-weight: 300;">
            Use our 3D studio to design your perfect nails
          </p>
          <a href="/atelier" class="btn btn-accent btn-lg">Open Digital Atelier</a>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section" style="background-color: var(--color-bg-secondary);">
      <div class="container container-sm">
        <div style="text-align: center;">
          <h2 class="heading-3" style="margin-bottom: var(--space-4);">Book Your Appointment</h2>
          <p class="body-base" style="color: var(--color-text-secondary); margin-bottom: var(--space-6);">
            Start with discovery, design in our atelier, and book your perfect appointment.
          </p>
          <a href="/booking" class="btn btn-primary btn-lg">Begin Booking →</a>
        </div>
      </div>
    </section>
  `;
}
