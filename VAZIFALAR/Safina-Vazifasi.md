# Safina - Vazifalaringiz

## 👋 Salom Safina!

Sizning vazifangiz **TV Channels** (TV kanallar) sahifasini yaratishdir. Bu sahifada foydalanuvchilar barcha TV kanallarni ko'rishlari va tomosha qilishlari mumkin.

---

## 📋 Asosiy Vazifalar

### 1. TV Channels Sahifasi (`src/pages/TVChannels/TVChannels.jsx`)

**Kerakli elementlar:**

- ✅ **Sahifa sarlavhasi:** "Телеканалы" (TV Kanallar)
- ✅ **Kategoriya filtrlari:**
  - "Все" (Hammasi)
  - "Национальные" (Milliy)
  - "Спортивные" (Sport)
  - "Детские" (Bolalar)
  - "Познавательные" (Ma'lumotli)
  - "Новостные" (Yangiliklar)
  - "Музыкальные" (Musiqa)
  - "Культурные" (Madaniy)
  - "Развлекательные" (Ko'ngilochar)
- ✅ **Kanal kartalari grid:**
  - Har bir kanal uchun karta
  - Kanal logosi
  - Kanal nomi
  - Karta bosilganda - kanal sahifasiga o'tadi

---

### 2. Individual Channel Page (Bitta kanal sahifasi) - `src/pages/TVChannels/ChannelPage.jsx`

**Kerakli elementlar:**

- ✅ **Video Player:**
  - Katta video player
  - Live stream ko'rsatadi
  - Video boshqaruv elementlari (play, volume, fullscreen)
  - Video sarlavhasi (yuqorida)

- ✅ **Kanal ma'lumotlari:**
  - Kanal nomi (masalan: "ZO'R TV")
  - Kanal tavsifi

- ✅ **Расписание программы** (Dastur jadvali):
  - "Сегодня" (Bugun)
  - "Завтра" (Ertaga)
  - Keyingi kunlar
  - Har bir dastur uchun:
    - Vaqt (masalan: 20:00)
    - Dastur nomi
    - Joriy dastur qizil rangda highlight qilinadi

- ✅ **"Вам также может понравиться"** (Sizga ham yoqishi mumkin):
  - Boshqa kanallar yoki dasturlar ro'yxati
  - Thumbnail rasmlar bilan

---

## 🗂️ Fayl Strukturasi

Siz quyidagi fayllarni yaratishingiz kerak:

```
src/
├── pages/
│   └── TVChannels/
│       ├── TVChannels.jsx        (Barcha kanallar ro'yxati)
│       ├── ChannelPage.jsx       (Bitta kanal sahifasi)
│       └── ChannelGrid.jsx       (Kanal kartalari grid)
├── components/
│   └── TVChannels/
│       ├── ChannelCard.jsx       (Bitta kanal kartasi)
│       ├── ChannelPlayer.jsx     (Kanal video player)
│       ├── ProgramSchedule.jsx   (Dastur jadvali)
│       └── CategoryFilter.jsx    (Kategoriya filtrlari)
```

---

## 📊 DB.json dan Ma'lumot Olish

`db.json` faylida `tvChannels` bo'limi bor:

```json
"tvChannels": [
  {
    "id": 1,
    "name": "ZO'R TV",
    "category": "Спортивные",
    "logo": "...",
    "description": "Спортивный канал с трансляциями футбольных матчей",
    "streamUrl": "https://example.com/stream1.m3u8",
    "schedule": [
      {
        "date": "2025-12-19",
        "time": "20:00",
        "title": "FC Barcelona vs Real Madrid | UEFA Champions League"
      }
    ]
  }
]
```

**Misol:**
```javascript
// db.json dan kanallarni olish
fetch('/db.json')
  .then(res => res.json())
  .then(data => {
    const channels = data.tvChannels;
    
    // Barcha kanallarni ko'rsatish
    // Yoki kategoriya bo'yicha filtrlash
    const sportsChannels = channels.filter(
      ch => ch.category === "Спортивные"
    );
  });
```

---

## 🎨 Dizayn

### TV Channels Sahifasi:
- Dark theme (qora fon)
- Kategoriya filtrlari (yuqorida, gorizontal scroll)
- Kanal kartalari grid (6 ta ustun, responsive)
- Har bir karta:
  - Kanal logosi (markazda, rangli kvadrat)
  - Kanal nomi (pastda, oq matn)
  - Hover effekti (yoziladi)

### Channel Page:
- Katta video player (yuqorida)
- Kanal ma'lumotlari (video ostida)
- Dastur jadvali (jadval ko'rinishida)
- Joriy dastur qizil rangda
- "Sizga ham yoqishi mumkin" bo'limi (grid ko'rinishida)

---

## 🎬 Funksiyalar

### 1. Kategoriya Filtrlari:
- Kategoriya tanlanganda - faqat shu kategoriyadagi kanallar ko'rsatiladi
- "Все" tanlanganda - barcha kanallar ko'rsatiladi
- Faol kategoriya highlight qilinadi

### 2. Kanal Kartasi:
- Karta bosilganda - kanal sahifasiga o'tadi
- Hover effekti (yoziladi, shadow)

### 3. Video Player:
- Live stream o'ynatadi
- Video boshqaruv elementlari ishlaydi

### 4. Dastur Jadvali:
- Bugungi va ertangi dasturlar ko'rsatiladi
- Joriy dastur qizil rangda
- Vaqt va dastur nomi ko'rsatiladi

---

## ✅ Tekshiruv Ro'yxati

- [ ] TV Channels sahifasi yaratilgan
- [ ] Kategoriya filtrlari ishlayapti
- [ ] Kanal kartalari ko'rsatilmoqda
- [ ] Kanal kartasi bosilganda sahifaga o'tadi
- [ ] Channel Page yaratilgan
- [ ] Video player ishlayapti
- [ ] Kanal ma'lumotlari ko'rsatilmoqda
- [ ] Dastur jadvali ko'rsatilmoqda
- [ ] Joriy dastur highlight qilingan
- [ ] "Sizga ham yoqishi mumkin" bo'limi bor
- [ ] DB.json dan ma'lumotlar olinyapti
- [ ] Responsive dizayn qilingan

---

## 💡 Maslahatlar

1. **Kichikdan boshlang:**
   - Avval kanallar ro'yxatini qiling
   - Keyin kanal sahifasini qiling

2. **Filtr funksiyasi:**
   - `useState` ishlating kategoriya holatini saqlash uchun
   - `filter()` metodidan foydalaning

3. **Video Player:**
   - HTML5 video elementidan foydalaning
   - Yoki video.js kabi kutubxonadan

4. **Responsive dizayn:**
   - Desktop: 6 ta ustun
   - Tablet: 4 ta ustun
   - Mobil: 2 ta ustun

---

## 🚀 Muvaffaqiyatlar!

TV Channels sahifasi - bu muhim qism! Siz buni chiroyli va funksional qila olasiz!
