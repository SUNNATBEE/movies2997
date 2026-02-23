/**
 * ============================================
 * CHANNEL PAGE (BITTA KANAL SAHIFASI)
 * ============================================
 * 
 * O'QUVCHI: Safina
 * VAZIFA: Individual Channel Page (bitta kanal sahifasi) yaratish
 * 
 * Bu sahifada foydalanuvchi bitta kanalni tomosha qiladi.
 * 
 * KERAKLI ELEMENTLAR:
 * - Video Player (live stream)
 * - Kanal ma'lumotlari
 * - Расписание программы (Dastur jadvali)
 * - "Вам также может понравиться" (Sizga ham yoqishi mumkin)
 * 
 * DB.JSON:
 * - data.tvChannels[id] - kanal ma'lumotlari
 * 
 * FAYL: src/pages/TVChannels/ChannelPage.jsx
 */

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTVChannelById, getTVChannels } from '../../utils/api';
import ChannelPlayer from '../../components/TVChannels/ChannelPlayer';
import ProgramSchedule from '../../components/TVChannels/ProgramSchedule';
import ChannelCard from '../../components/TVChannels/ChannelCard';

const ChannelPage = () => {
  const { id } = useParams();
  const [channel, setChannel] = useState(null);
  const [otherChannels, setOtherChannels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [current, all] = await Promise.all([
          getTVChannelById(id),
          getTVChannels(),
        ]);

        if (!current) {
          setError('Канал не найден');
          setChannel(null);
          setOtherChannels([]);
          return;
        }

        setChannel(current);
        setOtherChannels(all.filter((ch) => ch.id !== current.id));
      } catch (err) {
        setError(err.message || 'Не удалось загрузить данные канала');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [id]);

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-10">
        {loading && (
          <div className="flex justify-center items-center py-16">
            <span className="loading loading-spinner loading-lg text-orange-500" />
          </div>
        )}

        {error && !loading && (
          <div className="mt-2 mb-6 rounded-2xl border border-red-700 bg-red-950/40 px-4 py-3 text-sm md:text-base text-red-200">
            {error}
          </div>
        )}

        {!loading && !error && channel && (
          <>
            <ChannelPlayer channel={channel} />
            <ProgramSchedule schedule={channel.schedule || []} />

            {otherChannels.length > 0 && (
              <section className="mt-10">
                <h2 className="text-xl md:text-2xl font-semibold mb-4">
                  Вам также может понравиться
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 lg:gap-5">
                  {otherChannels.map((item) => (
                    <ChannelCard key={item.id} channel={item} />
                  ))}
                </div>
              </section>
            )}
          </>
        )}
      </div>
    </main>
  );
};

export default ChannelPage;
