const EpisodesMenu = ({ episodes = [], currentEpisode, onSelect, onClose }) => {
  const seasons = [...new Set(episodes.map((ep) => ep.season))].sort((a, b) => a - b);

  return (
    <div className="vp-menu vp-episodes-menu">
      <div className="vp-menu-header">
        <p className="vp-menu-title">Серии</p>
        <button className="vp-menu-close" onClick={onClose}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>

      <div style={{ maxHeight: "340px", overflowY: "auto" }}>
        {seasons.map((season) => (
          <div key={season} className="vp-menu-section">
            <p className="vp-menu-section-label">Сезон {season}</p>
            {episodes
              .filter((ep) => ep.season === season)
              .map((ep) => {
                const isCurrent =
                  currentEpisode?.id === ep.id ||
                  (currentEpisode?.season === ep.season && currentEpisode?.episode === ep.episode);
                return (
                  <button
                    key={ep.id}
                    className={`vp-episode-item ${isCurrent ? "current" : ""}`}
                    onClick={() => onSelect(ep)}
                  >
                    {ep.thumbnail ? (
                      <img
                        className="vp-episode-thumb"
                        src={ep.thumbnail}
                        alt={ep.title}
                        onError={(e) => { e.target.style.display = "none"; }}
                      />
                    ) : (
                      <div className="vp-episode-thumb-placeholder">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5">
                          <polygon points="5 3 19 12 5 21 5 3"/>
                        </svg>
                      </div>
                    )}
                    <div className="vp-episode-info">
                      <p className="vp-episode-name">{ep.episode} серия · {ep.title}</p>
                      <p className="vp-episode-duration">{ep.duration}</p>
                    </div>
                    {isCurrent && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="#E53935">
                        <polygon points="5 3 19 12 5 21 5 3"/>
                      </svg>
                    )}
                  </button>
                );
              })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EpisodesMenu;
