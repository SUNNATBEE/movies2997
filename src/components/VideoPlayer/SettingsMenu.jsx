const SettingsMenu = ({
  quality, onQualityChange,
  speed, onSpeedChange,
  subtitleSize, onSubtitleSizeChange,
  onClose
}) => {
  const qualities = ["Авто (1080p)", "1080p", "720p", "480p", "360p"];
  const speeds = [
    { label: "2x", value: 2 },
    { label: "1.5x", value: 1.5 },
    { label: "1.25x", value: 1.25 },
    { label: "Обычная", value: 1 },
    { label: "0.75x", value: 0.75 },
    { label: "0.5x", value: 0.5 },
  ];
  const subtitleSizes = ["Большой", "Средний", "Маленький"];

  const CheckIcon = () => (
    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
      <polyline points="2,6 5,9 10,3" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );

  return (
    <div className="vp-menu" style={{ minWidth: 220 }}>
      <div className="vp-menu-header">
        <p className="vp-menu-title">Настройки</p>
        <button className="vp-menu-close" onClick={onClose}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>

      {/* Quality */}
      <div className="vp-menu-section">
        <p className="vp-menu-section-label">Качество</p>
        {qualities.map((q) => (
          <button
            key={q}
            className={`vp-menu-item ${quality === q ? "selected" : ""}`}
            onClick={() => onQualityChange(q)}
          >
            <span>{q}</span>
            <span className="vp-check">{quality === q && <CheckIcon />}</span>
          </button>
        ))}
      </div>

      <div className="vp-menu-divider" />

      {/* Speed */}
      <div className="vp-menu-section">
        <p className="vp-menu-section-label">Скорость</p>
        {speeds.map((s) => (
          <button
            key={s.value}
            className={`vp-menu-item ${speed === s.value ? "selected" : ""}`}
            onClick={() => onSpeedChange(s.value)}
          >
            <span>{s.label}</span>
            <span className="vp-check">{speed === s.value && <CheckIcon />}</span>
          </button>
        ))}
      </div>

      <div className="vp-menu-divider" />

      {/* Subtitle Size */}
      <div className="vp-menu-section">
        <p className="vp-menu-section-label">Размер субтитров</p>
        {subtitleSizes.map((sz) => (
          <button
            key={sz}
            className={`vp-menu-item ${subtitleSize === sz ? "selected" : ""}`}
            onClick={() => onSubtitleSizeChange(sz)}
          >
            <span>{sz}</span>
            <span className="vp-check">{subtitleSize === sz && <CheckIcon />}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SettingsMenu;
