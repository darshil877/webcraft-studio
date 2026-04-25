# WebCraft Studio — How to Edit Your Website

---

## ✅ Files You CAN Safely Edit

### 1. `data/websites.js` — Add / Change Showcase Websites
This is the main file you'll edit most often.

**To add a new website to a category:**
```js
// Find the category array e.g. healthcare: [...]
// Copy one object and paste a new one:
{
  name: "Your Clinic Name",
  desc: "Short description of the website.",
  image: "https://your-image-url.com/photo.jpg"
},
```

**To change an image:** Replace the `image` URL with any image link (Unsplash, your own hosted image, etc.)

**To change company phone / WhatsApp:** Edit the `companyInfo` object at the bottom of `data/websites.js`.

---

### 2. `index.html` — Home Page Text
- Change hero headline: find `<h1>` inside `<header class="hero">`
- Change pricing descriptions: find `<section class="pricing">`
- Change "How It Works" steps: find `<section class="how-it-works">`

### 3. `contact.html` — Contact Page
- Change info card text (business hours, etc.)

### 4. `terms.html` — Terms & Conditions
- Edit the text inside `.terms-block` divs

---

## ❌ Files You Must NOT Touch (unless you're a developer)

| File | Why |
|------|-----|
| `js/main.js` | Powers sliders and animations |
| `js/contact.js` | Sends form to WhatsApp — breaking this stops orders |
| `js/terms.js` | Terms page animations |
| `css/style.css` | Core design — editing may break layout |
| `css/contact.css` | Contact page styling |
| `css/terms.css` | Terms page styling |

---

## 📁 Folder Structure

```
webcraft-studio/
├── index.html          ← Main sales page
├── contact.html        ← Order form
├── terms.html          ← Terms & Conditions
├── data/
│   └── websites.js     ← ✅ EDIT THIS to update showcase
├── css/
│   ├── style.css       ← ❌ Don't touch
│   ├── contact.css     ← ❌ Don't touch
│   └── terms.css       ← ❌ Don't touch
└── js/
    ├── main.js         ← ❌ Don't touch
    ├── contact.js      ← ❌ Don't touch
    └── terms.js        ← ❌ Don't touch
```

---

## 📞 Changing Your Phone / WhatsApp Number

Open `data/websites.js` and find:
```js
const companyInfo = {
  phone: "7257896988",
  whatsapp: "917257896988",   // country code + number, no +
  ...
};
```
Change both values. Then in `contact.html`, also update `href="tel:+917257896988"` and `href="https://wa.me/917257896988"` links.

---

## 🖼️ How to Use Your Own Images
1. Host your image online (Google Drive, Cloudinary, imgbb.com — all free)
2. Copy the direct image URL
3. Paste it as the `image` value in `data/websites.js`

---

That's it! When in doubt, only touch `data/websites.js`.
