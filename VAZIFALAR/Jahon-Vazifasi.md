# Jahon - Vazifalaringiz

## 👋 Salom Jahon!

Sizning vazifangiz **Movie Detail** (Film tafsilotlari) sahifasini yaratishdir. Bu sahifada foydalanuvchilar filmlar haqida batafsil ma'lumot olishadi.

---

## 📋 Asosiy Vazifa

### Movie Detail Sahifasi (`src/pages/MovieDetail/MovieDetail.jsx`)

Siz quyidagi bo'limlarni yaratishingiz kerak:

#### 1. Hero Section (Yuqori qism)

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
    - Yosh cheklovi (masalan: 18+)
  - **Tugmalar:**
    - "Смотреть сериал" (Qizil tugma, play ikonkasi bilan) - video player sahifasiga o'tadi
    - Yoki "Арендовать за 10.000 UZS" (agar film ijaraga olinadigan bo'lsa)
    - Bookmark ikonkasi (saqlash)
  - **Ijara ma'lumoti** (agar ijaraga olinadigan bo'lsa):
    - "Возможность просмотреть в течении 48 часов" (48 soat ichida ko'rish imkoniyati)

---

#### 2. Detailed Information Section (Batafsil ma'lumotlar)

**Kerakli bo'limlar:**

- ✅ **Film poster/banner:**
  - Vertikal poster rasm
  - "НОВЫЙ СЕЗОН" (Yangi mavsum) yozuvi
  - Telekanal va vaqt (masalan: "ТНТ 2 ДЕКАБРЯ 20:00")

- ✅ **Batafsil tavsif:**
  - Uzunroq paragraf - film haqida batafsil ma'lumot

- ✅ **Cast & Crew (Aktyorlar va ekipaj):**
  - "В главных ролях" (Bosh rollarda) - aktyorlar ro'yxati
  - "Режиссёры" (Rejissyorlar) - rejissyorlar ro'yxati
  - "Аудиодорожки" (Audio tillar) - audio tillar ro'yxati
  - "Субтитры" (Subtitrlar) - subtitrlar ro'yxati

- ✅ **Seasons & Episodes (Mavsumlar va qismlar):**
  - "Сезон 1" (1-mavsum) - mavsum raqami
  - Qismlar ro'yxati (1, 2, 3, 4, 5...)
  - Qismlar thumbnaillari (gorizontal scroll):
    - Har bir qism uchun rasm
    - Qism nomi (masalan: "1 серия")
    - Davomiyligi (masalan: "41 мин")
    - Qism bosilganda - video player ochiladi

- ✅ **Актеры (Aktyorlar) bo'limi:**
  - Aktyorlar rasmlari (headshots)
  - Aktyorlar ismlari

---

## 🗂️ Fayl Strukturasi

Siz quyidagi fayllarni yaratishingiz kerak:

```
src/
├── pages/
│   └── MovieDetail/
│       ├── MovieDetail.jsx        (Asosiy sahifa)
│       ├── MovieHero.jsx          (Hero section)
│       ├── MovieInfo.jsx          (Batafsil ma'lumotlar)
│       └── EpisodesList.jsx       (Qismlar ro'yxati)
└── components/
    └── MovieDetail/
        ├── MoviePoster.jsx        (Film poster)
        ├── CastCrew.jsx           (Aktyorlar va ekipaj)
        ├── EpisodeCard.jsx        (Bitta qism kartasi)
        └── RentButton.jsx         (Ijara tugmasi)
```

---

## 📊 DB.json dan Ma'lumot Olish

`db.json` faylida `movies` va `episodes` bo'limlari bor:

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
    "poster": "...",
    "heroImage": "...",
    "director": "...",
    "actors": [...],
    "audioTracks": [...],
    "subtitles": [...],
    "isRentable": true,
    "rentPrice": 10000
  }
]
```

**Misol:**
```javascript
// db.json dan film ma'lumotlarini olish
fetch('/db.json')
  .then(res => res.json())
  .then(data => {
    const movies = data.movies;
    const episodes = data.episodes;
    
    // URL dan film ID ni olish (masalan: /movie/1)
    const movieId = 1;
    const movie = movies.find(m => m.id === movieId);
    const movieEpisodes = episodes.filter(ep => ep.movieId === movieId);
  });
```

---

## 🎨 Dizayn

### Desktop Versiya:
- Katta hero section (yuqorida)
- Batafsil ma'lumotlar (pastda, scroll qilinadi)
- Responsive dizayn

### Mobil Versiya:
- Vertikal hero section
- Batafsil ma'lumotlar (pastda)
- Qismlar ro'yxati (gorizontal scroll)

---

## 🎬 Funksiyalar

### 1. "Смотреть сериал" Tugmasi:
- Tugma bosilganda - video player sahifasiga o'tadi
- Yoki birinchi qismni o'ynatadi

### 2. "Арендовать" Tugmasi (agar ijaraga olinadigan bo'lsa):
- Tugma bosilganda - to'lov sahifasiga o'tadi
- Yoki modal ochiladi

### 3. Bookmark Tugmasi:
- Tugma bosilganda - film saqlanganlar ro'yxatiga qo'shiladi

### 4. Qismlar:
- Qism bosilganda - video player ochiladi
- Qism tanlanganda - video o'sha qismdan boshlanadi

### 5. Carousel (agar bir nechta film bo'lsa):
- Pagination dots bilan boshqarish
- Avtomatik o'zgarish (ixtiyoriy)

---

## ✅ Tekshiruv Ro'yxati

- [ ] Movie Detail sahifasi yaratilgan
- [ ] Hero section ko'rsatilmoqda
- [ ] Film ma'lumotlari ko'rsatilmoqda
- [ ] Rating va TOP ko'rsatilmoqda
- [ ] Metadata teglar ko'rsatilmoqda
- [ ] "Смотреть сериал" tugmasi ishlayapti
- [ ] "Арендовать" tugmasi ishlayapti (agar kerak bo'lsa)
- [ ] Bookmark tugmasi ishlayapti
- [ ] Batafsil tavsif ko'rsatilmoqda
- [ ] Aktyorlar va ekipaj ko'rsatilmoqda
- [ ] Qismlar ro'yxati ko'rsatilmoqda
- [ ] Qismlar bosilganda video player ochiladi
- [ ] DB.json dan ma'lumotlar olinyapti
- [ ] Responsive dizayn qilingan
- [ ] React Router bilan bog'langan (URL dan film ID olinadi)

---

## 💡 Maslahatlar

1. **React Router ishlating:**
   ```javascript
   // URL: /movie/1
   const { id } = useParams();
   const movieId = parseInt(id);
   ```

2. **Kichikdan boshlang:**
   - Avval hero section qiling
   - Keyin batafsil ma'lumotlarni qo'shing

3. **Komponentlarni bo'ling:**
   - Har bir bo'limni alohida komponent qiling
   - Kod toza va o'qish oson bo'ladi

4. **Qismlar ro'yxati:**
   - Gorizontal scroll qiling
   - Har bir qism kartasi chiroyli bo'lsin

---

## 🚀 Muvaffaqiyatlar!

Movie Detail sahifasi - bu loyihaning eng muhim sahifalaridan biri! Siz buni chiroyli va funksional qila olasiz!
