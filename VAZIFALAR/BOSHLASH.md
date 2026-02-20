# 🚀 Boshlash Qo'llanmasi

## 👋 Salom O'quvchilar!

Bu qo'llanmada siz loyihani qanday boshlashni o'rganasiz.

---

## 📋 Birinchi Qadamlar

### 1. Loyihani O'rnatish

```bash
# Terminal da loyiha papkasiga kiring
cd Movie

# Dependencies o'rnating
npm install
```

### 2. O'z Vazifangizni Topish

Har bir o'quvchi `VAZIFALAR/` papkasida o'z vazifasini topadi:

- **Akbar** → `Akbar-Vazifasi.md`
- **Yaxyo** → `Yaxyo-Vazifasi.md`
- **Hayot** → `Hayot-Vazifasi.md`
- **Aziz** → `Aziz-Vazifasi.md`
- **Safina** → `Safina-Vazifasi.md`
- **Sitora** → `Sitora-Vazifasi.md`
- **Jahon** → `Jahon-Vazifasi.md`

### 3. Vazifani O'qish

O'z vazifangizni **to'liq o'qing**. Unda:
- Nima qilish kerakligi
- Qanday fayllar yaratish kerakligi
- DB.json dan qanday ma'lumot olish kerakligi
- Dizayn qanday bo'lishi kerakligi

yozilgan.

---

## 🗂️ Fayl Strukturasi

### Qaysi Fayl Qayerda?

1. **Komponentlar** → `src/components/`
2. **Sahifalar** → `src/pages/`
3. **Context** → `src/context/`
4. **Ma'lumotlar** → `db.json` (loyiha ildizida)

### O'z Fayllaringizni Topish

Har bir fayl ichida **kommentlar** bor. Unda:
- Qaysi o'quvchi ishlayotgani
- Nima vazifa qilinayotgani
- Qanday ishlatilishi kerakligi

yozilgan.

**Misol:**
```javascript
/**
 * O'QUVCHI: Akbar
 * VAZIFA: Login sahifasini yaratish
 */
```

---

## 📊 DB.json - Ma'lumotlar Ombori

`db.json` fayli - bu sizning ma'lumotlar omboringiz.

### Qanday Ishlatiladi?

```javascript
// React komponentida
useEffect(() => {
  fetch('/db.json')
    .then(res => res.json())
    .then(data => {
      const movies = data.movies;
      const users = data.users;
      // va boshqalar...
    });
}, []);
```

Batafsil ma'lumot: `VAZIFALAR/DB-JSON-Qo'llanmasi.md`

---

## 🔀 GitHub da Ishlash

### 1. O'z Branchingizni Yaratish

```bash
git checkout -b o'z-ismingiz-vazifa
# Masalan: git checkout -b akbar-login
```

### 2. O'zgarishlarni Saqlash

```bash
git add .
git commit -m "Nima qildingizni yozing"
git push origin o'z-branchingiz
```

### 3. Pull Request Yaratish

GitHub da o'z branchingizga kiring va "Compare & pull request" tugmasini bosing.

Batafsil ma'lumot: `VAZIFALAR/GitHub-Komanda-Ishlash.md`

---

## ✅ Tekshiruv Ro'yxati

Har bir o'quvchi:

- [ ] Loyihani o'rnatdi (`npm install`)
- [ ] O'z vazifasini o'qidi
- [ ] O'z fayllarini topdi
- [ ] DB.json ni o'qib chiqdi
- [ ] GitHub branch yaratdi
- [ ] Development server ishga tushirdi (`npm run dev`)

---

## 🎯 Ishlash Tartibi

### 1. Kichikdan Boshlang

Avval oddiy qismlarni qiling:
- Avval sahifa strukturasi
- Keyin dizayn
- Keyin funksiyalar

### 2. Test Qiling

Har bir qismni alohida test qiling:
- Sahifa ochiladimi?
- Ma'lumotlar ko'rsatiladimi?
- Tugmalar ishlaydimi?

### 3. Savollar Bo'lsa

- Ustozga so'rang
- Boshqa o'quvchilarga so'rang
- Vazifa faylini qayta o'qing

---

## 💡 Maslahatlar

1. **Kod yozishdan oldin rejalashtiring**
   - Nima qilmoqchisiz?
   - Qanday qilmoqchisiz?
   - Qaysi fayllar kerak?

2. **Kommentlar yozing**
   - Kod nima qilayotganini yozing
   - Boshqalar tushunishi uchun

3. **Kichik commitlar qiling**
   - Har bir kichik o'zgarish uchun commit
   - Yaxshi commit xabarlari yozing

4. **Test qiling**
   - Har bir funksiyani test qiling
   - Xatolarni tuzating

---

## 🚀 Muvaffaqiyatlar!

Siz buni qila olasiz! Kichikdan boshlang va asta-sekin murakkablashtiring.

**Savollar bo'lsa, ustozga so'rang!** 💪
