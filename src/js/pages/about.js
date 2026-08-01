/**
 * About Page - Brand Story
 */

export function loadAboutPage(outlet) {
  outlet.innerHTML = `
    <!-- Hero -->
    <section class="hero-luxury">
      <div class="container">
        <h1 class="display-1" style="margin-bottom: var(--space-4);">Our Story</h1>
        <p class="heading-4" style="color: var(--color-text-secondary); margin-bottom: var(--space-8); font-weight: 300;">
          From passion to profession, building the future of beauty
        </p>
      </div>
    </section>

    <!-- Brand Story -->
    <section class="section">
      <div class="container container-sm">
        <div style="margin-bottom: var(--space-8);">
          <h2 class="heading-2" style="margin-bottom: var(--space-4);">The Beginning</h2>
          <p class="body-lg" style="margin-bottom: var(--space-4);">
            BadGyalLLC began with a simple vision: to elevate nail artistry from a commodity service to a premium creative experience.
          </p>
          <p class="body-base" style="color: var(--color-text-secondary); margin-bottom: var(--space-4);">
            Rooted in Pennsylvania's vibrant beauty community, BadGyalLLC combines professional expertise with innovative technology. We believe that nails are a form of self-expression—a canvas for creativity, confidence, and personal style.
          </p>
          <p class="body-base" style="color: var(--color-text-secondary);">
            What started as a licensed professional passion has evolved into a full-stack digital beauty platform, merging artistry with technology to create something entirely new.
          </p>
        </div>

        <div style="margin-bottom: var(--space-8);">
          <h2 class="heading-2" style="margin-bottom: var(--space-4);">Our Mission</h2>
          <div class="card" style="background-color: var(--color-accent-100); border-color: var(--color-accent-600);">
            <p class="heading-5" style="color: var(--color-accent-900); margin-bottom: var(--space-3);">
              Transform nail artistry from commodity service into premium creative experience
            </p>
            <p class="body-base" style="color: var(--color-accent-800);">
              We empower customers through technology, choice, and creative control while supporting professional artists and building a scalable platform for the beauty industry.
            </p>
          </div>
        </div>

        <div style="margin-bottom: var(--space-8);">
          <h2 class="heading-2" style="margin-bottom: var(--space-4);">Our Values</h2>
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-6);">
            <div class="card">
              <h4 class="heading-5" style="color: var(--color-accent-600); margin-bottom: var(--space-2);">🎨 Artistic Excellence</h4>
              <p class="body-sm" style="color: var(--color-text-secondary);">
                We pursue perfection in every design, honoring the craft of professional nail artistry.
              </p>
            </div>

            <div class="card">
              <h4 class="heading-5" style="color: var(--color-accent-600); margin-bottom: var(--space-2);">💎 Luxury Focus</h4>
              <p class="body-sm" style="color: var(--color-text-secondary);">
                Fewer, higher-value experiences over volume. Quality and intention in every interaction.
              </p>
            </div>

            <div class="card">
              <h4 class="heading-5" style="color: var(--color-accent-600); margin-bottom: var(--space-2);">🔐 Data Ownership</h4>
              <p class="body-sm" style="color: var(--color-text-secondary);">
                We own our digital estate. No platform lock-in. Your data remains yours.
              </p>
            </div>

            <div class="card">
              <h4 class="heading-5" style="color: var(--color-accent-600); margin-bottom: var(--space-2);">🌱 Sustainability</h4>
              <p class="body-sm" style="color: var(--color-text-secondary);">
                Professional products, ethical sourcing, and wellness-first service approach.
              </p>
            </div>

            <div class="card">
              <h4 class="heading-5" style="color: var(--color-accent-600); margin-bottom: var(--space-2);">🚀 Innovation</h4>
              <p class="body-sm" style="color: var(--color-text-secondary);">
                Technology enhances artistry, not replaces it. Human creativity remains central.
              </p>
            </div>

            <div class="card">
              <h4 class="heading-5" style="color: var(--color-accent-600); margin-bottom: var(--space-2);">👥 Community</h4>
              <p class="body-sm" style="color: var(--color-text-secondary);">
                Supporting beauty professionals and creating connections through shared creativity.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 class="heading-2" style="margin-bottom: var(--space-4);">Looking Forward</h2>
          <p class="body-base" style="color: var(--color-text-secondary); margin-bottom: var(--space-4);">
            BadGyalLLC is the flagship implementation of a vision for the future of professional beauty. The technology, workflows, and brand systems we've built aren't just for one artist—they're designed to scale to support beauty professionals worldwide.
          </p>
          <p class="body-base" style="color: var(--color-text-secondary); margin-bottom: var(--space-4);">
            Every feature, every interface decision, every design token is carefully considered to respect both the artistry and the business of professional beauty services.
          </p>
          <p class="body-base" style="color: var(--color-text-secondary);">
            Welcome to the future of luxury beauty. Let's create something extraordinary together.
          </p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section" style="background-color: var(--color-bg-secondary);">
      <div class="container container-sm">
        <div style="text-align: center;">
          <h2 class="heading-3" style="margin-bottom: var(--space-3);">Join Us</h2>
          <p class="body-base" style="color: var(--color-text-secondary); margin-bottom: var(--space-6);">
            Experience the intersection of luxury, creativity, and technology.
          </p>
          <div style="display: flex; gap: var(--space-4); justify-content: center;">
            <a href="/discovery" class="btn btn-primary btn-lg">Explore Portfolio</a>
            <a href="/booking" class="btn btn-secondary btn-lg">Book Appointment</a>
          </div>
        </div>
      </div>
    </section>
  `;
}
