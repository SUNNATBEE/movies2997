/**
 * ============================================
 * TV CHANNELS SAHIFASI
 * ============================================
 * 
 * O'QUVCHI: Safina
 * VAZIFA: TV Channels (TV kanallar) sahifasini yaratish
 * 
 * Bu sahifada foydalanuvchilar barcha TV kanallarni ko'rishlari mumkin.
 * 
 * KERAKLI ELEMENTLAR:
 * - Sahifa sarlavhasi: "Телеканалы"
 * - Kategoriya filtrlari: Все, Национальные, Спортивные, Детские, va boshqalar
 * - Kanal kartalari grid
 * 
 * DB.JSON:
 * - data.tvChannels - barcha TV kanallar
 * 
 * FAYL: src/pages/TVChannels/TVChannels.jsx
 */

import React, { useEffect, useMemo, useState } from 'react';
import { getTVChannels } from '../../utils/api';
import CategoryFilter from '../../components/TVChannels/CategoryFilter';
import ChannelCard from '../../components/TVChannels/ChannelCard';

const TVChannels = () => {
  const [channels, setChannels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState('Все');

  useEffect(() => {
    const loadChannels = async () => {
      try {
        setLoading(true);
        const data = await getTVChannels();
        setChannels(data);
      } catch (err) {
        setError(err.message || 'Не удалось загрузить телеканалы');
      } finally {
        setLoading(false);
      }
    };

    loadChannels();
  }, []);

  const filteredChannels = useMemo(() => {
    if (activeCategory === 'Все') return channels;
    return channels.filter((ch) => ch.category === activeCategory);
  }, [channels, activeCategory]);

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-10">
        <header className="flex flex-col gap-2 md:gap-3">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">Телеканалы</h1>
          <p className="text-neutral-400 text-sm md:text-base max-w-2xl">
            Выберите категорию и смотрите любимые телеканалы в любое время.
          </p>
        </header>

        <CategoryFilter activeCategory={activeCategory} onChange={setActiveCategory} />

        {loading && (
          <div className="flex justify-center items-center py-16">
            <span className="loading loading-spinner loading-lg text-orange-500" />
          </div>
        )}

        {error && !loading && (
          <div className="mt-6 rounded-2xl border border-red-700 bg-red-950/40 px-4 py-3 text-sm md:text-base text-red-200">
            {error}
          </div>
        )}

        {!loading && !error && (
          <section className="mt-4">
            {filteredChannels.length === 0 ? (
              <p className="text-neutral-400 text-sm md:text-base">
                Для выбранной категории нет телеканалов.
              </p>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 lg:gap-5">
                {filteredChannels.map((channel) => (
                  <ChannelCard key={channel.id} channel={channel} />
                ))}
              </div>
            )}
          </section>
        )}
      </div>
    </main>
  );
};

export default TVChannels;
