import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

/**
 * FAYL: src/pages/Movies/Movies.jsx
 * db.json dan real ma'lumotlar tortib olinadi
 */

// ── PREMIUM MOVIE CARD ───────────────────────────────
const MovieCard = ({ movie, firstEpisode, onWatch, index }) => {
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  // Har bir film uchun unique accent rang
  const hues = [340, 200, 120, 45, 280, 160];
  const h = hues[movie.id % hues.length];
  const accent    = `hsl(${h}, 75%, 58%)`;
  const accentDim = `hsl(${h}, 75%, 35%)`;
  const glow      = `hsla(${h}, 80%, 55%, 0.4)`;

  return (
    <div
      onClick={() => onWatch(movie, firstEpisode)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: 16,
        overflow: "hidden",
        cursor: "pointer",
        background: "#111",
        border: `1px solid ${hovered ? `hsla(${h},65%,55%,0.35)` : "rgba(255,255,255,0.07)"}`,
        boxShadow: hovered
          ? `0 28px 64px rgba(0,0,0,0.85), 0 0 0 1px ${glow}, inset 0 1px 0 rgba(255,255,255,0.07)`
          : "0 6px 28px rgba(0,0,0,0.55)",
        transform: hovered ? "translateY(-10px) scale(1.02)" : "translateY(0) scale(1)",
        transition: "all 0.38s cubic-bezier(0.34,1.56,0.64,1)",
        animation: `fadeUp 0.5s ease ${index * 0.07}s both`,
      }}
    >
      {/* ── POSTER ── */}
      <div style={{
        width: "100%",
        height: 300,
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Background */}
        {!imgError && movie.poster ? (
          <img
            src={movie.poster}
            alt={movie.title}
            onError={() => setImgError(true)}
            style={{
              width: "100%", height: "100%",
              objectFit: "cover",
              transform: hovered ? "scale(1.08)" : "scale(1)",
              transition: "transform 0.6s ease",
              filter: "brightness(0.75)",
            }}
          />
        ) : (
          <div style={{
            width: "100%", height: "100%",
            background: `
              radial-gradient(ellipse at 25% 25%, hsla(${h},55%,22%,0.9) 0%, transparent 55%),
              radial-gradient(ellipse at 75% 75%, hsla(${h+60},45%,14%,0.7) 0%, transparent 55%),
              linear-gradient(160deg, hsl(${h},28%,10%) 0%, hsl(${h+40},18%,6%) 100%)
            `,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 80,
            transform: hovered ? "scale(1.08)" : "scale(1)",
            transition: "transform 0.6s ease",
          }}>
            🎬
          </div>
        )}

        {/* Shimmer on hover */}
        <div style={{
          position: "absolute", inset: 0,
          background: `linear-gradient(135deg, transparent 40%, hsla(${h},80%,70%,${hovered ? 0.07 : 0}) 65%, transparent 85%)`,
          transition: "all 0.4s ease",
          zIndex: 1,
        }}/>

        {/* Gradient overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.97) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.2) 100%)",
          zIndex: 2,
        }}/>

        {/* TOP: Rating + AgeRating */}
        <div style={{
          position: "absolute", top: 12, left: 12, right: 12, zIndex: 4,
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          {/* Rating */}
          <div style={{
            display: "flex", alignItems: "center", gap: 5,
            background: "rgba(0,0,0,0.65)",
            backdropFilter: "blur(12px)",
            borderRadius: 20, padding: "4px 10px",
            border: "1px solid rgba(255,255,255,0.1)",
          }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="#FFD700">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
            <span style={{ color: "#FFD700", fontSize: 12, fontWeight: 800, letterSpacing: "-0.01em" }}>
              {movie.rating}
            </span>
          </div>

          {/* Age */}
          <div style={{
            background: movie.ageRating === "18+" ? "rgba(229,57,53,0.88)" : "rgba(0,0,0,0.65)",
            backdropFilter: "blur(12px)",
            borderRadius: 6, padding: "3px 8px",
            border: `1px solid ${movie.ageRating === "18+" ? "rgba(229,57,53,0.5)" : "rgba(255,255,255,0.12)"}`,
          }}>
            <span style={{ color: "#fff", fontSize: 10, fontWeight: 800 }}>{movie.ageRating}</span>
          </div>
        </div>

        {/* TOP RIGHT: Seasons badge */}
        {movie.seasons && (
          <div style={{
            position: "absolute", top: 50, right: 12, zIndex: 4,
            background: `hsla(${h},70%,35%,0.85)`,
            backdropFilter: "blur(8px)",
            borderRadius: 6, padding: "3px 9px",
            border: `1px solid ${accent}44`,
          }}>
            <span style={{ color: "#fff", fontSize: 10, fontWeight: 700 }}>
              {movie.seasons} mavsum
            </span>
          </div>
        )}

        {/* Center: Play button */}
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: `translate(-50%, -50%) scale(${hovered ? 1.15 : 0.95})`,
          zIndex: 4,
          width: 54, height: 54, borderRadius: "50%",
          background: hovered
            ? `linear-gradient(135deg, ${accent}, ${accentDim})`
            : "rgba(229,57,53,0.85)",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: hovered ? `0 6px 28px ${glow}` : "0 4px 18px rgba(229,57,53,0.45)",
          transition: "all 0.35s cubic-bezier(0.34,1.56,0.64,1)",
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
            <polygon points="6 3 20 12 6 21 6 3"/>
          </svg>
        </div>

        {/* BOTTOM: Film title */}
        <div style={{
          position: "absolute", bottom: 12, left: 13, right: 13, zIndex: 4,
        }}>
          <p style={{
            color: "#fff", fontWeight: 900,
            fontSize: 17, margin: "0 0 5px",
            lineHeight: 1.15,
            letterSpacing: "0.01em",
            textShadow: "0 2px 12px rgba(0,0,0,1)",
            fontFamily: "'Manrope', sans-serif",
          }}>
            {movie.title}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
            <span style={{
              color: accent, fontSize: 10, fontWeight: 700,
              textTransform: "uppercase", letterSpacing: "0.08em",
            }}>
              {movie.genre}
            </span>
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 10 }}>·</span>
            <span style={{ color: "rgba(255,255,255,0.45)", fontSize: 10 }}>{movie.year}</span>
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 10 }}>·</span>
            <span style={{ color: "rgba(255,255,255,0.45)", fontSize: 10 }}>{movie.country}</span>
          </div>
        </div>
      </div>

      {/* ── BOTTOM INFO ── */}
      <div style={{
        padding: "12px 14px 14px",
        background: "linear-gradient(180deg, #111 0%, #0d0d0d 100%)",
        borderTop: `1px solid hsla(${h},45%,40%,0.15)`,
      }}>
        {/* Description */}
        <p style={{
          color: "rgba(255,255,255,0.38)",
          fontSize: 11,
          lineHeight: 1.55,
          margin: "0 0 12px",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}>
          {movie.description}
        </p>

        {/* Audio tracks */}
        {movie.audioTracks?.length > 0 && (
          <div style={{
            display: "flex", alignItems: "center", gap: 5,
            marginBottom: 12, flexWrap: "wrap",
          }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2">
              <path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
            </svg>
            {movie.audioTracks.map(t => (
              <span key={t} style={{
                background: "rgba(255,255,255,0.07)",
                color: "rgba(255,255,255,0.5)",
                fontSize: 9, fontWeight: 700,
                padding: "2px 7px", borderRadius: 4,
                border: "1px solid rgba(255,255,255,0.08)",
                textTransform: "uppercase", letterSpacing: "0.06em",
              }}>{t}</span>
            ))}
          </div>
        )}

        {/* Watch Button */}
        <button style={{
          width: "100%",
          background: hovered
            ? `linear-gradient(135deg, ${accent} 0%, ${accentDim} 100%)`
            : "linear-gradient(135deg, #E53935 0%, #B71C1C 100%)",
          color: "#fff", border: "none", borderRadius: 10,
          padding: "11px 0", fontSize: 12, fontWeight: 800,
          cursor: "pointer", fontFamily: "'Manrope', sans-serif",
          letterSpacing: "0.06em", textTransform: "uppercase",
          display: "flex", alignItems: "center", justifyContent: "center", gap: 7,
          boxShadow: hovered ? `0 8px 28px ${glow}` : "0 4px 16px rgba(229,57,53,0.28)",
          transition: "all 0.3s ease",
        }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="#fff">
            <polygon points="6 3 20 12 6 21 6 3"/>
          </svg>
          Ko'rish · 1-seriya
        </button>
      </div>
    </div>
  );
};

// ── MAIN PAGE ────────────────────────────────────────
const Movies = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);

  // db.json dan ma'lumot olish
  useEffect(() => {
    fetch("/db.json")
      .then(res => res.json())
      .then(data => {
        setMovies(data.movies || []);
        setEpisodes(data.episodes || []);
      })
      .catch(err => console.error("db.json yuklanmadi:", err))
      .finally(() => setLoading(false));
  }, []);

  // Filmning birinchi epizodini topish
  const getFirstEpisode = (movieId) => {
    return episodes
      .filter(ep => ep.movieId === movieId)
      .sort((a, b) => a.season - b.season || a.episode - b.episode)[0];
  };

  // Video player ochish
  const handleWatch = (movie, episode) => {
    if (episode) {
      navigate(`/watch/${episode.id}`);
    }
  };

  // Loading
  if (loading) return (
    <div style={{
      minHeight: "100vh", background: "#080808",
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <div style={{
        width: 40, height: 40,
        border: "3px solid rgba(255,255,255,0.1)",
        borderTopColor: "#E53935",
        borderRadius: "50%",
        animation: "spin 0.8s linear infinite",
      }}/>
      <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
    </div>
  );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800;900&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)    scale(1); }
        }

        * { box-sizing: border-box; }
      `}</style>

      <div style={{
        minHeight: "100vh",
        background: "#080808",
        padding: "36px 24px 60px",
        fontFamily: "'Manrope', sans-serif",
      }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>

          {/* HEADER */}
          <div style={{ marginBottom: 36, position: "relative" }}>
            <div style={{
              position: "absolute", top: -30, left: -20,
              width: 250, height: 100,
              background: "radial-gradient(ellipse, rgba(229,57,53,0.1) 0%, transparent 70%)",
              filter: "blur(24px)", pointerEvents: "none",
            }}/>

            <h1 style={{
              color: "#fff",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 900,
              margin: "0 0 8px",
              letterSpacing: "-0.03em",
              lineHeight: 1,
            }}>
              Filmlar
              <span style={{
                display: "inline-block",
                width: 7, height: 7,
                borderRadius: "50%",
                background: "#E53935",
                marginLeft: 8,
                verticalAlign: "middle",
                boxShadow: "0 0 14px #E53935",
              }}/>
            </h1>

            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <p style={{
                color: "rgba(255,255,255,0.28)",
                fontSize: 12, margin: 0,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}>
                {movies.length} ta film mavjud
              </p>
              <div style={{
                height: 1, flex: 1, maxWidth: 80,
                background: "linear-gradient(to right, rgba(229,57,53,0.4), transparent)",
              }}/>
            </div>
          </div>

          {/* GRID */}
          {movies.length === 0 ? (
            <div style={{ color: "rgba(255,255,255,0.3)", textAlign: "center", padding: "80px 0", fontSize: 14 }}>
              Filmlar topilmadi
            </div>
          ) : (
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: 20,
            }}>
              {movies.map((movie, index) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  firstEpisode={getFirstEpisode(movie.id)}
                  onWatch={handleWatch}
                  index={index}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Movies;
