# Aziz - Vazifalaringiz

## 👋 Salom Aziz!

Sizning vazifangiz **Header** (Sarlavha) va **Hero Section** (Asosiy bo'lim) qilishdir. Bu sahifaning eng birinchi ko'rinadigan qismlari!

---

## 📋 Asosiy Vazifalar

### 1. Header Komponenti (`src/components/Header/Header.jsx`)

**Kerakli elementlar:**

- ✅ **StarCinema Logo** (chapda) - Qizil yulduz + "StarCinema" matni
- ✅ **Navigatsiya linklari** (markazda):
  - "Главная" (Bosh sahifa)
  - "TV каналы" (TV kanallar)
  - "Фильмы" (Filmlar)
  - "Reels"
- ✅ **Ikonkalar va tugmalar** (o'ngda):
  - Search ikonkasi (hover qilganda search bar ochiladi)
  - Globe ikonkasi (til tanlash)
  - User profile ikonkasi
  - "Войти" (Kirish) tugmasi

**Responsive dizayn:**
- Desktop: Barcha elementlar ko'rinadi
- Mobil: Hamburger menu (3 chiziq) ko'rsatiladi

---

### 2. Hero Section (`src/components/Hero/Hero.jsx`)

**Kerakli elementlar:**

- ✅ **Katta rasm fon** - Film aktyorlari rasmi
- ✅ **Film ma'lumotlari** (chapda):
  - Rating (masalan: 8.3) va "ТОП 250" yoki "ТОП 200"
  - Film sarlavhasi (katta oq matn)
  - Qisqa tavsif (paragraf)
  - Metadata teglar:
    - Yil (masalan: 2025)
    - Janr (masalan: комедия)
    - Mavsumlar soni (masalan: 3 сезона)
    - Mamlakat (masalan: Россия)
    - Yosh cheklovi (masalan: 16+, 18+)
  - **Tugmalar:**
    - "Смотреть сериал" (Qizil tugma, play ikonkasi bilan)
    - "О сериале" (Kulrang tugma)
  - **Ikonkalar:**
    - Bookmark (saqlash)
    - Share (ulashish)
    - Fullscreen
- ✅ **Pagination dots** (pastda) - Bir nechta film uchun carousel

**Hover effektlar:**
- "Смотреть сериал" tugmasi hover qilganda - yoritiladi

---

## 🗂️ Fayl Strukturasi

Siz quyidagi fayllarni yaratishingiz kerak:

```
src/
├── components/
│   ├── Header/
│   │   ├── Header.jsx           (Asosiy Header)
│   │   ├── Navigation.jsx       (Navigatsiya linklari)
│   │   ├── SearchBar.jsx        (Search bar - hover qilganda)
│   │   └── UserMenu.jsx         (Foydalanuvchi menyusi)
│   └── Hero/
│       ├── Hero.jsx             (Asosiy Hero section)
│       ├── HeroContent.jsx      (Film ma'lumotlari)
│       ├── HeroCarousel.jsx     (Carousel funksiyasi)
│       └── HeroControls.jsx     (Tugmalar va ikonkalar)
└── pages/
    └── Home/
        └── HomePage.jsx         (Bosh sahifa - Header va Hero ishlatiladi)
```

---

## 📊 DB.json dan Ma'lumot Olish

`db.json` faylida `movies` bo'limi bor:

```json
"movies": [
  {
    "id": 1,
    "title": "Полярный",
    "rating": 8.3,
    "topPosition": 100,
    "year": 2025,
    "genre": "комедия",
    "seasons": 3,
    "country": "Россия",
    "ageRating": "18+",
    "description": "...",
    "heroImage": "..."
  }
]
```

**Misol:**
```javascript
// db.json dan filmlarni olish
fetch('/db.json')
  .then(res => res.json())
  .then(data => {
    const movies = data.movies;
    // Hero section uchun birinchi filmni olish
    const featuredMovie = movies[0];
  });
```

---

## 🎨 Dizayn

### Header:
- Dark gey fon (#1a1a1a yoki o'xshash)
- Oq matnlar
- Qizil logo
- Hover effektlar (linklar va tugmalar)

### Hero Section:
- Katta rasm fon (1920x1080 yoki o'xshash)
- Dark overlay (rasm ustida qorong'u qatlam)
- Oq matnlar
- Qizil "Смотреть сериал" tugmasi
- Kulrang "О сериале" tugmasi
- Metadata teglar (yumaloq burchakli, rangli)

---

## 🎬 Funksiyalar

### Header:
1. **Search hover effekti:**
   - Search ikonkasi hover qilganda - search bar ochiladi
   - "Поиск" placeholder matni

2. **Navigatsiya:**
   - Har bir link bosilganda - tegishli sahifaga o'tadi
   - Faol link highlight qilinadi

3. **Responsive:**
   - Mobil versiyada hamburger menu

### Hero Section:
1. **Carousel:**
   - Bir nechta film ko'rsatish
   - Pagination dots bilan boshqarish
   - Avtomatik o'zgarish (ixtiyoriy)

2. **Tugmalar:**
   - "Смотреть сериал" - video player sahifasiga o'tadi
   - "О сериале" - film detail sahifasiga o'tadi

3. **Hover effektlar:**
   - "Смотреть сериал" tugmasi hover qilganda - yoritiladi va shadow qo'shiladi

---

## ✅ Tekshiruv Ro'yxati

### Header:
- [ ] Logo ko'rsatilmoqda
- [ ] Barcha navigatsiya linklari bor
- [ ] Search hover effekti ishlayapti
- [ ] "Войти" tugmasi ishlayapti
- [ ] Mobil versiyada hamburger menu ishlayapti
- [ ] Responsive dizayn qilingan

### Hero Section:
- [ ] Katta rasm fon ko'rsatilmoqda
- [ ] Film ma'lumotlari ko'rsatilmoqda
- [ ] Rating va TOP ko'rsatilmoqda
- [ ] Metadata teglar ko'rsatilmoqda
- [ ] "Смотреть сериал" tugmasi ishlayapti
- [ ] "О сериале" tugmasi ishlayapti
- [ ] Hover effektlar ishlayapti
- [ ] Carousel ishlayapti (agar bir nechta film bo'lsa)
- [ ] Pagination dots ko'rsatilmoqda
- [ ] DB.json dan ma'lumotlar olinyapti

---

## 💡 Maslahatlar

1. **Kichikdan boshlang:**
   - Avval Header qiling
   - Keyin Hero section qiling

2. **Komponentlarni bo'ling:**
   - Header va Hero ni kichik qismlarga bo'ling
   - Har bir qism alohida komponent bo'lsin

3. **Responsive dizayn:**
   - Avval desktop qiling
   - Keyin mobil versiyani qo'shing

4. **Hover effektlar:**
   - CSS transition ishlating
   - Smooth animatsiyalar qiling

---

## 🚀 Muvaffaqiyatlar!

Header va Hero - bu sahifaning birinchi ko'rinadigan qismlari. Siz buni chiroyli qila olasiz!
