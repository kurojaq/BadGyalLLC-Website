/**
 * Home Page - Luxury Discovery Experience
 */

export function loadHomePage(outlet) {
  outlet.innerHTML = `
    <!-- BadGyallery hero -->
    <section class="gallery-hero">
      <div class="gallery-hero__sparkle sparkle-one">✦</div>
      <div class="gallery-hero__sparkle sparkle-two">✧</div>
      <div class="gallery-hero__copy">
        <p class="eyebrow">The digital beauty gallery</p>
        <div class="gallery-logo-lockup">
          <img src="assets/brand/badgyallc-logo.png" alt="BadGyalLLC">
        </div>
        <p class="gallery-hero__tagline">Beauty. Bold. Baddie.<br><em>All in one gallery.</em></p>
        <p class="body-lg gallery-hero__intro">A creative world for expressive nails, personal style, and designs that refuse to blend in.</p>
        <div class="gallery-hero__actions">
          <a href="/discovery" class="btn btn-primary btn-lg">Enter the gallery <span aria-hidden="true">→</span></a>
          <a href="/atelier" class="btn btn-outline-light btn-lg">Make a design</a>
        </div>
      </div>
      <div class="gallery-hero__poster" aria-hidden="true">
        <span class="poster-sticker poster-sticker--top">☆ NEW DROP ☆</span>
        <img class="gallery-hero__emblem" src="assets/brand/badgyallery-emblem.png" alt="">
        <span class="poster-caption">made for<br>the internet</span>
        <span class="poster-url">badgyallery.exe</span>
      </div>
    </section>

    <section class="marquee-strip" aria-label="Brand themes">
      <div class="marquee-strip__track">NAIL ART <span>✦</span> PERSONAL STYLE <span>✦</span> DIGITAL ATELIER <span>✦</span> CREATIVE CARE <span>✦</span> NAIL ART <span>✦</span> PERSONAL STYLE <span>✦</span></div>
    </section>

    <section class="brand-board-section" aria-labelledby="brand-board-title">
      <div class="container brand-board-layout">
        <div class="brand-board-copy">
          <p class="eyebrow">The BadGyallery visual system</p>
          <h2 id="brand-board-title" class="heading-2">Every mark has a place.</h2>
          <p class="body-lg">From the profile icon to the signature script, the gallery is built as a flexible identity system for web, social, packaging, and the atelier.</p>
          <div class="brand-board-roles" aria-label="Brand mark roles">
            <span>Profile icon</span>
            <span>Web wordmark</span>
            <span>Video watermark</span>
            <span>Art mark</span>
          </div>
        </div>
        <figure class="brand-board-frame">
          <img src="assets/brand/badgyallery-brand-board.jpg" alt="BadGyallery brand board showing the main icon, horizontal wordmark, video watermark, signature script, art mark, banner, stickers, packaging, and social profile examples">
          <figcaption>Official mark placement guide</figcaption>
        </figure>
      </div>
    </section>

    <!-- Services Overview -->
    <section class="section gallery-section gallery-section--blush">
      <div class="container">
        <div class="section-header">
          <p class="eyebrow">Pick your portal</p>
          <h2 class="heading-2">Choose your kind of pretty.</h2>
          <p class="body-lg" style="color: var(--color-text-secondary);">
            Start with care, go full art, or build the set that only exists in your head.
          </p>
        </div>

        <div class="grid grid-cols-3" style="gap: var(--space-6);">
          <div class="service-card thematic-card thematic-card--pink" style="padding: var(--space-6);">
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

          <div class="service-card thematic-card thematic-card--violet" style="padding: var(--space-6);">
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

          <div class="service-card thematic-card thematic-card--ink" style="padding: var(--space-6);">
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
    <section class="section gallery-section">
      <div class="container">
        <div class="section-header">
          <p class="eyebrow">From the archive</p>
          <h2 class="heading-2">Currently in the gallery.</h2>
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
            <div class="portfolio-item gallery-tile hover-lift">
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
    <section class="section gallery-section gallery-section--dark" style="color: white;">
      <div class="container">
        <div class="section-header">
          <p class="eyebrow eyebrow--light">The BadGyal code</p>
          <h2 class="heading-2" style="color: white; margin-bottom: var(--space-3);">Pretty is a power move.</h2>
          <p class="heading-5" style="color: var(--color-accent-400); font-weight: 300;">
            Care, culture, and creativity in every set.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-6);">
          <div style="padding: var(--space-6);">
            <h4 class="heading-5" style="color: var(--color-accent-400); margin-bottom: var(--space-2);">01 / Expert artistry</h4>
            <p class="body-base" style="color: rgba(255,255,255,0.9);">
              Licensed professional with years of experience in avant-garde nail design and wellness-focused care.
            </p>
          </div>

          <div style="padding: var(--space-6);">
            <h4 class="heading-5" style="color: var(--color-accent-400); margin-bottom: var(--space-2);">02 / Digital play</h4>
            <p class="body-base" style="color: rgba(255,255,255,0.9);">
              3D atelier lets you design, preview, and visualize your nails before the appointment.
            </p>
          </div>

          <div style="padding: var(--space-6);">
            <h4 class="heading-5" style="color: var(--color-accent-400); margin-bottom: var(--space-2);">03 / Personal care</h4>
            <p class="body-base" style="color: rgba(255,255,255,0.9);">
              Customized experience respecting your preferences, health needs, and creative vision.
            </p>
          </div>

          <div style="padding: var(--space-6);">
            <h4 class="heading-5" style="color: var(--color-accent-400); margin-bottom: var(--space-2);">04 / Main-character energy</h4>
            <p class="body-base" style="color: rgba(255,255,255,0.9);">
              Premium, curated experience over high-volume commodity service.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Digital Atelier CTA -->
    <section class="section gallery-section">
      <div class="container">
        <div class="atelier-banner">
          <h2 class="heading-2" style="color: white; margin-bottom: var(--space-3);">
            Enter the Sparkle Lab.
          </h2>
          <p class="heading-5" style="color: var(--color-accent-300); margin-bottom: var(--space-6); font-weight: 300;">
            Build a mood, choose a shape, and make the fantasy tangible.
          </p>
          <a href="/atelier" class="btn btn-accent btn-lg">Open Digital Atelier</a>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section gallery-section gallery-section--blush">
      <div class="container container-sm">
        <div style="text-align: center;">
          <p class="eyebrow">Your next era starts here</p>
          <h2 class="heading-3" style="margin-bottom: var(--space-4);">Ready for your close-up?</h2>
          <p class="body-base" style="color: var(--color-text-secondary); margin-bottom: var(--space-6);">
            Start with discovery, design in our atelier, and book your perfect appointment.
          </p>
          <a href="/booking" class="btn btn-primary btn-lg">Begin Booking →</a>
        </div>
      </div>
    </section>
  `;
}
