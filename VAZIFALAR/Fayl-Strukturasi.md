# Fayl Strukturasi - Batafsil Ko'rsatma

## 📁 To'liq Fayl Strukturasi

```
Movie/
│
├── 📄 db.json                          # Ma'lumotlar ombori (mock API)
├── 📄 package.json                     # Dependencies
├── 📄 vite.config.js                   # Vite konfiguratsiyasi
├── 📄 README.md                        # Loyiha haqida
│
├── 📁 VAZIFALAR/                       # Barcha vazifa fayllari
│   ├── 📄 Akbar-Vazifasi.md           # Akbar uchun vazifalar
│   ├── 📄 Yaxyo-Vazifasi.md           # Yaxyo uchun vazifalar
│   ├── 📄 Hayot-Vazifasi.md           # Hayot uchun vazifalar
│   ├── 📄 Aziz-Vazifasi.md            # Aziz uchun vazifalar
│   ├── 📄 Safina-Vazifasi.md          # Safina uchun vazifalar
│   ├── 📄 Sitora-Vazifasi.md          # Sitora uchun vazifalar
│   ├── 📄 Jahon-Vazifasi.md           # Jahon uchun vazifalar
│   ├── 📄 GitHub-Komanda-Ishlash.md   # GitHub qo'llanmasi
│   ├── 📄 DB-JSON-Qo'llanmasi.md      # DB.json qo'llanmasi
│   └── 📄 Fayl-Strukturasi.md         # Bu fayl
│
└── 📁 src/
    ├── 📄 App.jsx                      # Asosiy App (routelar)
    ├── 📄 main.jsx                     # Entry point
    ├── 📄 index.css                    # Global CSS
    │
    ├── 📁 components/                  # Barcha komponentlar
    │   │
    │   ├── 📁 Header/                  # 👤 Aziz ishlaydi
    │   │   ├── 📄 Header.jsx          # Asosiy Header
    │   │   ├── 📄 Navigation.jsx      # Navigatsiya linklari
    │   │   └── 📄 SearchBar.jsx       # Search bar
    │   │
    │   ├── 📁 Hero/                    # 👤 Aziz ishlaydi
    │   │   └── 📄 Hero.jsx            # Hero section
    │   │
    │   ├── 📁 VideoPlayer/             # 👤 Yaxyo ishlaydi
    │   │   ├── 📄 VideoPlayer.jsx     # Asosiy video pleer
    │   │   └── 📄 SettingsMenu.jsx     # Sozlamalar menyusi
    │   │
    │   └── 📁 Reels/                   # 👤 Hayot ishlaydi
    │       └── 📄 ReelsItem.jsx        # Bitta reel komponenti
    │
    ├── 📁 pages/                       # Barcha sahifalar
    │   │
    │   ├── 📁 Home/                    # 👤 Aziz ishlaydi
    │   │   └── 📄 HomePage.jsx        # Bosh sahifa
    │   │
    │   ├── 📁 Auth/                     # 👤 Akbar ishlaydi
    │   │   ├── 📄 Login.jsx            # Login sahifasi
    │   │   ├── 📄 Register.jsx        # Register sahifasi
    │   │   └── 📄 ForgotPassword.jsx   # Forgot Password
    │   │
    │   ├── 📁 Library/                  # 👤 Akbar ishlaydi
    │   │   ├── 📄 Library.jsx          # Asosiy kutubxona
    │   │   └── 📄 RentedMovies.jsx     # Ijaraga olinganlar
    │   │
    │   ├── 📁 Profile/                  # 👤 Akbar ishlaydi
    │   │   └── 📄 ProfileSettings.jsx   # Profil sozlamalari
    │   │
    │   ├── 📁 Watch/                    # 👤 Yaxyo ishlaydi
    │   │   └── 📄 WatchPage.jsx        # Video ko'rish sahifasi
    │   │
    │   ├── 📁 Reels/                    # 👤 Hayot ishlaydi
    │   │   └── 📄 Reels.jsx            # Reels sahifasi
    │   │
    │   ├── 📁 TVChannels/               # 👤 Safina ishlaydi
    │   │   ├── 📄 TVChannels.jsx        # TV kanallar ro'yxati
    │   │   └── 📄 ChannelPage.jsx       # Bitta kanal sahifasi
    │   │
    │   ├── 📁 MovieDetail/              # 👤 Jahon ishlaydi
    │   │   └── 📄 MovieDetail.jsx      # Film tafsilotlari
    │   │
    │   └── 📁 Error/                    # 👤 Sitora ishlaydi
    │       ├── 📄 NotFound.jsx         # 404 sahifa
    │       ├── 📄 NoInternet.jsx       # Internet yo'q
    │       └── 📄 ServerError.jsx      # 500 sahifa
    │
    └── 📁 context/                      # Context API
        └── 📄 AuthContext.jsx          # 👤 Akbar ishlaydi
```

