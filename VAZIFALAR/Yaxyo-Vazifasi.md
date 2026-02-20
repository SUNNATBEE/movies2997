# Yaxyo - Vazifalaringiz

## 👋 Salom Yaxyo!

Sizning vazifangiz **Video Player** (Video pleer) qilishdir. Bu juda muhim qism!

---

## 📋 Asosiy Vazifa

### Video Player Komponenti

Siz quyidagi funksiyalarni qo'shishingiz kerak:

#### 1. Asosiy Video Player (`src/components/VideoPlayer/VideoPlayer.jsx`)

**Kerakli funksiyalar:**

- ✅ Video o'ynatish/to'xtatish
- ✅ Video vaqtini ko'rsatish (masalan: 0:00:01 / 1:32:41)
- ✅ Progress bar (qizil chiziq - qancha ko'rilganini ko'rsatadi)
- ✅ Orqaga/oldinga o'tish (skip buttons)
- ✅ Ovozni boshqarish (volume control)
- ✅ To'liq ekran rejimi (fullscreen)
- ✅ Video sarlavhasi va qism ma'lumotlari (masalan: "Ганнибал - 1 сезон, 2 серия")

#### 2. Settings Menu (Sozlamalar menyusi) - `src/components/VideoPlayer/SettingsMenu.jsx`

Quyidagi sozlamalarni qo'shing:

- **Качество** (Sifat) - Video sifatini tanlash
  - Avto (1080p)
  - 1080p
  - 720p
  - 480p
  - 360p

- **Скорость** (Tezlik) - Video tezligini o'zgartirish
  - 2x (ikki marta tez)
  - 1.5x
  - 1.25x
  - Обычная (Oddiy - 1x)
  - 0.75x
  - 0.5x

- **Размер субтитров** (Subtitrlar o'lchami)
  - Katta
  - O'rta (Standart)
  - Kichik

#### 3. Episodes Menu (Qismlar menyusi) - `src/components/VideoPlayer/EpisodesMenu.jsx`

- Barcha qismlarni ko'rsatish
- Qismni tanlash va o'ynatish

#### 4. Audio & Subtitles (Audio va subtitrlar) - `src/components/VideoPlayer/AudioSubtitles.jsx`

- Audio tilini tanlash (masalan: Русский, English)
- Subtitrlar tilini tanlash

---

## 🗂️ Fayl Strukturasi

Siz quyidagi fayllarni yaratishingiz kerak:

```
src/
├── components/
│   └── VideoPlayer/
│       ├── VideoPlayer.jsx        (Asosiy video pleer)
│       ├── SettingsMenu.jsx        (Sozlamalar menyusi)
│       ├── EpisodesMenu.jsx        (Qismlar menyusi)
│       ├── AudioSubtitles.jsx      (Audio va subtitrlar)
│       └── VideoControls.jsx      (Video boshqaruv elementlari)
└── pages/
    └── Watch/
        └── WatchPage.jsx           (Video ko'rish sahifasi)
```

---

## 📊 DB.json dan Ma'lumot Olish

`db.json` faylida quyidagi ma'lumotlar bor:

- `episodes` - Barcha qismlar ro'yxati
  - `movieId` - Qaysi filmga tegishli
  - `season` - Qaysi mavsum
  - `episode` - Qaysi qism
  - `title` - Qism nomi
  - `duration` - Davomiyligi
  - `videoUrl` - Video manzili

**Misol:**
```javascript
// db.json dan qismlarni olish
fetch('/db.json')
  .then(res => res.json())
  .then(data => {
    const episodes = data.episodes;
    // Faqat bitta filmning qismlarini olish
    const movieEpisodes = episodes.filter(ep => ep.movieId === 1);
  });
```

---

## 🎨 Dizayn

- Dark theme (qora fon)
- Qizil progress bar
- Oq matnlar
- Responsive dizayn (mobil va desktop)
- Video ustida boshqaruv elementlari
- Settings menyusi video o'ng pastki burchakda

---

## 🎬 Video Player Elementlari

### Yuqori qism (Top Bar):
- X tugmasi (yopish)
- Video sarlavhasi (markazda)
- Qism ma'lumotlari (o'ngda)

### Pastki qism (Bottom Controls):
- **Chapda:** Play/Pause, Skip back, Skip forward, Volume, Fullscreen
- **Markazda:** Progress bar va vaqt
- **O'ngda:** Episodes, Audio & Subtitles, Settings, Fullscreen toggle

---

## ✅ Tekshiruv Ro'yxati

- [ ] Video o'ynatish/to'xtatish ishlayapti
- [ ] Progress bar ishlayapti
- [ ] Vaqt ko'rsatilmoqda
- [ ] Volume control ishlayapti
- [ ] Fullscreen rejimi ishlayapti
- [ ] Settings menyusi ochiladi
- [ ] Video sifatini o'zgartirish mumkin
- [ ] Video tezligini o'zgartirish mumkin
- [ ] Qismlarni tanlash mumkin
- [ ] Audio va subtitrlar tanlash mumkin
- [ ] Mobil versiya ishlayapti

---

## 💡 Maslahatlar

1. **HTML5 Video elementidan foydalaning:**
   ```jsx
   <video src={videoUrl} controls />
   ```

2. **React hooks ishlating:**
   - `useState` - video holatini saqlash uchun
   - `useRef` - video elementiga murojaat qilish uchun

3. **Kichikdan boshlang:**
   - Avval oddiy video pleer qiling
   - Keyin funksiyalarni qo'shing

4. **Test qiling:**
   - Har bir tugmani alohida test qiling

---

## 🚀 Muvaffaqiyatlar!

Video pleer - bu loyihaning eng muhim qismlaridan biri. Siz buni qila olasiz!
