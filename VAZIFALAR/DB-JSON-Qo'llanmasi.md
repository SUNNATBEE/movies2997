# DB.json Qo'llanmasi - 10 Yoshli Bola Tushunadigan Qilib

## 👋 Salom O'quvchilar!

Bu qo'llanmada siz `db.json` faylini qanday ishlatishni o'rganasiz.

---

## 📚 Nima Bu DB.json?

`db.json` - bu **ma'lumotlar ombori** (database). Bu xuddi Excel jadvaliga o'xshaydi, lekin JSON formatida.

**Nima uchun kerak?**
- Hozircha bizda haqiqiy server yo'q
- Shuning uchun `db.json` da ma'lumotlarni saqlaymiz
- Keyinchalik haqiqiy server bilan almashtiriladi

---

## 📁 DB.json Strukturasi

`db.json` fayli quyidagi bo'limlardan iborat:

```json
{
  "users": [...],           // Foydalanuvchilar
  "movies": [...],          // Filmlar
  "episodes": [...],        // Qismlar
  "tvChannels": [...],      // TV kanallar
  "reels": [...],           // Reels
  "subscriptions": [...],   // Obunalar
  "rentedMovies": [...],    // Ijaraga olingan filmlar
  "savedMovies": [...],     // Saqlangan filmlar
  "watchHistory": [...]     // Ko'rish tarixi
}
```

---

## 🎯 Har Bir Bo'lim Nima Uchun?

### 1. `users` - Foydalanuvchilar

**Kim ishlatadi:** Akbar (Login tizimi)

**Nima bor:**
- Email, telefon, parol
- Ism, familiya
- Avatar rasm

**Qanday ishlatiladi:**
```javascript
// Login qilishda
const users = data.users;
const user = users.find(u => u.email === email && u.password === password);
```

---

### 2. `movies` - Filmlar

**Kim ishlatadi:** 
- Aziz (Hero section)
- Jahon (Movie Detail)

