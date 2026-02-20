# GitHub Komanda Ishlash Qo'llanmasi

## 👋 Salom O'quvchilar!

Bu qo'llanmada siz GitHub da komanda bo'lib qanday ishlashni o'rganasiz.

---

## 📚 Nima Bu GitHub?

GitHub - bu kodlarni saqlash va boshqalarga ko'rsatish uchun platforma. Bu xuddi Google Drive ga o'xshaydi, lekin kodlar uchun!

---

## 🎯 Asosiy Tushunchalar

### 1. Repository (Repo)
- Bu sizning loyihangiz papkasi
- Barcha kodlar shu yerda saqlanadi
- Masalan: "Movie" loyihasi

### 2. Commit
- Bu o'zgarishlarni saqlash
- Xuddi "Saqlash" tugmasi kabi
- Har bir commit da siz nima qilganingiz yoziladi

### 3. Push
- Bu o'zgarishlarni GitHub ga yuborish
- Xuddi faylni cloud ga yuklash kabi

### 4. Pull
- Bu boshqalarning o'zgarishlarini olish
- Xuddi yangi versiyani yuklab olish kabi

### 5. Branch
- Bu alohida ish maydoni
- Har bir o'quvchi o'z branchida ishlaydi
- Keyin barcha o'zgarishlar birlashtiriladi

---

## 🚀 Birinchi Qadamlar

### 1. GitHub Account Yaratish

