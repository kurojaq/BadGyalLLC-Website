/**
 * Artist Dashboard Page
 */

export function loadDashboardPage(outlet) {
  outlet.innerHTML = `
    <section class="section">
      <div class="container">
        <h1 class="section-title" style="margin-bottom: var(--spacing-6);">Artist Dashboard</h1>

        <div class="grid grid-cols-4" style="margin-bottom: var(--spacing-6);">
          <div class="card">
            <h3 style="color: var(--color-accent);">12</h3>
            <p style="color: var(--color-text-light);">Appointments This Month</p>
          </div>
          <div class="card">
            <h3 style="color: var(--color-accent);">$1,250</h3>
            <p style="color: var(--color-text-light);">Revenue This Month</p>
          </div>
          <div class="card">
            <h3 style="color: var(--color-accent);">8</h3>
            <p style="color: var(--color-text-light);">Pending Approvals</p>
          </div>
          <div class="card">
            <h3 style="color: var(--color-accent);">4.8★</h3>
            <p style="color: var(--color-text-light);">Average Rating</p>
          </div>
        </div>

        <div class="grid grid-cols-2" style="margin-bottom: var(--spacing-6);">
          <div class="card">
            <h3>Today's Appointments</h3>
            <div style="margin-top: var(--spacing-4);">
              <div class="card" style="margin-bottom: var(--spacing-3); background-color: var(--color-background-alt);">
                <strong>10:00 AM - Manicure</strong>
                <p style="color: var(--color-text-light); margin-top: var(--spacing-2);">Sarah M. • Chrome Luxury Design</p>
                <button class="btn btn-secondary btn-sm" style="margin-top: var(--spacing-2); width: 100%;">View Prep Brief</button>
              </div>
              <div class="card" style="margin-bottom: var(--spacing-3); background-color: var(--color-background-alt);">
                <strong>1:00 PM - Pedicure</strong>
                <p style="color: var(--color-text-light); margin-top: var(--spacing-2);">Jessica L. • Natural Wellness</p>
                <button class="btn btn-secondary btn-sm" style="margin-top: var(--spacing-2); width: 100%;">View Prep Brief</button>
              </div>
            </div>
          </div>

          <div class="card">
            <h3>Pending Client Approvals</h3>
            <div style="margin-top: var(--spacing-4);">
              <div class="card" style="margin-bottom: var(--spacing-3); background-color: var(--color-background-alt);">
                <strong>Gothic Garden Design</strong>
                <p style="color: var(--color-text-light); margin-top: var(--spacing-2);">Client: Emma T.</p>
                <div style="display: flex; gap: var(--spacing-2); margin-top: var(--spacing-2);">
                  <button class="btn btn-success btn-sm" style="flex: 1; background-color: var(--color-success); color: white;">Approve</button>
                  <button class="btn btn-secondary btn-sm" style="flex: 1;">Request Changes</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <h3>Inventory Alerts</h3>
          <div style="margin-top: var(--spacing-3);">
            <div class="alert alert-warning" style="margin-bottom: var(--spacing-3);">
              <span>⚠️</span>
              <span><strong>Low Stock:</strong> Chrome Powder (5 remaining)</span>
            </div>
            <div class="alert alert-warning">
              <span>⚠️</span>
              <span><strong>Low Stock:</strong> Gel Base (8 remaining)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
