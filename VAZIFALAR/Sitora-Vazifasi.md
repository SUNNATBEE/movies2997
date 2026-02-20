# Sitora - Vazifalaringiz

## 👋 Salom Sitora!

Sizning vazifangiz **Error Pages** (Xato sahifalari) yaratishdir. Bu sahifalar foydalanuvchi xato yuzaga kelganda ko'rinadi.

---

## 📋 Asosiy Vazifalar

Siz 3 ta xato sahifasini yaratishingiz kerak:

### 1. 404 Page (Sahifa topilmadi) - `src/pages/Error/NotFound.jsx`

**Kerakli elementlar:**

- ✅ **Katta "404" raqami** - Oq fon ustida qora matn
- ✅ **Sarlavha:** "Страница не найдена" (Sahifa topilmadi)
- ✅ **StarCinema logo** (yuqori o'ngda) - Qizil nuqta bilan
- ✅ **Tugma:** "Вернуться на главную" (Bosh sahifaga qaytish)
- ✅ **Dizayn:** Oq fon, qora matn, yumaloq to'lqin naqshlari

---

### 2. No Internet Connection (Internet yo'q) - `src/pages/Error/NoInternet.jsx`

**Kerakli elementlar:**

- ✅ **"Ууупс" (Oops) matni** - Oq fon ustida qora matn
- ✅ **Xabar:** "Нет интернет подключения. Пожалуйста, проверьте свое интернет подключение"
   (Internet ulanishi yo'q. Iltimos, internet ulanishingizni tekshiring)
- ✅ **StarCinema logo** (yuqori o'ngda)
- ✅ **Tugma:** "Вернуться на главную" (Bosh sahifaga qaytish)
- ✅ **Dizayn:** Oq fon, qora matn, yumaloq to'lqin naqshlari

---

### 3. 500 Page (Server xatosi) - `src/pages/Error/ServerError.jsx`

**Kerakli elementlar:**

- ✅ **Katta "500" raqami** - Oq fon ustida qora matn
- ✅ **Xabar:** "Возникла внутренняя ошибка. Мы уже работаем над его исправлением"
   (Ichki xato yuzaga keldi. Biz allaqachon uni tuzatish ustida ishlamoqdamiz)
- ✅ **StarCinema logo** (yuqori o'ngda)
- ✅ **Tugma:** "Вернуться на главную" (Bosh sahifaga qaytish)
- ✅ **Dizayn:** Oq fon, qora matn, yumaloq to'lqin naqshlari

---

## 🗂️ Fayl Strukturasi

Siz quyidagi fayllarni yaratishingiz kerak:

```
src/
├── pages/
│   └── Error/
│       ├── NotFound.jsx         (404 sahifa)
│       ├── NoInternet.jsx       (Internet yo'q)
│       └── ServerError.jsx      (500 sahifa)
└── components/
    └── Error/
        ├── ErrorLayout.jsx       (Umumiy error layout)
        └── ErrorButton.jsx       (Error tugmasi)
```

---

## 🎨 Dizayn

### Umumiy dizayn:
- **Fon:** Oq rang (#FFFFFF)
- **Matn:** Qora rang (#000000)
- **Naqsh:** Subtle yumaloq to'lqin naqshlari (background pattern)
- **Logo:** Yuqori o'ngda, qizil nuqta bilan
- **Tugma:** Dark grey (#333333), oq matn

### Responsive:
- Desktop: Katta ekranda chiroyli ko'rinadi
- Mobil: Kichik ekranda ham chiroyli ko'rinadi

---

## 🎬 Funksiyalar

### 1. 404 Page:
- Foydalanuvchi mavjud bo'lmagan sahifaga kirganda ko'rinadi
- "Вернуться на главную" tugmasi bosilganda - bosh sahifaga o'tadi

### 2. No Internet:
- Internet ulanishi yo'q bo'lganda ko'rinadi
- Foydalanuvchiga internetni tekshirishni aytadi
- "Вернуться на главную" tugmasi bosilganda - bosh sahifaga o'tadi

### 3. 500 Page:
- Server xatosi yuzaga kelganda ko'rinadi
- Foydalanuvchiga xato haqida ma'lumot beradi
- "Вернуться на главную" tugmasi bosilganda - bosh sahifaga o'tadi

---

## 🔧 React Router bilan Ishlash

Error sahifalarni React Router bilan bog'lash:

```javascript
// App.jsx da
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/Error/NotFound';
import NoInternet from './pages/Error/NoInternet';
import ServerError from './pages/Error/ServerError';

<Routes>
  {/* Boshqa routelar */}
  <Route path="*" element={<NotFound />} />  {/* 404 */}
  <Route path="/no-internet" element={<NoInternet />} />
  <Route path="/server-error" element={<ServerError />} />
</Routes>
```

---

## ✅ Tekshiruv Ro'yxati

- [ ] 404 sahifa yaratilgan
- [ ] No Internet sahifa yaratilgan
- [ ] 500 sahifa yaratilgan
- [ ] Barcha sahifalarda logo ko'rsatilmoqda
- [ ] "Вернуться на главную" tugmasi ishlayapti
- [ ] Dizayn rasmdagidek
- [ ] Responsive dizayn qilingan
- [ ] React Router bilan bog'langan

---

## 💡 Maslahatlar

1. **Umumiy komponent yarating:**
   - ErrorLayout komponenti - barcha error sahifalar uchun umumiy dizayn
   - Faqat matn va raqam o'zgaradi

2. **CSS:**
   - Background pattern uchun CSS gradient yoki SVG ishlating
   - Smooth animatsiyalar qo'shing

3. **Tugma funksiyasi:**
   - `useNavigate` hook ishlating bosh sahifaga o'tish uchun

4. **Kichikdan boshlang:**
   - Avval 404 sahifani qiling
   - Keyin boshqalarini qiling

---

## 🚀 Muvaffaqiyatlar!

Error sahifalar - bu foydalanuvchi tajribasining muhim qismi. Siz buni chiroyli va foydali qila olasiz!
