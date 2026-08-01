/**
 * Booking Page — multi-step appointment flow
 *
 * Steps: service → date/time → contact details → confirmation.
 * State lives in the shared store so the summary and the atelier stay in sync.
 */

import { store } from '../store.js';

const TIME_SLOTS = ['10:00 AM', '11:30 AM', '1:00 PM', '2:30 PM', '4:00 PM'];

export function loadBookingPage(outlet) {
  const services = store.services;

  outlet.innerHTML = `
    <section class="section">
      <div class="container container-sm">
        <h1 class="heading-2" style="text-align: center;">Book Your Appointment</h1>
        <p class="body-base" style="text-align: center; color: var(--color-text-secondary); margin-bottom: var(--space-7);">
          Choose a service, pick a time, and we'll prepare for your visit.
        </p>

        <!-- Progress -->
        <ol class="step-indicator" aria-label="Booking progress">
          <li class="step-dot is-current" data-step="0"><span aria-hidden="true">1</span><span class="sr-only">Service</span></li>
          <li class="step-dot" data-step="1"><span aria-hidden="true">2</span><span class="sr-only">Date and time</span></li>
          <li class="step-dot" data-step="2"><span aria-hidden="true">3</span><span class="sr-only">Your details</span></li>
        </ol>

        <form class="booking-form" id="booking-form" novalidate>

          <!-- Step 1 — Service -->
          <fieldset class="booking-step is-active" data-step="0">
            <legend class="heading-4">Select a service</legend>
            <div style="display: grid; gap: var(--space-3); margin-bottom: var(--space-6);">
              ${Object.entries(services).map(([key, svc], i) => `
                <label class="service-option">
                  <input type="radio" name="service" value="${key}" ${i === 0 ? 'checked' : ''}>
                  <span class="service-option__body">
                    <span class="service-option__name">${svc.name}</span>
                    <span class="service-option__meta">${svc.duration} min</span>
                  </span>
                  <span class="service-option__price">$${svc.basePrice}</span>
                </label>
              `).join('')}
            </div>
            <button type="button" class="btn btn-primary btn-lg btn-block" data-nav="next">Continue</button>
          </fieldset>

          <!-- Step 2 — Date & time -->
          <fieldset class="booking-step" data-step="1">
            <legend class="heading-4">Pick a date and time</legend>

            <div class="form-group">
              <label class="form-label" for="booking-date-input">Date</label>
              <input type="date" class="form-control" id="booking-date-input" required>
              <span class="form-error" id="date-error" hidden>Please choose a date that isn't in the past.</span>
            </div>

            <div class="form-group">
              <label class="form-label" for="booking-time-input">Time</label>
              <select class="form-control" id="booking-time-input" required>
                <option value="">Select a time</option>
                ${TIME_SLOTS.map(t => `<option value="${t}">${t}</option>`).join('')}
              </select>
              <span class="form-error" id="time-error" hidden>Please choose a time slot.</span>
            </div>

            <div style="display: flex; gap: var(--space-3); margin-top: var(--space-6);">
              <button type="button" class="btn btn-secondary btn-lg" style="flex: 1;" data-nav="prev">Back</button>
              <button type="button" class="btn btn-primary btn-lg" style="flex: 1;" data-nav="next">Continue</button>
            </div>
          </fieldset>

          <!-- Step 3 — Details & confirm -->
          <fieldset class="booking-step" data-step="2">
            <legend class="heading-4">Your details</legend>

            <div class="card" style="background-color: var(--color-bg-secondary); margin-bottom: var(--space-5);">
              <h3 class="label" style="margin-bottom: var(--space-3);">Booking summary</h3>
              <dl class="summary-list" id="booking-summary"></dl>
            </div>

            <div class="form-group">
              <label class="form-label" for="customer-name">Name</label>
              <input type="text" class="form-control" id="customer-name" autocomplete="name" required>
              <span class="form-error" id="name-error" hidden>Please enter your name.</span>
            </div>

            <div class="form-group">
              <label class="form-label" for="customer-email">Email</label>
              <input type="email" class="form-control" id="customer-email" autocomplete="email" required>
              <span class="form-error" id="email-error" hidden>Please enter a valid email address.</span>
            </div>

            <div class="form-group">
              <label class="form-label" for="customer-phone">Phone</label>
              <input type="tel" class="form-control" id="customer-phone" autocomplete="tel" required>
              <span class="form-error" id="phone-error" hidden>Please enter a phone number.</span>
            </div>

            <div style="display: flex; gap: var(--space-3); margin-top: var(--space-6);">
              <button type="button" class="btn btn-secondary btn-lg" style="flex: 1;" data-nav="prev">Back</button>
              <button type="submit" class="btn btn-accent btn-lg" style="flex: 1;">Confirm booking</button>
            </div>
          </fieldset>

          <!-- Success -->
          <div class="booking-step" data-step="3">
            <div class="card" style="text-align: center; border-color: var(--color-success);">
              <p style="font-size: var(--text-5xl); margin-bottom: var(--space-3);" aria-hidden="true">✓</p>
              <h2 class="heading-4">Booking confirmed</h2>
              <p class="body-base" style="color: var(--color-text-secondary);" id="confirmation-detail"></p>
              <a href="/account" class="btn btn-primary" style="margin-top: var(--space-5);">View my appointments</a>
            </div>
          </div>
        </form>
      </div>
    </section>
  `;

  initBookingFlow();
}

