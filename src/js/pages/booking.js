/**
 * Booking Page - Enhanced Multi-Step Booking System
 */

import { store } from '../store.js';

export function loadBookingPage(outlet) {
  outlet.innerHTML = `
    <section class="section">
      <div class="container container-sm">
        <h1 class="heading-2" style="text-align: center; margin-bottom: var(--space-8);">
          Book Your Appointment
        </h1>

        <form class="booking-form">
          <!-- Step 1: Service Selection -->
          <div class="booking-step active">
            <div class="step-indicator" style="margin-bottom: var(--spacing-6);">
              <div class="step-dot active">1</div>
              <div class="step-dot">2</div>
              <div class="step-dot">3</div>
            </div>

            <h3 style="margin-bottom: var(--spacing-4);">Select Service</h3>

            <div style="display: grid; gap: var(--spacing-3);">
              <label class="card" style="cursor: pointer;">
                <input type="radio" name="service" value="manicure" checked style="margin-right: var(--spacing-2);">
                <span><strong>Manicure</strong> - 60 min • $65</span>
              </label>
              <label class="card" style="cursor: pointer;">
                <input type="radio" name="service" value="pedicure" style="margin-right: var(--spacing-2);">
                <span><strong>Pedicure</strong> - 90 min • $85</span>
              </label>
              <label class="card" style="cursor: pointer;">
                <input type="radio" name="service" value="extensions" style="margin-right: var(--spacing-2);">
                <span><strong>Extensions</strong> - 120 min • $120</span>
              </label>
              <label class="card" style="cursor: pointer;">
                <input type="radio" name="service" value="nail-art" style="margin-right: var(--spacing-2);">
                <span><strong>Nail Art</strong> - 90 min • $95</span>
              </label>
            </div>

            <button type="button" class="btn btn-primary btn-lg btn-block" style="margin-top: var(--spacing-6);" onclick="nextStep(this)">Next</button>
          </div>

          <!-- Step 2: Date & Time -->
          <div class="booking-step">
            <div class="step-indicator" style="margin-bottom: var(--spacing-6);">
              <div class="step-dot completed">✓</div>
              <div class="step-dot active">2</div>
              <div class="step-dot">3</div>
            </div>

            <h3 style="margin-bottom: var(--spacing-4);">Select Date & Time</h3>

            <div class="form-group">
              <label class="form-label">Date</label>
              <input type="date" class="form-control" required>
            </div>

            <div class="form-group">
              <label class="form-label">Time</label>
              <select class="form-control" required>
                <option value="">Select a time</option>
                <option>10:00 AM</option>
                <option>11:00 AM</option>
                <option>2:00 PM</option>
                <option>3:00 PM</option>
                <option>4:00 PM</option>
              </select>
            </div>

            <div style="display: flex; gap: var(--spacing-3);">
              <button type="button" class="btn btn-secondary btn-lg" style="flex: 1;" onclick="prevStep(this)">Back</button>
              <button type="button" class="btn btn-primary btn-lg" style="flex: 1;" onclick="nextStep(this)">Next</button>
            </div>
          </div>

          <!-- Step 3: Confirmation -->
          <div class="booking-step">
            <div class="step-indicator" style="margin-bottom: var(--spacing-6);">
              <div class="step-dot completed">✓</div>
              <div class="step-dot completed">✓</div>
              <div class="step-dot active">3</div>
            </div>

            <h3 style="margin-bottom: var(--spacing-4);">Confirm Booking</h3>

            <div class="card" style="margin-bottom: var(--spacing-4);">
              <h4>Booking Summary</h4>
              <table>
                <tr>
                  <td><strong>Service:</strong></td>
                  <td>Manicure</td>
                </tr>
                <tr>
                  <td><strong>Duration:</strong></td>
                  <td>60 minutes</td>
                </tr>
                <tr>
                  <td><strong>Date:</strong></td>
                  <td id="booking-date">-</td>
                </tr>
                <tr>
                  <td><strong>Time:</strong></td>
                  <td id="booking-time">-</td>
                </tr>
                <tr style="border-top: 2px solid var(--color-border);">
                  <td><strong>Price:</strong></td>
                  <td id="booking-price" style="color: var(--color-accent); font-weight: bold;">$65</td>
                </tr>
              </table>
            </div>

            <div class="form-group">
              <label class="form-label">Email</label>
              <input type="email" class="form-control" required>
            </div>

            <div class="form-group">
              <label class="form-label">Phone</label>
              <input type="tel" class="form-control" required>
            </div>

            <div style="display: flex; gap: var(--spacing-3);">
              <button type="button" class="btn btn-secondary btn-lg" style="flex: 1;" onclick="prevStep(this)">Back</button>
              <button type="submit" class="btn btn-accent btn-lg" style="flex: 1;">Complete Booking</button>
            </div>
          </div>
        </form>
      </div>
    </section>

    <script>
      function nextStep(btn) {
        const form = btn.closest('form');
        const currentStep = form.querySelector('.booking-step.active');
        const nextStep = currentStep.nextElementSibling;
        if (nextStep && nextStep.classList.contains('booking-step')) {
          currentStep.classList.remove('active');
          nextStep.classList.add('active');
        }
      }

      function prevStep(btn) {
        const form = btn.closest('form');
        const currentStep = form.querySelector('.booking-step.active');
        const prevStep = currentStep.previousElementSibling;
        if (prevStep && prevStep.classList.contains('booking-step')) {
          currentStep.classList.remove('active');
          prevStep.classList.add('active');
        }
      }

      // Handle form submission
      document.querySelector('.booking-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Booking submitted! (Wireframe mode)');
      });
    </script>
  `;
}
