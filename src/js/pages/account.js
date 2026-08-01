/**
 * Account Page
 */

export function loadAccountPage(outlet) {
  outlet.innerHTML = `
    <section class="section">
      <div class="container container-sm">
        <h1 class="section-title" style="margin-bottom: var(--spacing-6);">My Account</h1>

        <div class="grid grid-cols-2" style="margin-bottom: var(--spacing-6);">
          <div class="card">
            <h3>Profile</h3>
            <p style="color: var(--color-text-light); margin-bottom: var(--spacing-3);">View and edit your profile information</p>
            <button class="btn btn-secondary btn-sm">Edit Profile</button>
          </div>
          <div class="card">
            <h3>Appointments</h3>
            <p style="color: var(--color-text-light); margin-bottom: var(--spacing-3);">View your upcoming and past appointments</p>
            <button class="btn btn-secondary btn-sm">View All</button>
          </div>
        </div>

        <div class="grid grid-cols-2" style="margin-bottom: var(--spacing-6);">
          <div class="card">
            <h3>Design Archive</h3>
            <p style="color: var(--color-text-light); margin-bottom: var(--spacing-3);">Browse all your saved nail designs</p>
            <button class="btn btn-secondary btn-sm">Open Archive</button>
          </div>
          <div class="card">
            <h3>Loyalty</h3>
            <p style="color: var(--color-text-light); margin-bottom: var(--spacing-3);">Check your loyalty points and rewards</p>
            <button class="btn btn-secondary btn-sm">View Rewards</button>
          </div>
        </div>

        <div class="card">
          <h3>Recent Appointments</h3>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Service</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Oct 15, 2024</td>
                <td>Manicure</td>
                <td>$65</td>
                <td><button class="btn btn-secondary btn-sm">Rebook</button></td>
              </tr>
              <tr>
                <td>Sep 28, 2024</td>
                <td>Extensions</td>
                <td>$120</td>
                <td><button class="btn btn-secondary btn-sm">Rebook</button></td>
              </tr>
              <tr>
                <td>Sep 10, 2024</td>
                <td>Pedicure</td>
                <td>$85</td>
                <td><button class="btn btn-secondary btn-sm">Rebook</button></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="card" style="margin-top: var(--spacing-4);">
          <h3 style="color: var(--color-error);">Danger Zone</h3>
          <p style="color: var(--color-text-light); margin-bottom: var(--spacing-3);">
            Delete your account and all associated data. This action cannot be undone.
          </p>
          <button class="btn" style="background-color: var(--color-error); color: white;">Delete Account</button>
        </div>
      </div>
    </section>
  `;
}