**Nima bor:**
- Film nomi, rating, yil
- Janr, mamlakat, yosh cheklovi
- Rasm, tavsif
- Rejissyor, aktyorlar
- Ijara narxi (agar ijaraga olinadigan bo'lsa)

**Qanday ishlatiladi:**
```javascript
// Barcha filmlarni olish
const movies = data.movies;

// Bitta filmni topish
const movie = movies.find(m => m.id === 1);

// Hero section uchun birinchi film
const featuredMovie = movies[0];
```

---

### 3. `episodes` - Qismlar

**Kim ishlatadi:**
- Yaxyo (Video Player)
- Jahon (Movie Detail)

**Nima bor:**
- Qaysi filmga tegishli (`movieId`)
- Qaysi mavsum (`season`)
- Qaysi qism (`episode`)
- Qism nomi, davomiyligi
- Video manzili

**Qanday ishlatiladi:**
```javascript
// Bitta filmning barcha qismlarini olish
const episodes = data.episodes;
const movieEpisodes = episodes.filter(ep => ep.movieId === 1);

// 1-mavsumning qismlarini olish
const season1Episodes = movieEpisodes.filter(ep => ep.season === 1);
```

---

### 4. `tvChannels` - TV Kanallar

**Kim ishlatadi:** Safina (TV Channels sahifasi)

**Nima bor:**
- Kanal nomi, kategoriyasi
- Logo rasm
- Tavsif
- Stream manzili (video manzili)
- Dastur jadvali

**Qanday ishlatiladi:**
```javascript
// Barcha kanallarni olish
const channels = data.tvChannels;

// Sport kanallarini olish
const sportsChannels = channels.filter(ch => ch.category === "Спортивные");

// Bitta kanalni topish
const channel = channels.find(ch => ch.id === 1);
```

---

### 5. `reels` - Reels

**Kim ishlatadi:** Hayot (Reels sahifasi)

**Nima bor:**
- Qaysi filmga tegishli (`movieId`)
- Sarlavha (rus va ingliz)
- Thumbnail rasm
- Video manzili
- Like va share sonlari

**Qanday ishlatiladi:**
```javascript
// Barcha reels ni olish
const reels = data.reels;

// Har bir reel uchun komponent yaratish
reels.map(reel => <ReelsItem key={reel.id} reel={reel} />);
```

---

### 6. `subscriptions` - Obunalar

**Kim ishlatadi:** Akbar (Profile Settings)

**Nima bor:**
- Obuna nomi
- Obuna kunlari
- Kunlik ko'rishlar soni
- Narxi

**Qanday ishlatiladi:**
```javascript
// Obuna ma'lumotlarini olish
const subscriptions = data.subscriptions;
const userSubscription = subscriptions[0]; // Foydalanuvchi obunasi
```

---

### 7. `rentedMovies` - Ijaraga Olingan Filmlar

**Kim ishlatadi:** Akbar (Library)

**Nima bor:**
- Qaysi foydalanuvchi (`userId`)
- Qaysi film (`movieId`)
- Ijara sanasi
- Tugash sanasi

**Qanday ishlatiladi:**
```javascript
// Foydalanuvchining ijaraga olingan filmlarini olish
const rentedMovies = data.rentedMovies;
const userRented = rentedMovies.filter(rm => rm.userId === 1);

// Qaysi filmlar ekanligini topish
const movieIds = userRented.map(rm => rm.movieId);
const movies = data.movies.filter(m => movieIds.includes(m.id));
```

---

### 8. `savedMovies` - Saqlangan Filmlar

**Kim ishlatadi:** Akbar (Library)

**Nima bor:**
- Qaysi foydalanuvchi (`userId`)
- Qaysi film (`movieId`)

**Qanday ishlatiladi:**
```javascript
// Foydalanuvchining saqlangan filmlarini olish
const savedMovies = data.savedMovies;
const userSaved = savedMovies.filter(sm => sm.userId === 1);
```

---

### 9. `watchHistory` - Ko'rish Tarixi

**Kim ishlatadi:** Akbar (Library)

**Nima bor:**
- Qaysi foydalanuvchi (`userId`)
- Qaysi film (`movieId`)
- Qaysi qism (`episodeId`)
- Qancha ko'rilgan (`lastWatchedTime`)
- Umumiy davomiylik

**Qanday ishlatiladi:**
```javascript
// Foydalanuvchining ko'rish tarixini olish
const watchHistory = data.watchHistory;
const userHistory = watchHistory.filter(wh => wh.userId === 1);
```

---

## 💻 Kodda Qanday Ishlatiladi?

### 1. DB.json ni O'qish

```javascript
// React komponentida
import { useState, useEffect } from 'react';

function MyComponent() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // DB.json dan ma'lumotlarni olish
    fetch('/db.json')
      .then(response => response.json())
      .then(data => {
        setMovies(data.movies);
      })
      .catch(error => {
        console.error('Xato:', error);
      });
  }, []);

  return (
    <div>
      {movies.map(movie => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </div>
  );
}
```

### 2. Ma'lumotlarni Filtrlash

```javascript
// Sport kanallarini olish
const sportsChannels = channels.filter(
  channel => channel.category === "Спортивные"
);

// Yuqori reytingli filmlarni olish
const topMovies = movies.filter(movie => movie.rating > 8.0);
```

### 3. Ma'lumotni Topish

```javascript
// ID bo'yicha film topish
const movie = movies.find(m => m.id === 1);

// Email bo'yicha foydalanuvchi topish
const user = users.find(u => u.email === "user@example.com");
```

---

## 🎨 Qayerda Render Qilinadi?

### Akbar (Login, Library, Profile):
- `users` - Login sahifasida
- `subscriptions` - Profile Settings da
- `rentedMovies` - Library da "Арендованные" bo'limida
- `savedMovies` - Library da "Сохраненные" bo'limida
- `watchHistory` - Library da "История просмотра" bo'limida

### Yaxyo (Video Player):
- `episodes` - Qismlarni ko'rsatish va o'ynatish uchun

### Hayot (Reels):
- `reels` - Barcha reels ni ko'rsatish uchun

### Aziz (Header, Hero):
- `movies` - Hero section da birinchi filmni ko'rsatish uchun

### Safina (TV Channels):
- `tvChannels` - Barcha kanallarni ko'rsatish uchun

### Jahon (Movie Detail):
- `movies` - Film ma'lumotlarini ko'rsatish uchun
- `episodes` - Qismlar ro'yxatini ko'rsatish uchun

---

## ✅ Tekshiruv Ro'yxati

Har bir o'quvchi:

- [ ] DB.json faylini o'qib chiqdi
- [ ] O'z vazifasiga tegishli bo'limlarni topdi
- [ ] Ma'lumotlarni qanday olishni tushundi
- [ ] Komponentida ma'lumotlarni render qildi

---

## 💡 Maslahatlar

1. **DB.json ni o'qing:**
   - Qanday ma'lumotlar borligini tushuning
   - O'z vazifangizga tegishli bo'limlarni toping

2. **Kichikdan boshlang:**
   - Avval oddiy ma'lumotlarni ko'rsating
   - Keyin murakkab funksiyalarni qo'shing

3. **Xatolarni tekshiring:**
   - Agar ma'lumot topilmasa - console.log qiling
   - Ma'lumotlar to'g'ri kelayotganini tekshiring

---

## 🚀 Muvaffaqiyatlar!

DB.json - bu sizning ma'lumotlar omboringiz! Uni to'g'ri ishlatib, chiroyli sahifalar yarating!
