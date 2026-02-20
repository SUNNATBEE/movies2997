# Hayot - Vazifalaringiz

## 👋 Salom Hayot!

Sizning vazifangiz **Reels** sahifasini yaratishdir. Bu Instagram Reels yoki TikTok ga o'xshash funksiya!

---

## 📋 Asosiy Vazifa

### Reels Sahifasi

Siz quyidagi funksiyalarni qo'shishingiz kerak:

#### 1. Asosiy Reels Sahifasi (`src/pages/Reels/Reels.jsx`)

**Kerakli funksiyalar:**

- ✅ Vertikal video ko'rsatish (yuqoridan pastga)
- ✅ Video o'ynatish/to'xtatish
- ✅ Yuqoriga/pastga scroll qilish (keyingi/oldingi reel)
- ✅ Video ma'lumotlari (sarlavha, aktyorlar)
- ✅ "Смотреть фильм" (Filmnni ko'rish) tugmasi
- ✅ Like (yurak) tugmasi va soni
- ✅ Share (ulashish) tugmasi

#### 2. Reels Item Komponenti (`src/components/Reels/ReelsItem.jsx`)

Har bir reel uchun alohida komponent:

- Video player
- Video ma'lumotlari (chap pastda)
- Like va Share tugmalari (o'ngda)
- "Смотреть фильм" tugmasi

---

## 🗂️ Fayl Strukturasi

Siz quyidagi fayllarni yaratishingiz kerak:

```
src/
├── pages/
│   └── Reels/
│       └── Reels.jsx              (Asosiy Reels sahifasi)
└── components/
    └── Reels/
        ├── ReelsItem.jsx           (Bitta reel komponenti)
        └── ReelsControls.jsx       (Reels boshqaruv elementlari)
```

---

## 📊 DB.json dan Ma'lumot Olish

`db.json` faylida `reels` bo'limi bor:

```json
"reels": [
  {
    "id": 1,
    "movieId": 2,
    "title": "Ганнибал",
    "titleEn": "Hannibal",
    "thumbnail": "...",
    "videoUrl": "...",
    "likes": 19200,
    "shares": 150
  }
]
```

**Misol:**
```javascript
// db.json dan reels ma'lumotlarini olish
fetch('/db.json')
  .then(res => res.json())
  .then(data => {
    const reels = data.reels;
    // Har bir reel uchun komponent yaratish
  });
```

---

## 🎨 Dizayn

### Desktop Versiya:
- Header (yuqorida) - StarCinema logo, navigatsiya, search, login
- Video player (markazda) - katta vertikal video
- Video ma'lumotlari (chap pastda) - aktyor rasm, sarlavha, "Смотреть фильм" tugmasi
- Like va Share (o'ngda) - vertikal joylashgan
- Navigation arrows (o'ngda) - yuqoriga/pastga scroll qilish uchun

### Mobil Versiya:
- Header (yuqorida) - logo, search, hamburger menu
- Video player (markazda) - to'liq ekran vertikal video
- Video ma'lumotlari (pastda) - aktyor rasm, sarlavha, "Смотреть фильм" tugmasi
- Like va Share (o'ngda) - vertikal joylashgan

---

## 🎬 Reels Funksiyalari

### 1. Scroll Funksiyasi
- Foydalanuvchi yuqoriga scroll qilsa - oldingi reel
- Foydalanuvchi pastga scroll qilsa - keyingi reel
- Yoki arrow tugmalari bilan boshqarish

### 2. Video O'ynatish
- Reel ko'rinishda bo'lsa - avtomatik o'ynaydi
- Boshqa reelga o'tilsa - avtomatik to'xtaydi va yangisi o'ynaydi

### 3. Like Funksiyasi
- Yurak tugmasini bosganda - like qo'shiladi/olib tashlanadi
- Like soni yangilanadi

### 4. Share Funksiyasi
- Share tugmasini bosganda - ulashish menyusi ochiladi

### 5. "Смотреть фильм" Tugmasi
- Tugmani bosganda - film detail sahifasiga o'tadi

---

## ✅ Tekshiruv Ro'yxati

- [ ] Reels sahifasi yaratilgan
- [ ] Video vertikal ko'rsatilmoqda
- [ ] Scroll funksiyasi ishlayapti (yuqoriga/pastga)
- [ ] Video avtomatik o'ynayapti
- [ ] Like funksiyasi ishlayapti
- [ ] Share funksiyasi ishlayapti
- [ ] "Смотреть фильм" tugmasi ishlayapti
- [ ] Desktop versiya tayyor
- [ ] Mobil versiya tayyor
- [ ] DB.json dan ma'lumotlar olinyapti

---

## 💡 Maslahatlar

1. **Intersection Observer ishlating:**
   - Qaysi reel hozir ko'rinishda ekanligini aniqlash uchun

2. **React hooks ishlating:**
   - `useState` - joriy reel holatini saqlash
   - `useEffect` - scroll eventlarini qo'shish
   - `useRef` - video elementlariga murojaat

3. **Kichikdan boshlang:**
   - Avval bitta reel qiling
   - Keyin scroll funksiyasini qo'shing

4. **Smooth scroll:**
   - Scroll animatsiyasi silliq bo'lishi kerak

---

## 🚀 Muvaffaqiyatlar!

Reels - bu zamonaviy va qiziqarli funksiya! Siz buni qila olasiz!
