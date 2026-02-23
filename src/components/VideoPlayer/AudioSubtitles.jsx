const AudioSubtitles = ({
  audioTracks = [], subtitles = [],
  selectedAudio, selectedSubtitle,
  onAudioChange, onSubtitleChange,
  onClose
}) => {
  const CheckIcon = () => (
    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
      <polyline points="2,6 5,9 10,3" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );

  return (
    <div className="vp-menu" style={{ minWidth: 220 }}>
      <div className="vp-menu-header">
        <p className="vp-menu-title">Аудио и субтитры</p>
        <button className="vp-menu-close" onClick={onClose}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>

      {/* Audio Tracks */}
      {audioTracks.length > 0 && (
        <div className="vp-menu-section">
          <p className="vp-menu-section-label">Аудио</p>
          {audioTracks.map((track) => (
            <button
              key={track}
              className={`vp-menu-item ${selectedAudio === track ? "selected" : ""}`}
              onClick={() => onAudioChange(track)}
            >
              <span>{track}</span>
              <span className="vp-check">{selectedAudio === track && <CheckIcon />}</span>
            </button>
          ))}
        </div>
      )}

      {audioTracks.length > 0 && subtitles.length > 0 && <div className="vp-menu-divider" />}

      {/* Subtitles */}
      {subtitles.length > 0 && (
        <div className="vp-menu-section">
          <p className="vp-menu-section-label">Субтитры</p>
          {subtitles.map((sub) => (
            <button
              key={sub}
              className={`vp-menu-item ${selectedSubtitle === sub ? "selected" : ""}`}
              onClick={() => onSubtitleChange(sub)}
            >
              <span>{sub}</span>
              <span className="vp-check">{selectedSubtitle === sub && <CheckIcon />}</span>
            </button>
          ))}
        </div>
      )}

      {audioTracks.length === 0 && subtitles.length === 0 && (
        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, padding: "14px", textAlign: "center" }}>
          Нет доступных аудиодорожек
        </p>
      )}
    </div>
  );
};

export default AudioSubtitles;