1. [github.com](https://github.com) ga kiring
2. "Sign up" tugmasini bosing
3. Ma'lumotlaringizni kiriting
4. Email ni tasdiqlang

### 2. Git O'rnatish

Windows da:
1. [git-scm.com](https://git-scm.com) ga kiring
2. Git ni yuklab oling va o'rnating
3. Terminal da tekshiring:
   ```bash
   git --version
   ```

### 3. GitHub da Repository Yaratish

1. GitHub da "New repository" tugmasini bosing
2. Repository nomini kiriting (masalan: "Movie")
3. "Create repository" tugmasini bosing

---

## 👥 Komanda Ishlash

### Senaryo: 7 ta o'quvchi bir loyihada ishlayapti

**O'quvchilar:**
- Akbar (Login, Library, Profile)
- Yaxyo (Video Player)
- Hayot (Reels)
- Aziz (Header, Hero)
- Safina (TV Channels)
- Sitora (Error Pages)
- Jahon (Movie Detail)

---

## 📝 Ishlash Tartibi

### 1. Repository ni Kompyuterga Ko'chirish (Clone)

Har bir o'quvchi o'z kompyuterida:

```bash
# Terminal da
cd Desktop
git clone https://github.com/ustoz/Movie.git
cd Movie
```

### 2. O'z Branchingizni Yaratish

Har bir o'quvchi o'z branchini yaratadi:

```bash
# Akbar uchun
git checkout -b akbar-login

# Yaxyo uchun
git checkout -b yaxyo-player

# Hayot uchun
git checkout -b hayot-reels

# Aziz uchun
git checkout -b aziz-header

# Safina uchun
git checkout -b safina-channels

# Sitora uchun
git checkout -b sitora-error

# Jahon uchun
git checkout -b jahon-movie-detail
```

**Nima Bu?**
- `checkout -b` - yangi branch yaratadi va o'sha branchga o'tadi
- Har bir o'quvchi o'z branchida ishlaydi
- Boshqalarning kodlariga ta'sir qilmaydi

---

## 💻 Kundalik Ishlash

### Har bir o'quvchi kunda quyidagilarni qiladi:

#### 1. Yangi O'zgarishlarni Olish (Pull)

```bash
# Avval main branch ga o'ting
git checkout main

# Yangi o'zgarishlarni oling
git pull origin main

# O'z branchingizga qayting
git checkout akbar-login  # (yoki o'z branchingiz)
```

#### 2. O'zgarishlarni Saqlash (Commit)

```bash
# 1. O'zgarishlarni ko'rish
git status

# 2. O'zgarishlarni qo'shish
git add .

# Yoki faqat bitta fayl
git add src/pages/Auth/Login.jsx

# 3. Commit qilish (saqlash)
git commit -m "Login sahifasini yaratdim"

# Yaxshi commit xabarlari:
# ✅ "Login formasi qo'shildi"
# ✅ "Header komponenti tayyor"
# ✅ "Video player boshqaruv elementlari qo'shildi"
# ❌ "O'zgarishlar" (yomon - nima o'zgardi?)
```

#### 3. GitHub ga Yuborish (Push)

```bash
# O'zgarishlarni GitHub ga yuborish
git push origin akbar-login  # (yoki o'z branchingiz)
```

---

## 🔀 Pull Request (PR) Yaratish

### Pull Request Nima?

Bu boshqalarga aytish: "Men shu o'zgarishlarni qildim, iltimos ko'rib chiqing va qo'shing"

### Qanday Yaratiladi?

1. GitHub da o'z branchingizga kiring
2. "Compare & pull request" tugmasini bosing
3. Ma'lumotlarni to'ldiring:
   - **Title:** Nima qildingiz? (masalan: "Login sahifasini yaratdim")
   - **Description:** Batafsil ma'lumot:
     ```
     - Login formasi qo'shildi
     - Email va parol maydonlari
     - "Войти" tugmasi
     - Responsive dizayn
     ```
4. "Create pull request" tugmasini bosing

### Ustoz PR ni Ko'rib Chiqadi

- Ustoz PR ni ko'radi
- Agar hammasi yaxshi bo'lsa - "Merge" qiladi
- Agar xato bo'lsa - tuzatishni so'raydi

---

## ⚠️ Muammolar va Yechimlar

### Muammo 1: "Your branch is behind"

**Yechim:**
```bash
git checkout main
git pull origin main
git checkout akbar-login  # (o'z branchingiz)
git merge main
```

### Muammo 2: "Merge conflict"

Bu ikki kishi bir xil faylni o'zgartirganda yuzaga keladi.

**Yechim:**
1. Fayl ochiladi
2. Quyidagi belgilar ko'rinadi:
   ```
   <<<<<<< HEAD
   Sizning kodingiz
   =======
   Boshqaning kodi
   >>>>>>> main
   ```
3. Qaysi kod kerakligini tanlang
4. Belgilarni o'chiring
5. Saqlang va commit qiling

### Muammo 3: "Permission denied"

**Yechim:**
```bash
# GitHub username va email ni sozlash
git config --global user.name "Akbar"
git config --global user.email "akbar@example.com"
```

---

## 📋 Kundalik Checklist

Har bir o'quvchi kunda:

- [ ] `git pull origin main` - yangi o'zgarishlarni oldim
- [ ] O'z vazifam ustida ishladim
- [ ] `git add .` - o'zgarishlarni qo'shdim
- [ ] `git commit -m "..."` - saqladim
- [ ] `git push origin o'z-branchingiz` - GitHub ga yubordim
- [ ] Pull Request yaratdim (agar tayyor bo'lsa)

---

## 🎯 Qoidalar

### ✅ QILING:

1. **Kichik commitlar qiling:**
   - Har bir kichik o'zgarish uchun commit
   - Masalan: "Login formasi qo'shildi", "Header logo qo'shildi"

2. **Yaxshi commit xabarlari yozing:**
   - Nima qilganingizni aniq yozing
   - Masalan: "Video player play/pause funksiyasi qo'shildi"

3. **O'z branchingizda ishlang:**
   - Asosiy branch (main) ga to'g'ridan-to'g'ri yozmang
   - Avval o'z branchingizda ishlang

4. **Pull Request yaratishdan oldin test qiling:**
   - Kodingiz ishlayotganini tekshiring
   - Xatolarni tuzating

### ❌ QILMANG:

1. **Boshqalarning kodlarini o'zgartirmang:**
   - Faqat o'z vazifangiz ustida ishlang
   - Boshqalarning fayllariga tegmaslik

2. **Katta commitlar qilmang:**
   - Bir kunda barcha vazifani qilib, bir marta commit qilmang
   - Kichik-kichik commit qiling

3. **Commit xabarlarini e'tiborsiz qoldirmang:**
   - "O'zgarishlar" kabi yomon xabarlar yozmang
   - Aniq va tushunarli yozing

---

## 🚀 Muvaffaqiyatlar!

GitHub da komanda bo'lib ishlash - bu muhim ko'nikma! Buni o'rganib, professional dasturchi bo'lasiz!

**Savollar bo'lsa, ustozga so'rang!** 💪
