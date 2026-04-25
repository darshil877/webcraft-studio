// ============================================================
//  WebCraft Studio — contact.js
//  Collects form data and opens WhatsApp with the message.
//  ⚠️  DO NOT EDIT unless you know JavaScript.
// ============================================================

function sendToWhatsApp() {
  const name     = document.getElementById('name').value.trim();
  const phone    = document.getElementById('phone').value.trim();
  const email    = document.getElementById('email').value.trim();
  const address  = document.getElementById('address').value.trim();
  const business = document.getElementById('business').value;
  const plan     = document.getElementById('plan').value;
  const message  = document.getElementById('message').value.trim();

  // Basic validation
  if (!name || !phone || !email || !address || !business || !plan) {
    alert('Please fill in all required fields before sending.');
    return;
  }

  const planLabel = plan === 'starter'
    ? 'Starter Website — ₹1,000'
    : 'Starter + Monthly Upgrades — ₹1,500/mo';

  const msg = `Hello WebCraft Studio! 👋

Here are my website order details:

👤 *Name:* ${name}
📞 *Phone:* ${phone}
📧 *Email:* ${email}
📍 *City/Address:* ${address}
🏢 *Business Type:* ${business}
💼 *Plan Selected:* ${planLabel}
📝 *Details:* ${message || 'No additional details provided.'}

Please confirm my order. Thank you!`;

  const encoded = encodeURIComponent(msg);
  const waNumber = '917257896988'; // ← Change this if your number changes
  window.open(`https://wa.me/${waNumber}?text=${encoded}`, '_blank');
}

// ─── NAV SCROLL (shared) ───────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    });
  }
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.querySelector('.nav-links');
  if (hamburger) {
    hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
  }
});
