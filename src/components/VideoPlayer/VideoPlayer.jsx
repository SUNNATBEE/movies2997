import { useState, useRef, useEffect, useCallback } from "react";
import "./VideoPlayer.css";

// Real working test video (Big Buck Bunny - 1 soat, bepul)
const TEST_VIDEO_URL = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

// ── helpers ──────────────────────────────────────────
const fmt = (s) => {
  if (!s || isNaN(s)) return "0:00:00";
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sc = Math.floor(s % 60);
  return `${h}:${String(m).padStart(2,"0")}:${String(sc).padStart(2,"0")}`;
};

const Ico = ({ d, size = 19, fill = "none", ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    {typeof d === "string" ? <path d={d}/> : d}
  </svg>
);

// Check icon
const Check = () => (
  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
    <polyline points="2,6 5,9 10,3" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// Close icon
const XIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

// ── SETTINGS MENU ────────────────────────────────────
const SettingsMenu = ({ quality, onQuality, speed, onSpeed, subSize, onSubSize, onClose }) => {
  const qualities = ["Авто (1080p)", "1080p", "720p", "480p", "360p"];
  const speeds = [
    { l: "2x", v: 2 }, { l: "1.5x", v: 1.5 }, { l: "1.25x", v: 1.25 },
    { l: "Обычная", v: 1 }, { l: "0.75x", v: 0.75 }, { l: "0.5x", v: 0.5 },
  ];
  const sizes = ["Большой", "Средний", "Маленький"];

  const Row = ({ label, selected, onClick }) => (
    <button className={`vp-menu-item ${selected ? "sel" : ""}`} onClick={onClick}>
      <span>{label}</span>
      <span className="vp-check">{selected && <Check />}</span>
    </button>
  );

  return (
    <div className="vp-menu" style={{ minWidth: 215 }}>
      <div className="vp-menu-head">
        <h3>Настройки</h3>
        <button className="vp-menu-x" onClick={onClose}><XIcon /></button>
      </div>
      <div className="vp-menu-scroll">
        <div className="vp-menu-section">
          <p className="vp-section-label">Качество</p>
          {qualities.map(q => <Row key={q} label={q} selected={quality===q} onClick={() => onQuality(q)} />)}
        </div>
        <div className="vp-divider"/>
        <div className="vp-menu-section">
          <p className="vp-section-label">Скорость</p>
          {speeds.map(s => <Row key={s.v} label={s.l} selected={speed===s.v} onClick={() => onSpeed(s.v)} />)}
        </div>
        <div className="vp-divider"/>
        <div className="vp-menu-section">
          <p className="vp-section-label">Размер субтитров</p>
          {sizes.map(s => <Row key={s} label={s} selected={subSize===s} onClick={() => onSubSize(s)} />)}
        </div>
      </div>
    </div>
  );
};

// ── AUDIO & SUBTITLES MENU ───────────────────────────
const AudioSubMenu = ({ audioTracks, subtitles, selAudio, selSub, onAudio, onSub, onClose }) => {
  const Row = ({ label, selected, onClick }) => (
    <button className={`vp-menu-item ${selected ? "sel" : ""}`} onClick={onClick}>
      <span>{label}</span>
      <span className="vp-check">{selected && <Check />}</span>
    </button>
  );

  return (
    <div className="vp-menu" style={{ minWidth: 215 }}>
      <div className="vp-menu-head">
        <h3>Аудио и субтитры</h3>
        <button className="vp-menu-x" onClick={onClose}><XIcon /></button>
      </div>
      <div className="vp-menu-scroll">
        {audioTracks.length > 0 && (
          <div className="vp-menu-section">
            <p className="vp-section-label">Аудио</p>
            {audioTracks.map(t => <Row key={t} label={t} selected={selAudio===t} onClick={() => onAudio(t)} />)}
          </div>
        )}
        {audioTracks.length > 0 && subtitles.length > 0 && <div className="vp-divider"/>}
        {subtitles.length > 0 && (
          <div className="vp-menu-section">
            <p className="vp-section-label">Субтитры</p>
            {subtitles.map(s => <Row key={s} label={s} selected={selSub===s} onClick={() => onSub(s)} />)}
          </div>
        )}
      </div>
    </div>
  );
};

// ── EPISODES MENU ─────────────────────────────────────
const EpisodeMenu = ({ episodes, current, onSelect, onClose }) => {
  const seasons = [...new Set(episodes.map(e => e.season))].sort((a,b)=>a-b);
  return (
    <div className="vp-menu vp-ep-menu">
      <div className="vp-menu-head">
        <h3>Серии</h3>
        <button className="vp-menu-x" onClick={onClose}><XIcon /></button>
      </div>
      <div className="vp-menu-scroll">
        {seasons.map(s => (
          <div key={s} className="vp-menu-section">
            <p className="vp-section-label">Сезон {s}</p>
            {episodes.filter(e=>e.season===s).map(ep => {
              const isCur = current?.id === ep.id;
              return (
                <button key={ep.id} className={`vp-ep-item ${isCur?"cur":""}`} onClick={() => onSelect(ep)}>
                  <div className="vp-ep-ph">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5">
                      <polygon points="5 3 19 12 5 21 5 3"/>
                    </svg>
                  </div>
                  <div style={{flex:1,minWidth:0}}>
                    <p className="vp-ep-name">{ep.episode} серия · {ep.title}</p>
                    <p className="vp-ep-dur">{ep.duration}</p>
                  </div>
                  {isCur && <svg width="14" height="14" viewBox="0 0 24 24" fill="#E53935"><polygon points="5 3 19 12 5 21"/></svg>}
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

// ── MAIN VIDEO PLAYER ─────────────────────────────────
const VideoPlayer = ({ movie, episode, episodes = [], onClose, onEpisodeChange }) => {
  const videoRef = useRef(null);
  const wrapRef = useRef(null);
  const timerRef = useRef(null);

  const [playing, setPlaying] = useState(false);
  const [curTime, setCurTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [buffered, setBuffered] = useState(0);
  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [showCtrl, setShowCtrl] = useState(true);
  const [loading, setLoading] = useState(true);
  const [menu, setMenu] = useState(null); // 'settings'|'episodes'|'audio'

  // Settings state
  const [quality, setQuality] = useState("Авто (1080p)");
  const [speed, setSpeed] = useState(1);
  const [subSize, setSubSize] = useState("Средний");
  const [selAudio, setSelAudio] = useState(() => movie?.audioTracks?.[0] || "Русский");
  const [selSub, setSelSub] = useState("Выкл");

  // Real audio tracks & subtitles from movie + O'zbek qo'shildi
  const audioTracks = movie?.audioTracks?.length
    ? [...movie.audioTracks, "O'zbekcha"]
    : ["Русский", "English", "O'zbekcha"];
  const subtitles = ["Выкл", ...(movie?.subtitles || ["Русский", "English", "O'zbek"]) ];

  const episodeLabel = episode
    ? `${episode.season} сезон, ${episode.episode} серия`
    : "";

  // Video URL — use real test video if no valid URL
  // Video URL — example.com yoki boshqa soxta URL bo'lsa test video
  const isRealUrl = episode?.videoUrl && episode.videoUrl.startsWith("http") && !episode.videoUrl.includes("example.com");
  const videoSrc = isRealUrl ? episode.videoUrl : TEST_VIDEO_URL;

  // ── Controls visibility ───────────────────────────
  const resetTimer = useCallback(() => {
    setShowCtrl(true);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      if (!menu) setShowCtrl(false);
    }, 3500);
  }, [menu]);

  useEffect(() => { resetTimer(); return () => clearTimeout(timerRef.current); }, [resetTimer]);

  // Keep controls visible when menu open
  useEffect(() => {
    if (menu) { setShowCtrl(true); clearTimeout(timerRef.current); }
    else resetTimer();
  }, [menu, resetTimer]);

  // ── Video events ──────────────────────────────────
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onTime = () => setCurTime(v.currentTime);
    const onDur = () => setDuration(v.duration);
    const onBuf = () => {
      if (v.buffered.length > 0)
        setBuffered((v.buffered.end(v.buffered.length-1) / v.duration) * 100);
    };
    const onWait = () => setLoading(true);
    const onPlay2 = () => { setLoading(false); setPlaying(true); };
    const onPause2 = () => setPlaying(false);
    const onEnded = () => setPlaying(false);
    const onCanPlay = () => setLoading(false);

    v.addEventListener("timeupdate", onTime);
    v.addEventListener("durationchange", onDur);
    v.addEventListener("progress", onBuf);
    v.addEventListener("waiting", onWait);
    v.addEventListener("playing", onPlay2);
    v.addEventListener("pause", onPause2);
    v.addEventListener("ended", onEnded);
    v.addEventListener("canplay", onCanPlay);
    return () => {
      v.removeEventListener("timeupdate", onTime);
      v.removeEventListener("durationchange", onDur);
      v.removeEventListener("progress", onBuf);
      v.removeEventListener("waiting", onWait);
      v.removeEventListener("playing", onPlay2);
      v.removeEventListener("pause", onPause2);
      v.removeEventListener("ended", onEnded);
      v.removeEventListener("canplay", onCanPlay);
    };
  }, []);

  // Apply speed
  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = speed;
  }, [speed]);

  // Fullscreen change
  useEffect(() => {
    const handler = () => setFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handler);
    return () => document.removeEventListener("fullscreenchange", handler);
  }, []);

  // ── Actions ───────────────────────────────────────
  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) v.play(); else v.pause();
  };

  const seek = (e) => {
    const v = videoRef.current;
    if (!v || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = Math.max(0, Math.min((e.clientX - rect.left) / rect.width, 1));
    v.currentTime = pct * duration;
  };

  const skip = (sec) => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = Math.max(0, Math.min(v.currentTime + sec, duration));
  };

  const changeVol = (val) => {
    const v = videoRef.current;
    const n = parseFloat(val);
    if (v) v.volume = n;
    setVolume(n);
    setMuted(n === 0);
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    if (muted) { v.volume = volume || 0.8; setMuted(false); }
    else { v.volume = 0; setMuted(true); }
  };

  const toggleFS = () => {
    if (!document.fullscreenElement) wrapRef.current?.requestFullscreen();
    else document.exitFullscreen();
  };

  const toggleMenu = (m) => setMenu(prev => prev === m ? null : m);

  const pct = duration ? (curTime / duration) * 100 : 0;
  const effectiveVol = muted ? 0 : volume;

  return (
    <div
      ref={wrapRef}
      className={`vp-wrap${showCtrl ? " show" : ""}`}
      onMouseMove={resetTimer}
      onTouchStart={resetTimer}
    >
      {/* VIDEO */}
      <video
        ref={videoRef}
        className="vp-video"
        src={videoSrc}
        playsInline
        onClick={togglePlay}
      />

      {/* LOADING SPINNER */}
      {loading && (
        <div className="vp-loading">
          <div className="vp-spinner"/>
        </div>
      )}

      {/* GRADIENTS */}
      <div className="vp-grad-top"/>
      <div className="vp-grad-bottom"/>

      {/* TOP BAR */}
      <div className="vp-top">
        <button className="vp-close" onClick={onClose}>
          <Ico d={<><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>} size={16}/>
        </button>
        <div className="vp-top-title">
          <h2>{movie?.title || "Video"}</h2>
          {episodeLabel && <p>{episodeLabel}</p>}
        </div>
        <div className="vp-top-spacer"/>
      </div>

      {/* CENTER CLICK AREA */}
      <div className="vp-center" onClick={togglePlay}>
        <div className="vp-center-btn">
          {playing
            ? <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>
            : <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff"><polygon points="6 3 20 12 6 21 6 3"/></svg>
          }
        </div>
      </div>

      {/* MENUS */}
      {menu === "settings" && (
        <SettingsMenu
          quality={quality} onQuality={setQuality}
          speed={speed} onSpeed={(v) => { setSpeed(v); if(videoRef.current) videoRef.current.playbackRate = v; }}
          subSize={subSize} onSubSize={setSubSize}
          onClose={() => setMenu(null)}
        />
      )}
      {menu === "audio" && (
        <AudioSubMenu
          audioTracks={audioTracks}
          subtitles={subtitles}
          selAudio={selAudio} onAudio={setSelAudio}
          selSub={selSub} onSub={setSelSub}
          onClose={() => setMenu(null)}
        />
      )}
      {menu === "episodes" && (
        <EpisodeMenu
          episodes={episodes}
          current={episode}
          onSelect={(ep) => { onEpisodeChange?.(ep); setMenu(null); }}
          onClose={() => setMenu(null)}
        />
      )}

      {/* BOTTOM CONTROLS */}
      <div className="vp-bottom">
        {/* Progress */}
        <div className="vp-progress" onMouseDown={seek} onClick={seek}>
          <div className="vp-progress-track">
            <div className="vp-progress-buf" style={{width:`${buffered}%`}}/>
            <div className="vp-progress-fill" style={{width:`${pct}%`}}/>
            <div className="vp-progress-dot" style={{left:`${pct}%`}}/>
          </div>
        </div>

        {/* Row */}
        <div className="vp-row">
          {/* LEFT */}
          <div className="vp-left">
            {/* Play/Pause */}
            <button className="vp-btn" onClick={togglePlay}>
              {playing
                ? <svg viewBox="0 0 24 24" fill="currentColor" width="19" height="19"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>
                : <svg viewBox="0 0 24 24" fill="currentColor" width="19" height="19"><polygon points="6 3 20 12 6 21 6 3"/></svg>
              }
            </button>

            {/* Skip -10 */}
            <button className="vp-btn" onClick={() => skip(-10)} title="-10 сек">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="19" height="19">
                <path d="M11.5 17a7.5 7.5 0 1 1 5-14"/>
                <polyline points="15 3 10 3 10 8"/>
                <text x="6" y="15" fontSize="6" fill="currentColor" stroke="none" fontWeight="700" fontFamily="sans-serif">10</text>
              </svg>
            </button>

            {/* Skip +10 */}
            <button className="vp-btn" onClick={() => skip(10)} title="+10 сек">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="19" height="19">
                <path d="M12.5 17a7.5 7.5 0 1 0-5-14"/>
                <polyline points="9 3 14 3 14 8"/>
                <text x="6" y="15" fontSize="6" fill="currentColor" stroke="none" fontWeight="700" fontFamily="sans-serif">10</text>
              </svg>
            </button>

            {/* Volume */}
            <div className="vp-vol">
              <button className="vp-btn" onClick={toggleMute}>
                {(muted || effectiveVol === 0)
                  ? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="19" height="19"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>
                  : effectiveVol < 0.5
                  ? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="19" height="19"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
                  : <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="19" height="19"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
                }
              </button>
              <input
                className="vp-vol-range" type="range"
                min="0" max="1" step="0.05"
                value={effectiveVol}
                onChange={e => changeVol(e.target.value)}
              />
            </div>

            {/* Time */}
            <span className="vp-time">{fmt(curTime)} / {fmt(duration)}</span>
          </div>

          {/* RIGHT */}
          <div className="vp-right">
            {/* Episodes */}
            <button className={`vp-lbl ${menu==="episodes"?"active":""}`} onClick={() => toggleMenu("episodes")}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13">
                <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
              </svg>
              <span>Серии</span>
            </button>

            {/* Audio */}
            <button className={`vp-lbl ${menu==="audio"?"active":""}`} onClick={() => toggleMenu("audio")}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              <span>Аудио и субтитры</span>
            </button>

            {/* Settings */}
            <button className={`vp-btn ${menu==="settings"?"active":""}`} onClick={() => toggleMenu("settings")}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="19" height="19">
                <circle cx="12" cy="12" r="3"/>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
              </svg>
            </button>

            {/* Fullscreen */}
            <button className="vp-btn" onClick={toggleFS}>
              {fullscreen
                ? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="19" height="19"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/></svg>
                : <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="19" height="19"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>
              }
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
