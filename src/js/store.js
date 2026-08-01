/**
 * State Management Store
 * Centralized state for booking, cart, and customer data
 */

class Store {
  constructor() {
    this.booking = {
      service: null,
      date: null,
      time: null,
      design: null,
      duration: null,
      basePrice: null,
      customizations: [],
      totalPrice: 0,
    };

    this.cart = {
      items: [],
      subtotal: 0,
      tax: 0,
      total: 0,
    };

    this.customer = {
      email: null,
      name: null,
      phone: null,
      preferences: {},
    };

    this.services = {
      manicure: { name: 'Manicure', duration: 60, basePrice: 65 },
      pedicure: { name: 'Pedicure', duration: 90, basePrice: 85 },
      extensions: { name: 'Extensions', duration: 120, basePrice: 120 },
      art: { name: 'Nail Art', duration: 90, basePrice: 95 },
    };

    this.products = [
      { id: 'press-on-1', name: 'Custom Press-Ons', price: 45, category: 'press-ons' },
      { id: 'care-1', name: 'Premium Nail Care Kit', price: 35, category: 'care' },
      { id: 'merch-1', name: 'Branded T-Shirt', price: 25, category: 'merchandise' },
    ];

    this.listeners = new Set();
  }

  // Booking methods
  setBookingService(serviceKey) {
    const service = this.services[serviceKey];
    if (service) {
      this.booking.service = serviceKey;
      this.booking.duration = service.duration;
      this.booking.basePrice = service.basePrice;
      this.booking.totalPrice = service.basePrice;
      this.notify();
    }
  }

  setBookingDateTime(date, time) {
    this.booking.date = date;
    this.booking.time = time;
    this.notify();
  }

  setBookingDesign(design) {
    this.booking.design = design;
    this.notify();
  }

  getBookingSummary() {
    if (!this.booking.service) return null;
    return {
      service: this.services[this.booking.service].name,
      date: this.booking.date,
      time: this.booking.time,
      duration: this.booking.duration,
      price: this.booking.totalPrice,
    };
  }

  // Cart methods
  addToCart(product) {
    const existingItem = this.cart.items.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cart.items.push({ ...product, quantity: 1 });
    }
    this.calculateCart();
    this.notify();
  }

  removeFromCart(productId) {
    this.cart.items = this.cart.items.filter(item => item.id !== productId);
    this.calculateCart();
    this.notify();
  }

  calculateCart() {
    this.cart.subtotal = this.cart.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    this.cart.tax = Math.round(this.cart.subtotal * 0.06 * 100) / 100;
    this.cart.total = this.cart.subtotal + this.cart.tax;
  }

  getCartTotal() {
    return this.cart.total;
  }

  // Customer methods
  setCustomer(email, name, phone) {
    this.customer.email = email;
    this.customer.name = name;
    this.customer.phone = phone;
    this.notify();
  }

  // Observer pattern
  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify() {
    this.listeners.forEach(listener => listener(this.getState()));
  }

  getState() {
    return {
      booking: { ...this.booking },
      cart: { ...this.cart },
      customer: { ...this.customer },
    };
  }

  reset() {
    this.booking = {
      service: null,
      date: null,
      time: null,
      design: null,
      duration: null,
      basePrice: null,
      customizations: [],
      totalPrice: 0,
    };
    this.cart.items = [];
    this.customer = {
      email: null,
      name: null,
      phone: null,
      preferences: {},
    };
    this.notify();
  }
}

export const store = new Store();
