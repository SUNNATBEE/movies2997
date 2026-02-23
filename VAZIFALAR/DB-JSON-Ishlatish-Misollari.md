# DB.json Ishlatish Misollari

## 📚 API Utility Funksiyalari

`src/utils/api.js` faylida barcha kerakli funksiyalar bor.

---

## 💻 Kod Misollari

### 1. Filmlarni Olish (Aziz, Jahon)

```javascript
import { getMovies, getMovieById } from '../utils/api';

// Barcha filmlarni olish
const movies = await getMovies();

// Bitta filmni olish
const movie = await getMovieById(1);
```

**React komponentida:**

```javascript
import { useState, useEffect } from 'react';
import { getMovies } from '../utils/api';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      const data = await getMovies();
      setMovies(data);
    };
    loadMovies();
  }, []);

  return (
    <div>
      {movies.map(movie => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </div>
  );
};
```

---

### 2. Qismlarni Olish (Yaxyo, Jahon)

```javascript
import { getEpisodes, getEpisodeById, getEpisodesByMovieId } from '../utils/api';

// Barcha qismlarni olish
const episodes = await getEpisodes();

// Bitta qismni olish
const episode = await getEpisodeById(1);

// Filmning barcha qismlarini olish
const movieEpisodes = await getEpisodesByMovieId(1);
```

**React komponentida:**

```javascript
import { useState, useEffect } from 'react';
import { getEpisodesByMovieId } from '../utils/api';

const MovieDetail = ({ movieId }) => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const loadEpisodes = async () => {
      const data = await getEpisodesByMovieId(movieId);
      setEpisodes(data);
    };
    loadEpisodes();
  }, [movieId]);

  return (
    <div>
      {episodes.map(ep => (
        <div key={ep.id}>{ep.title}</div>
      ))}
    </div>
  );
};
```

---

### 3. Foydalanuvchilarni Olish (Akbar)

```javascript
import { getUsers, getUserByEmail } from '../utils/api';

// Barcha foydalanuvchilarni olish
const users = await getUsers();

// Email bo'yicha foydalanuvchi topish
const user = await getUserByEmail('user@example.com');
```

**Login sahifasida:**

```javascript
import { useState } from 'react';
import { getUserByEmail } from '../utils/api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    
    const user = await getUserByEmail(email);
    
    if (user && user.password === password) {
      // Login muvaffaqiyatli
      console.log('Login muvaffaqiyatli!', user);
    } else {
      // Xato
      alert('Email yoki parol noto\'g\'ri!');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input 
        type="email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input 
        type="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Kirish</button>
    </form>
  );
};
```

---

### 4. TV Kanallarni Olish (Safina)

```javascript
import { getTVChannels, getTVChannelById, getTVChannelsByCategory } from '../utils/api';

// Barcha kanallarni olish
const channels = await getTVChannels();

// Bitta kanalni olish
const channel = await getTVChannelById(1);

// Kategoriya bo'yicha filtrlash
const sportsChannels = await getTVChannelsByCategory('Спортивные');
```

**React komponentida:**

```javascript
import { useState, useEffect } from 'react';
import { getTVChannels, getTVChannelsByCategory } from '../utils/api';

const TVChannels = () => {
  const [channels, setChannels] = useState([]);
  const [category, setCategory] = useState('Все');

  useEffect(() => {
    const loadChannels = async () => {
      let data;
      if (category === 'Все') {
        data = await getTVChannels();
      } else {
        data = await getTVChannelsByCategory(category);
      }
      setChannels(data);
    };
    loadChannels();
  }, [category]);

  return (
    <div>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>Все</option>
        <option>Спортивные</option>
        <option>Детские</option>
      </select>
      
      {channels.map(channel => (
        <div key={channel.id}>{channel.name}</div>
      ))}
    </div>
  );
};
```

---

### 5. Reels Olish (Hayot)

```javascript
import { getReels } from '../utils/api';

// Barcha reels ni olish
const reels = await getReels();
```

**React komponentida:**

```javascript
import { useState, useEffect } from 'react';
import { getReels } from '../utils/api';

const Reels = () => {
  const [reels, setReels] = useState([]);

  useEffect(() => {
    const loadReels = async () => {
      const data = await getReels();
      setReels(data);
    };
    loadReels();
  }, []);

  return (
    <div>
      {reels.map(reel => (
        <div key={reel.id}>{reel.title}</div>
      ))}
    </div>
  );
};
```

---

### 6. Library Ma'lumotlari (Akbar)

```javascript
import { getRentedMovies, getSavedMovies, getWatchHistory } from '../utils/api';

// Ijaraga olingan filmlar
const rentedMovies = await getRentedMovies(1); // userId = 1

// Saqlangan filmlar
const savedMovies = await getSavedMovies(1);

// Ko'rish tarixi
const history = await getWatchHistory(1);
```

**React komponentida:**

```javascript
import { useState, useEffect } from 'react';
import { getRentedMovies, getSavedMovies, getWatchHistory } from '../utils/api';

const Library = () => {
  const [rented, setRented] = useState([]);
  const [saved, setSaved] = useState([]);
  const [history, setHistory] = useState([]);
  const userId = 1; // Hozircha hardcode, keyin AuthContext dan olinadi

  useEffect(() => {
    const loadData = async () => {
      const rentedData = await getRentedMovies(userId);
      const savedData = await getSavedMovies(userId);
      const historyData = await getWatchHistory(userId);
      
      setRented(rentedData);
      setSaved(savedData);
      setHistory(historyData);
    };
    loadData();
  }, [userId]);

  return (
    <div>
      <h2>Арендованные</h2>
      {rented.map(movie => (
        <div key={movie.id}>{movie.title}</div>
      ))}
      
      <h2>Сохраненные</h2>
      {saved.map(movie => (
        <div key={movie.id}>{movie.title}</div>
      ))}
      
      <h2>История просмотра</h2>
      {history.map(item => (
        <div key={item.id}>{item.movieId}</div>
      ))}
    </div>
  );
};
```

---

## ⚠️ Muhim Eslatmalar

1. **Async/Await ishlating:**
   ```javascript
   // ✅ To'g'ri
   const movies = await getMovies();
   
   // ❌ Noto'g'ri
   const movies = getMovies(); // Promise qaytaradi
   ```

2. **Try/Catch ishlating:**
   ```javascript
   try {
     const movies = await getMovies();
   } catch (error) {
     console.error('Xato:', error);
   }
   ```

3. **useEffect da async funksiya:**
   ```javascript
   useEffect(() => {
     const loadData = async () => {
       const data = await getMovies();
       setMovies(data);
     };
     loadData();
   }, []);
   ```

---

## 🎯 Maslahatlar

1. **Utility funksiyalardan foydalaning** - `src/utils/api.js` dan
2. **Error handling qiling** - try/catch ishlating
3. **Loading state qo'shing** - Ma'lumotlar yuklanayotganda ko'rsating
4. **Empty state qo'shing** - Ma'lumotlar bo'sh bo'lsa ko'rsating

---

## 🚀 Muvaffaqiyatlar!

Endi siz db.json dan ma'lumotlarni oson olishingiz mumkin!
