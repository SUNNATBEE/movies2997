# Akbar - Vazifalaringiz

## 👋 Salom Akbar!

Sizning vazifangiz **Login/Auth tizimi**, **Library (Kutubxona)** va **Profile Settings (Profil sozlamalari)** qilishdir.

---

## 📋 Asosiy Vazifalar

### 1. Login/Auth Tizimi (Kirish tizimi)

Siz quyidagi sahifalarni yaratishingiz kerak:

#### a) Login sahifasi (`src/pages/Auth/Login.jsx`)
- Email yoki telefon raqami kiritish maydoni
- Parol kiritish maydoni
- "Войти" (Kirish) tugmasi
- "Забыли пароль?" (Parolni unutdingizmi?) havolasi
- "Нет аккаунта?" (Hisobingiz yo'qmi?) havolasi

#### b) Registration sahifasi (`src/pages/Auth/Register.jsx`)
- Ism, Familiya, Email, Telefon, Parol, Parolni takrorlash maydonlari
- "Зарегистрироваться" (Ro'yxatdan o'tish) tugmasi
- Telefon raqamini tasdiqlash bosqichi (6 xonali kod)

#### c) Forgot Password sahifasi (`src/pages/Auth/ForgotPassword.jsx`)
- Email yoki telefon kiritish
- Kod yuborish
- Kodni tasdiqlash
- Yangi parol yaratish

#### d) Auth Context (`src/context/AuthContext.jsx`)
- Foydalanuvchi ma'lumotlarini saqlash
- Login/Logout funksiyalari
- Token saqlash

---

### 2. Library (Kutubxona) - `src/pages/Library/Library.jsx`

Quyidagi bo'limlarni yarating:

- **Арендованные** (Ijaraga olinganlar) - Ijaraga olingan filmlar ro'yxati
- **Сохраненные** (Saqlanganlar) - Saqlangan filmlar ro'yxati
- **История просмотра** (Ko'rish tarixi) - Ko'rilgan filmlar tarixi

Har bir bo'limda film posterlari va ma'lumotlari ko'rsatilishi kerak.

---

### 3. Profile Settings (Profil sozlamalari) - `src/pages/Profile/ProfileSettings.jsx`

Quyidagi sozlamalarni qo'shing:

- **Детали подписки** (Obuna tafsilotlari)
  - Obuna nomi
  - Obuna kunlari
  - Kunlik ko'rishlar soni
  - Narxi
  - Tugash sanasi
  - "Сменить тариф" (Tarifni o'zgartirish) tugmasi
  - "Отменить подписку" (Obunani bekor qilish) tugmasi

- **История платежей** (To'lovlar tarixi)
  - To'lovlar jadvali
  - Xizmat turi
  - Sana

---

## 🗂️ Fayl Strukturasi

Siz quyidagi fayllarni yaratishingiz kerak:

```
src/
├── pages/
│   ├── Auth/
│   │   ├── Login.jsx          (Kirish sahifasi)
│   │   ├── Register.jsx       (Ro'yxatdan o'tish)
│   │   └── ForgotPassword.jsx (Parolni tiklash)
│   ├── Library/
│   │   ├── Library.jsx        (Asosiy kutubxona)
│   │   └── RentedMovies.jsx   (Ijaraga olinganlar)
│   └── Profile/
│       └── ProfileSettings.jsx (Profil sozlamalari)
├── context/
│   └── AuthContext.jsx        (Auth context)
└── components/
    └── Auth/
        ├── LoginForm.jsx      (Login formasi)
        └── RegisterForm.jsx   (Register formasi)
```

---

## 📊 DB.json dan Ma'lumot Olish

`db.json` faylida quyidagi ma'lumotlar bor:

- `users` - Foydalanuvchilar ro'yxati
- `subscriptions` - Obuna turlari
- `rentedMovies` - Ijaraga olingan filmlar
- `savedMovies` - Saqlangan filmlar
- `watchHistory` - Ko'rish tarixi

**Misol:**
```javascript
// db.json dan ma'lumot olish
fetch('/db.json')
  .then(res => res.json())
  .then(data => {
    const users = data.users;
    const subscriptions = data.subscriptions;
  });
```

---

## 🎨 Dizayn

- Dark theme (qora fon)
- Qizil tugmalar (asosiy harakatlar uchun)
- Responsive dizayn (mobil va desktop)
- Rasmlardagi dizaynga mos kelishi kerak

---

## ✅ Tekshiruv Ro'yxati

- [ ] Login sahifasi tayyor
- [ ] Registration sahifasi tayyor
- [ ] Forgot Password sahifasi tayyor
- [ ] Auth Context yaratilgan
- [ ] Library sahifasi tayyor
- [ ] Profile Settings sahifasi tayyor
- [ ] DB.json dan ma'lumotlar olinyapti
- [ ] Responsive dizayn qilingan
- [ ] Barcha tugmalar ishlayapti

---

## 💡 Maslahatlar

1. **Kichikdan boshlang** - Avval Login sahifasini qiling, keyin boshqalarini
2. **DB.json ni o'rganing** - Qanday ma'lumotlar borligini tushuning
3. **Komponentlarni bo'ling** - Har bir sahifani kichik qismlarga bo'ling
4. **Test qiling** - Har bir qismni alohida test qiling

---

## 🚀 Muvaffaqiyatlar!

Siz buni qila olasiz! Savollar bo'lsa, ustozga so'rang.