---

## 🎯 Har Bir O'quvchi Qaysi Fayllarni O'zgartiradi?

### 👤 Akbar
- ✅ `src/pages/Auth/*` - Barcha Auth sahifalar
- ✅ `src/pages/Library/*` - Library sahifalar
- ✅ `src/pages/Profile/*` - Profile sahifalar
- ✅ `src/context/AuthContext.jsx` - Auth context

### 👤 Yaxyo
- ✅ `src/components/VideoPlayer/*` - Video Player komponentlari
- ✅ `src/pages/Watch/*` - Watch sahifalar

### 👤 Hayot
- ✅ `src/components/Reels/*` - Reels komponentlari
- ✅ `src/pages/Reels/*` - Reels sahifalar

### 👤 Aziz
- ✅ `src/components/Header/*` - Header komponentlari
- ✅ `src/components/Hero/*` - Hero komponentlari
- ✅ `src/pages/Home/*` - Home sahifalar

### 👤 Safina
- ✅ `src/pages/TVChannels/*` - TV Channels sahifalar

### 👤 Sitora
- ✅ `src/pages/Error/*` - Error sahifalar

### 👤 Jahon
- ✅ `src/pages/MovieDetail/*` - Movie Detail sahifalar

---

## 📊 DB.json Strukturasi

```
db.json
├── users              # Foydalanuvchilar (Akbar ishlatadi)
├── movies             # Filmlar (Aziz, Jahon ishlatadi)
├── episodes           # Qismlar (Yaxyo, Jahon ishlatadi)
├── tvChannels         # TV kanallar (Safina ishlatadi)
├── reels              # Reels (Hayot ishlatadi)
├── subscriptions      # Obunalar (Akbar ishlatadi)
├── rentedMovies       # Ijaraga olinganlar (Akbar ishlatadi)
├── savedMovies        # Saqlanganlar (Akbar ishlatadi)
└── watchHistory       # Ko'rish tarixi (Akbar ishlatadi)
```

---

## 🔍 Qanday Topish Mumkin?

### Masalan: Login sahifasini topish

1. `src/pages/Auth/Login.jsx` faylini oching
2. Fayl ichida Akbar ismi va vazifasi yozilgan
3. VAZIFALAR/Akbar-Vazifasi.md faylini o'qing

### Masalan: Video Player ni topish

1. `src/components/VideoPlayer/VideoPlayer.jsx` faylini oching
2. Fayl ichida Yaxyo ismi va vazifasi yozilgan
3. VAZIFALAR/Yaxyo-Vazifasi.md faylini o'qing

---

## 💡 Maslahatlar

1. **Har bir fayl ichida kommentlar bor** - O'quvchi ismi va vazifasi yozilgan
2. **VAZIFALAR papkasida batafsil ma'lumot** - Har bir o'quvchi o'z vazifasini o'qishi kerak
3. **DB.json ni o'rganing** - Qanday ma'lumotlar borligini tushuning
4. **Kichikdan boshlang** - Avval oddiy qismlarni qiling

---

## ✅ Tekshiruv

Har bir o'quvchi:
- [ ] O'z vazifasini o'qidi (VAZIFALAR papkasida)
- [ ] O'z fayllarini topdi
- [ ] DB.json ni o'qib chiqdi
- [ ] GitHub ishlash tartibini tushundi

---

## 🚀 Muvaffaqiyatlar!

Barcha o'quvchilar o'z vazifalarini muvaffaqiyatli bajarishadi! 💪
