const VideoControls = ({
  isPlaying, onTogglePlay, onSkip,
  volume, onVolumeChange, onToggleMute, isMuted,
  isFullscreen, onToggleFullscreen,
  progress, buffered, currentTime, totalTime, onSeek,
  activeMenu, onToggleMenu
}) => {
  return (
    <div className="vp-bottom-controls">
      {/* Progress Bar */}
      <div className="vp-progress-wrapper" onMouseDown={onSeek} onClick={onSeek}>
        <div className="vp-progress-bar">
          <div className="vp-progress-buffered" style={{ width: `${buffered}%` }} />
          <div className="vp-progress-fill" style={{ width: `${progress}%` }} />
          <div className="vp-progress-thumb" style={{ left: `${progress}%` }} />
        </div>
      </div>

      {/* Controls Row */}
      <div className="vp-controls-row">
        {/* Left: play/skip/volume */}
        <div className="vp-controls-left">
          {/* Play/Pause */}
          <button className="vp-btn" onClick={onTogglePlay} aria-label={isPlaying ? "Pause" : "Play"}>
            {isPlaying ? (
              <svg viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5,3 19,12 5,21"/>
              </svg>
            )}
          </button>

          {/* Skip -10 */}
          <button className="vp-btn" onClick={() => onSkip(-10)} aria-label="Skip back 10s">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M11 17a8 8 0 1 1 5-14.33"/>
              <polyline points="15 3 10 3 10 8"/>
              <text x="6.5" y="14.5" fontSize="6.5" fill="currentColor" stroke="none" fontFamily="sans-serif" fontWeight="700">10</text>
            </svg>
          </button>

          {/* Skip +10 */}
          <button className="vp-btn" onClick={() => onSkip(10)} aria-label="Skip forward 10s">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M13 17a8 8 0 1 0-5-14.33"/>
              <polyline points="9 3 14 3 14 8"/>
              <text x="6.5" y="14.5" fontSize="6.5" fill="currentColor" stroke="none" fontFamily="sans-serif" fontWeight="700">10</text>
            </svg>
          </button>

          {/* Volume */}
          <div className="vp-volume-wrapper">
            <button className="vp-btn" onClick={onToggleMute} aria-label="Toggle mute">
              {isMuted || volume === 0 ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                  <line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>
                </svg>
              ) : volume < 0.5 ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
                </svg>
              )}
            </button>
            <input
              className="vp-volume-slider"
              type="range" min="0" max="1" step="0.05"
              value={isMuted ? 0 : volume}
              onChange={(e) => onVolumeChange(e.target.value)}
            />
          </div>

          {/* Time */}
          <span className="vp-time">{currentTime} / {totalTime}</span>
        </div>

        {/* Right: Episodes, Audio, Settings, Fullscreen */}
        <div className="vp-controls-right">
          <button
            className={`vp-label-btn ${activeMenu === 'episodes' ? 'active' : ''}`}
            onClick={() => onToggleMenu('episodes')}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="3" width="20" height="14" rx="2"/>
              <line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
            <span>Серии</span>
          </button>

          <button
            className={`vp-label-btn ${activeMenu === 'audio' ? 'active' : ''}`}
            onClick={() => onToggleMenu('audio')}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            <span>Аудио и субтитры</span>
          </button>

          <button className="vp-btn" aria-label="Cast">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M2 8.5A12.5 12.5 0 0 1 14.5 21"/><path d="M2 12.5A8.5 8.5 0 0 1 10.5 21"/>
              <circle cx="2.5" cy="21" r="1" fill="currentColor"/>
              <rect x="14" y="3" width="8" height="14" rx="1"/>
            </svg>
          </button>

          <button
            className={`vp-btn ${activeMenu === 'settings' ? 'active' : ''}`}
            onClick={() => onToggleMenu('settings')}
            aria-label="Settings"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="3"/>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
            </svg>
          </button>

          <button className="vp-btn" onClick={onToggleFullscreen} aria-label="Fullscreen">
            {isFullscreen ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoControls;
