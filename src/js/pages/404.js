/**
 * 404 Page
 */

export function load404Page(outlet) {
  outlet.innerHTML = `
    <section class="section">
      <div class="container container-sm" style="text-align: center;">
        <h1 style="font-size: 4rem; margin-bottom: var(--spacing-3);">404</h1>
        <h2 class="section-title">Page Not Found</h2>
        <p class="section-subtitle" style="margin-bottom: var(--spacing-6);">The page you're looking for doesn't exist or has been moved.</p>
        <a href="/" class="btn btn-primary btn-lg">Back to Home</a>
      </div>
    </section>
  `;
}
