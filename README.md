# ⚡ Rapzy-GPT — Panduan Deploy Vercel

## 🔐 Kredensial Login
| Field    | Value    |
|----------|----------|
| Username | `admin`  |
| Password | `adminR` |

---

## 📁 Struktur Folder
```
rapzy-gpt/
├── index.html          ← Semua halaman (loading + login + chat)
├── vercel.json         ← Konfigurasi Vercel
├── api/
│   └── chat.js         ← Backend serverless (API key aman di server)
└── README.md
```

---

## 🚀 Cara Deploy ke Vercel (Step by Step)

### STEP 1 — Daftar Vercel
Buka → https://vercel.com → Sign Up (gratis, bisa pakai GitHub)

---

### STEP 2 — Upload Project

#### Cara A: Drag & Drop (Paling Gampang)
1. Login ke https://vercel.com/dashboard
2. Klik **"Add New..."** → **"Project"**
3. Scroll bawah → klik **"Or deploy from your local machine"** → drag & drop folder `rapzy-gpt`

#### Cara B: Via GitHub (Direkomendasikan)
1. Push folder ke repo GitHub baru
2. Vercel → **"Add New Project"** → **"Import Git Repository"**
3. Pilih repo → klik **Deploy**

---

### STEP 3 — Set API Key (WAJIB!)

1. Di dashboard Vercel, klik project kamu
2. Pergi ke tab **"Settings"** → **"Environment Variables"**
3. Klik **"Add"**
4. Isi:
   - **Name:** `ANTHROPIC_API_KEY`
   - **Value:** `sk-ant-api03-xxxxxxxx...`
   - **Environment:** centang semua (Production, Preview, Development)
5. Klik **Save**

> 🔑 Dapatkan API key di: https://console.anthropic.com

---

### STEP 4 — Redeploy

1. Klik tab **"Deployments"**
2. Klik titik tiga (**...**) di deployment teratas
3. Klik **"Redeploy"** → konfirmasi
4. Tunggu ~30 detik hingga status **"Ready"**

---

### STEP 5 — Buka Website! 🎉

Vercel akan kasih URL seperti:
`https://rapzy-gpt-xxx.vercel.app`

Login → chat → AI langsung menjawab!

---

## ✅ Checklist

- [ ] Folder terupload ke Vercel
- [ ] `api/chat.js` ada di dalam folder
- [ ] `vercel.json` ada di root folder
- [ ] `ANTHROPIC_API_KEY` sudah di-set di Environment Variables
- [ ] Redeploy setelah set env variable
- [ ] Test login: `admin` / `adminR`
- [ ] AI menjawab ✓

---

## 🛟 Troubleshooting

| Masalah | Solusi |
|---------|--------|
| AI error / tidak menjawab | Cek `ANTHROPIC_API_KEY` di Settings → Environment Variables & redeploy |
| Login gagal | `admin` / `adminR` — huruf besar/kecil penting |
| 404 di `/api/chat` | Pastikan file `api/chat.js` ada & `vercel.json` benar |
| Deploy gagal | Pastikan `vercel.json` ada di root sejajar `index.html` |

---

Made with ❤️ — Rapzy-GPT