function initBookingFlow() {
  const form = document.getElementById('booking-form');
  if (!form) return;

  let currentStep = 0;
  const steps = [...form.querySelectorAll('.booking-step')];
  const dots = [...document.querySelectorAll('.step-dot')];

  // Seed the store with the pre-checked service.
  const checked = form.querySelector('input[name="service"]:checked');
  if (checked) store.setBookingService(checked.value);

  // Date input: block past dates at the picker level.
  const dateInput = document.getElementById('booking-date-input');
  dateInput.min = new Date().toISOString().split('T')[0];

  function showStep(index) {
    currentStep = index;
    steps.forEach((step, i) => step.classList.toggle('is-active', i === index));
    dots.forEach((dot, i) => {
      dot.classList.toggle('is-current', i === index);
      dot.classList.toggle('is-done', i < index);
    });
    if (index === 2) renderSummary();
    // Move focus to the newly revealed step for screen-reader users.
    const heading = steps[index].querySelector('legend, h2');
    if (heading) {
      heading.setAttribute('tabindex', '-1');
      heading.focus({ preventScroll: true });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function setError(id, show) {
    const el = document.getElementById(id);
    if (el) el.hidden = !show;
    return !show;
  }

  function validateStep(index) {
    if (index === 0) return true;

    if (index === 1) {
      const date = dateInput.value;
      const time = document.getElementById('booking-time-input').value;
      const dateOk = setError('date-error', !date);
      const timeOk = setError('time-error', !time);
      if (dateOk && timeOk) store.setBookingDateTime(date, time);
      return dateOk && timeOk;
    }

    if (index === 2) {
      const name = document.getElementById('customer-name').value.trim();
      const email = document.getElementById('customer-email').value.trim();
      const phone = document.getElementById('customer-phone').value.trim();
      const nameOk = setError('name-error', !name);
      const emailOk = setError('email-error', !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
      const phoneOk = setError('phone-error', phone.replace(/\D/g, '').length < 7);
      if (nameOk && emailOk && phoneOk) store.setCustomer(email, name, phone);
      return nameOk && emailOk && phoneOk;
    }

    return true;
  }

  function renderSummary() {
    const summary = store.getBookingSummary();
    const el = document.getElementById('booking-summary');
    if (!summary || !el) return;

    const rows = [
      ['Service', summary.service],
      ['Date', formatDate(summary.date)],
      ['Time', summary.time || '—'],
      ['Duration', `${summary.duration} min`],
      ['Total', `$${summary.price}`],
    ];

    el.innerHTML = rows.map(([label, value], i) => `
      <div class="summary-row${i === rows.length - 1 ? ' summary-row--total' : ''}">
        <dt>${label}</dt>
        <dd>${value}</dd>
      </div>
    `).join('');
  }

  // Service selection keeps the store current.
  form.querySelectorAll('input[name="service"]').forEach(input => {
    input.addEventListener('change', e => store.setBookingService(e.target.value));
  });

  // Step navigation.
  form.querySelectorAll('[data-nav]').forEach(btn => {
    btn.addEventListener('click', () => {
      const dir = btn.dataset.nav;
      if (dir === 'next') {
        if (validateStep(currentStep)) showStep(currentStep + 1);
      } else {
        showStep(Math.max(0, currentStep - 1));
      }
    });
  });

  // Submit.
  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!validateStep(2)) return;

    const summary = store.getBookingSummary();
    const detail = document.getElementById('confirmation-detail');
    if (detail) {
      detail.textContent =
        `${summary.service} on ${formatDate(summary.date)} at ${summary.time}. ` +
        `A confirmation is on its way to ${store.customer.email}.`;
    }
    showStep(3);
  });

  showStep(0);
}

function formatDate(iso) {
  if (!iso) return '—';
  // Parse as local date; `new Date('2026-08-05')` is UTC and can shift a day.
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d).toLocaleDateString(undefined, {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });
}
