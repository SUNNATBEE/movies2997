/**
 * ============================================
 * API UTILITY FUNKSIYALARI
 * ============================================
 * 
 * Bu fayl db.json dan ma'lumotlarni olish uchun utility funksiyalari.
 * 
 * FOYDALANISH:
 * import { getMovies, getUsers, getEpisodes } from '../utils/api'
 * 
 * FAYL: src/utils/api.js
 */

const DB_URL = '/db.json';

/**
 * DB.json dan barcha ma'lumotlarni olish
 */
export const fetchDB = async () => {
  try {
    const response = await fetch(DB_URL);
    if (!response.ok) throw new Error('DB.json topilmadi');
    return await response.json();
  } catch (error) {
    console.error('DB.json olishda xato:', error);
    throw error;
  }
};

/**
 * Barcha filmlarni olish
 */
export const getMovies = async () => {
  const data = await fetchDB();
  return data.movies || [];
};

/**
 * Bitta filmni ID bo'yicha olish
 */
export const getMovieById = async (id) => {
  const data = await fetchDB();
  const movies = data.movies || [];
  return movies.find(movie => movie.id === parseInt(id));
};

/**
 * Barcha foydalanuvchilarni olish
 */
export const getUsers = async () => {
  const data = await fetchDB();
  return data.users || [];
};

/**
 * Bitta foydalanuvchini email yoki telefon bo'yicha topish
 */
export const getUserByEmail = async (email) => {
  const data = await fetchDB();
  const users = data.users || [];
  return users.find(user => user.email === email);
};

/**
 * Barcha qismlarni olish
 */
export const getEpisodes = async () => {
  const data = await fetchDB();
  return data.episodes || [];
};

/**
 * Bitta qismni ID bo'yicha olish
 */
export const getEpisodeById = async (id) => {
  const data = await fetchDB();
  const episodes = data.episodes || [];
  return episodes.find(episode => episode.id === parseInt(id));
};

/**
 * Filmning barcha qismlarini olish
 */
export const getEpisodesByMovieId = async (movieId) => {
  const data = await fetchDB();
  const episodes = data.episodes || [];
  return episodes.filter(episode => episode.movieId === parseInt(movieId));
};

/**
 * Barcha TV kanallarni olish
 */
export const getTVChannels = async () => {
  const data = await fetchDB();
  return data.tvChannels || [];
};

/**
 * Bitta TV kanalni ID bo'yicha olish
 */
export const getTVChannelById = async (id) => {
  const data = await fetchDB();
  const channels = data.tvChannels || [];
  return channels.find(channel => channel.id === parseInt(id));
};

/**
 * Kategoriya bo'yicha TV kanallarni olish
 */
export const getTVChannelsByCategory = async (category) => {
  const data = await fetchDB();
  const channels = data.tvChannels || [];
  return channels.filter(channel => channel.category === category);
};

/**
 * Barcha reels ni olish
 */
export const getReels = async () => {
  const data = await fetchDB();
  return data.reels || [];
};

/**
 * Foydalanuvchining ijaraga olingan filmlarini olish
 */
export const getRentedMovies = async (userId) => {
  const data = await fetchDB();
  const rentedMovies = data.rentedMovies || [];
  const movies = data.movies || [];
  
  const userRented = rentedMovies.filter(rm => rm.userId === parseInt(userId));
  const movieIds = userRented.map(rm => rm.movieId);
  return movies.filter(m => movieIds.includes(m.id));
};

/**
 * Foydalanuvchining saqlangan filmlarini olish
 */
export const getSavedMovies = async (userId) => {
  const data = await fetchDB();
  const savedMovies = data.savedMovies || [];
  const movies = data.movies || [];
  
  const userSaved = savedMovies.filter(sm => sm.userId === parseInt(userId));
  const movieIds = userSaved.map(sm => sm.movieId);
  return movies.filter(m => movieIds.includes(m.id));
};

/**
 * Foydalanuvchining ko'rish tarixini olish
 */
export const getWatchHistory = async (userId) => {
  const data = await fetchDB();
  const watchHistory = data.watchHistory || [];
  return watchHistory.filter(wh => wh.userId === parseInt(userId));
};

/**
 * Obuna ma'lumotlarini olish
 */
export const getSubscriptions = async () => {
  const data = await fetchDB();
  return data.subscriptions || [];
};
