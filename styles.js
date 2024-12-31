:root {
  --warna-utama: #0077b6
  --warna-latar: #f9f9f9;
  --font-utama: Arial, sans-serif;
}

body {
  font-family: var(--font-utama);
  margin: 0;
  padding: 20px;
  background-color: var(--warna-latar);
}

.store-header {
  background-color: var(--warna-utama);
  color: #fff;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
```

```
// script.js
const BOT_TOKEN = process.env.BOT_TOKEN; // atau gunakan file konfigurasi
const CHAT_ID = process.env.CHAT_ID;

function submitOrder() {
  try {
    const whatsappNumber = document.getElementById("whatsapp-number").value.trim();
    if (!whatsappNumber || !whatsappNumber.match(/^\+62\d{9,12}$/)) {
      alert("Nomor WhatsApp tidak valid.");
      return;
    }
    // kode pengiriman pesan ke Telegram
  } catch (error) {
    alert("Terjadi kesalahan: " + error.message);
  }
}
```