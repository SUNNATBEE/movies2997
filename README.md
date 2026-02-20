# StarCinema - Movie Streaming Platform

## 📚 Loyiha Haqida

Bu loyiha - streaming platforma (Netflix, YouTube Premium ga o'xshash). 7 ta o'quvchi komanda bo'lib ishlayapti.

---

## 👥 O'quvchilar va Vazifalari

### 1. **Akbar** - Login/Auth, Library, Profile Settings
- Login sahifasi
- Registration sahifasi
- Forgot Password sahifasi
- Library (Kutubxona)
- Profile Settings

### 2. **Yaxyo** - Video Player
- Video Player komponenti
- Settings Menu
- Watch Page

### 3. **Hayot** - Reels
- Reels sahifasi
- ReelsItem komponenti

### 4. **Aziz** - Header va Hero
- Header komponenti
- Hero Section
- Home Page

### 5. **Safina** - TV Channels
- TV Channels sahifasi
- Channel Page

### 6. **Sitora** - Error Pages
- 404 Page
- No Internet Page
- 500 Page

### 7. **Jahon** - Movie Detail
- Movie Detail sahifasi

---

## 📁 Fayl Strukturasi

```
Movie/
├── db.json                    # Ma'lumotlar ombori (mock API)
├── VAZIFALAR/                 # Har bir o'quvchi uchun vazifa fayllari
│   ├── Akbar-Vazifasi.md
│   ├── Yaxyo-Vazifasi.md
│   ├── Hayot-Vazifasi.md
│   ├── Aziz-Vazifasi.md
│   ├── Safina-Vazifasi.md
│   ├── Sitora-Vazifasi.md
│   ├── Jahon-Vazifasi.md
│   ├── GitHub-Komanda-Ishlash.md
│   └── DB-JSON-Qo'llanmasi.md
├── src/
│   ├── App.jsx                # Asosiy App komponenti (routelar)
│   ├── main.jsx              # Entry point
│   ├── index.css             # Global CSS
│   ├── components/           # Komponentlar
│   │   ├── Header/          # Aziz
│   │   ├── Hero/            # Aziz
│   │   ├── VideoPlayer/     # Yaxyo
│   │   └── Reels/           # Hayot
│   ├── pages/               # Sahifalar
│   │   ├── Home/            # Aziz
│   │   ├── Auth/            # Akbar
│   │   ├── Library/         # Akbar
│   │   ├── Profile/         # Akbar
│   │   ├── Watch/           # Yaxyo
│   │   ├── Reels/           # Hayot
│   │   ├── TVChannels/      # Safina
│   │   ├── MovieDetail/     # Jahon
│   │   └── Error/           # Sitora
│   └── context/             # Context API
│       └── AuthContext.jsx  # Akbar
└── package.json
```

---

## 🚀 Qanday Boshlash?

### 1. Dependencies O'rnatish

```bash
npm install
```

### 2. Development Server Ishga Tushirish

```bash
npm run dev
```

### 3. Build Qilish

```bash
npm run build
```

---

## 📊 DB.json Qanday Ishlatiladi?

`db.json` fayli - bu mock API. Ma'lumotlarni olish uchun:

```javascript
fetch('/db.json')
  .then(res => res.json())
  .then(data => {
    const movies = data.movies;
    const users = data.users;
    // va boshqalar...
  });
```

Batafsil ma'lumot: `VAZIFALAR/DB-JSON-Qo'llanmasi.md`

---

## 🔀 GitHub Komanda Ishlash

Har bir o'quvchi:
1. O'z branchini yaratadi
2. O'z vazifasini bajaradi
3. Commit va Push qiladi
4. Pull Request yaratadi

Batafsil ma'lumot: `VAZIFALAR/GitHub-Komanda-Ishlash.md`

---

## 📝 Har Bir O'quvchi Uchun Vazifalar

Barcha vazifalar `VAZIFALAR/` papkasida. Har bir o'quvchi o'z vazifasini o'qib, ishlaydi.

---

## ✅ Tekshiruv Ro'yxati

- [ ] Barcha o'quvchilar o'z vazifalarini o'qidi
- [ ] Har bir o'quvchi o'z branchini yaratdi
- [ ] DB.json tushunildi
- [ ] GitHub ishlash tartibi tushunildi

---

## 💡 Maslahatlar

1. **Kichikdan boshlang** - Avval oddiy qismlarni qiling
2. **Komponentlarni bo'ling** - Har bir komponent alohida bo'lsin
3. **Test qiling** - Har bir qismni alohida test qiling
4. **Savollar bo'lsa so'rang** - Ustozga yoki boshqa o'quvchilarga so'rang

---

## 🎯 Muvaffaqiyatlar!

Barcha o'quvchilar o'z vazifalarini muvaffaqiyatli bajarishadi! 💪
