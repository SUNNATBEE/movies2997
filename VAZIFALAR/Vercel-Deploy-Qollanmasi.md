# Vercel Deploy Qo'llanmasi

## 🚀 Vercel ga Deploy Qilish

### Muammo: Hero qismi ko'rinmayapti

Bu muammo odatda quyidagi sabablarga ko'ra yuzaga keladi:

1. **db.json fayli topilmayapti** - 404 xatosi
2. **Asset fayllar topilmayapti** - Rasmlar, SVG fayllar
3. **Vercel konfiguratsiyasi noto'g'ri**

---

## ✅ Yechimlar

### 1. db.json ni Public Papkasiga Ko'chirish

**Muammo:** `db.json` fayli loyiha ildizida, lekin Vercel da static fayllar `public` papkasida bo'lishi kerak.

**Yechim:**
- `db.json` ni `public/` papkasiga ko'chiring
- Yoki ikkala joyda ham bo'lsin

**Tekshirish:**
```bash
# public papkasida db.json borligini tekshiring
ls public/db.json
```

---

### 2. Vercel.json Konfiguratsiyasi

Loyiha ildizida `vercel.json` fayli yaratildi. Bu fayl Vercel ga quyidagilarni aytadi:

- `db.json` faylini to'g'ri serve qilish
- CORS headers qo'shish
- Content-Type ni to'g'ri sozlash

---

### 3. Asset Fayllarni Tekshirish

**Logo.svg:**
- `src/assets/Logo.svg` mavjudligini tekshiring
- Agar yo'q bo'lsa, yarating yoki import ni o'zgartiring

**Boshqa rasmlar:**
- Barcha import qilingan asset fayllar mavjudligini tekshiring

---

## 📋 Deploy Qadamlar

### 1. GitHub ga Push Qiling

```bash
git add .
git commit -m "db.json ni public papkasiga ko'chirdim"
git push origin main
```

### 2. Vercel da Deploy

1. Vercel dashboard ga kiring
2. Project ni tanlang
3. "Redeploy" tugmasini bosing
4. Yoki avtomatik deploy bo'ladi (GitHub ga push qilganda)

---

## 🔍 Tekshirish

### Browser Console da Tekshiring

1. Browser da F12 bosing
2. Console tab ni oching
3. Quyidagi xatolarni qidiring:
   - `Failed to load resource: the server responded with a status of 404`
   - `db.json` topilmayapti
   - Asset fayllar topilmayapti

### Network Tab da Tekshiring

1. F12 → Network tab
2. Sahifani yangilang
3. `db.json` request ni toping
4. Status code ni tekshiring:
   - ✅ 200 - OK (ishlayapti)
   - ❌ 404 - Topilmadi (muammo bor)

---

## 🛠️ Muammolarni Tuzatish

### Muammo 1: db.json 404

**Yechim:**
```bash
# db.json ni public papkasiga ko'chiring
cp db.json public/db.json

# Yoki manual ravishda ko'chiring
```

### Muammo 2: Asset fayllar 404

**Yechim:**
- Barcha asset fayllar `src/assets/` papkasida bo'lishi kerak
- Yoki `public/` papkasida bo'lishi kerak

### Muammo 3: Hero qismi ko'rinmayapti

**Yechim:**
1. Browser console da xatolarni tekshiring
2. `db.json` dan ma'lumotlar kelayotganini tekshiring
3. Hero komponentida xatolarni tekshiring

---

## ✅ Tekshiruv Ro'yxati

Deploy qilishdan oldin:

- [ ] `db.json` `public/` papkasida
- [ ] `vercel.json` loyiha ildizida
- [ ] Barcha asset fayllar mavjud
- [ ] Local da ishlayapti (`npm run dev`)
- [ ] Build muvaffaqiyatli (`npm run build`)

---

## 🚀 Muvaffaqiyatlar!

Endi Vercel da Hero qismi to'g'ri ko'rinishi kerak!
