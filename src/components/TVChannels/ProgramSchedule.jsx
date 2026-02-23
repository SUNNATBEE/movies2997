import React, { useMemo, useState } from 'react';

const TABS = ['Сегодня', 'Завтра'];

const getDateForTab = (tab) => {
  const base = new Date();
  if (tab === 'Завтра') {
    base.setDate(base.getDate() + 1);
  }
  return base.toISOString().slice(0, 10);
};

const ProgramSchedule = ({ schedule = [] }) => {
  const [activeTab, setActiveTab] = useState('Сегодня');

  const { itemsForDay, currentIndex } = useMemo(() => {
    const dateStr = getDateForTab(activeTab);
    const filtered = schedule.filter((item) => item.date === dateStr);

    const now = new Date();
    let currentIdx = -1;

    filtered.forEach((item, index) => {
      const [hours, minutes] = item.time.split(':').map(Number);
      const itemDate = new Date(item.date);
      itemDate.setHours(hours || 0, minutes || 0, 0, 0);
      if (itemDate <= now) {
        currentIdx = index;
      }
    });

    return { itemsForDay: filtered, currentIndex: currentIdx };
  }, [schedule, activeTab]);

  return (
    <section className="mt-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl md:text-2xl font-semibold text-white">
          Расписание программы
        </h2>
        <div className="inline-flex rounded-full bg-neutral-900 border border-neutral-700 p-1">
          {TABS.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 text-sm md:text-base rounded-full transition-colors ${
                  isActive
                    ? 'bg-orange-500 text-white'
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>

      {itemsForDay.length === 0 ? (
        <p className="text-neutral-400 text-sm md:text-base">
          Для выбранного дня нет запланированных программ.
        </p>
      ) : (
        <ul className="space-y-3">
          {itemsForDay.map((item, index) => {
            const isCurrent = index === currentIndex;
            return (
              <li
                key={`${item.date}-${item.time}-${item.title}`}
                className={`flex items-start gap-4 rounded-2xl border px-4 py-3 md:px-5 md:py-4 text-sm md:text-base transition-colors ${
                  isCurrent
                    ? 'border-red-500 bg-red-900/30'
                    : 'border-neutral-800 bg-neutral-900 hover:bg-neutral-800'
                }`}
              >
                <div className="flex items-center gap-2 min-w-[70px] text-neutral-300">
                  {isCurrent && (
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  )}
                  <span className="font-medium">{item.time}</span>
                </div>
                <p className="text-neutral-100">{item.title}</p>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default ProgramSchedule;

