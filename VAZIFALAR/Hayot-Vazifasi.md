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
    "thumbnail": "https://images.unsplash.com/...",
    "videoUrl": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    "likes": 19200,
    "shares": 150,
    "description": "Лучшие моменты из сериала Ганнибал"
  }
]
```

### 🎬 Reels Video URL dan Foydalanish

**db.json da har bir reel uchun `videoUrl` bor:**

```json
{
  "id": 1,
  "movieId": 2,
  "title": "Ганнибал",
  "videoUrl": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
  "likes": 19200,
  "shares": 150
}
```

**Reels komponentida ishlatish:**

```javascript
// 1. db.json dan reels ma'lumotlarini olish
fetch('/db.json')
  .then(res => res.json())
  .then(data => {
    const reels = data.reels;
    
    // 2. Har bir reel uchun videoUrl bor
    reels.forEach(reel => {
      console.log(reel.title, reel.videoUrl);
    });
  });
```

**To'liq Misol - ReelsItem Komponenti:**

```javascript
import { useState, useRef, useEffect } from 'react';

const ReelsItem = ({ reel }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Video avtomatik o'ynatish
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Video ko'rinishda bo'lsa - o'ynat
            videoRef.current?.play();
            setIsPlaying(true);
          } else {
            // Video ko'rinishdan chiqsa - to'xtat
            videoRef.current?.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      {/* Video Player */}
      <video
        ref={videoRef}
        src={reel.videoUrl}  // ← Reel video URL dan foydalanish
        className="w-full h-full object-cover"
        loop
        muted={!isPlaying}
        playsInline
      />

      {/* Video ma'lumotlari */}
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h3 className="text-xl font-bold">{reel.title}</h3>
        <p className="text-sm">{reel.description}</p>
      </div>

      {/* Like va Share */}
      <div className="absolute right-4 bottom-20 flex flex-col gap-4">
        <button>
          ❤️ {reel.likes}
        </button>
        <button>
          🔗 {reel.shares}
        </button>
      </div>
    </div>
  );
};
```

**Reels Sahifasida Ishlatish:**

```javascript
import { useState, useEffect } from 'react';
import ReelsItem from '../components/Reels/ReelsItem';

const Reels = () => {
  const [reels, setReels] = useState([]);

  useEffect(() => {
    // db.json dan reels ma'lumotlarini olish
    fetch('/db.json')
      .then(res => res.json())
      .then(data => {
        setReels(data.reels);
      });
  }, []);

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      {reels.map(reel => (
        <div key={reel.id} className="snap-start h-screen">
          <ReelsItem reel={reel} />
        </div>
      ))}
    </div>
  );
};
```

### ⚠️ Muhim Eslatmalar:

1. **Reels Video URL alohida:**
   - Reels uchun alohida video URL lar
   - Episodes dan farq qiladi
   - Qisqa videolar (30 soniya - 2 daqiqa)

2. **Video format:**
   - MP4 formatida
   - Vertikal video (9:16 nisbat)
   - HTML5 video elementida to'g'ridan-to'g'ri ishlaydi

3. **Avtomatik o'ynatish:**
   - Reel ko'rinishda bo'lsa - avtomatik o'ynaydi
   - Boshqa reelga o'tilsa - avtomatik to'xtaydi
   - Intersection Observer ishlating

4. **Error handling:**
   ```javascript
   <video 
     src={reel.videoUrl}
     onError={(e) => {
       console.error('Reel video yuklanmadi:', e);
       // Xato xabari ko'rsatish yoki fallback video
     }}
   />
   ```

**Misol:**
```javascript
// db.json dan reels ma'lumotlarini olish
fetch('/db.json')
  .then(res => res.json())
  .then(data => {
    const reels = data.reels;
    // Har bir reel uchun komponent yaratish
    reels.forEach(reel => {
      console.log(reel.title, reel.videoUrl, reel.likes);
    });
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
