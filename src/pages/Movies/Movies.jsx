import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

/**
 * FAYL: src/pages/Movies/Movies.jsx
 * Ultra Premium Design
 */

const MOVIES = [
  { id: 1,  title: "Big Buck Bunny",    year: 2008, genre: "Animatsiya",     rating: 8.1, age: "0+",  seasons: null, duration: "9 daq",  video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",                  emoji: "🐰", hue: 120 },
  { id: 2,  title: "Elephant Dream",    year: 2006, genre: "Fantastika",     rating: 7.5, age: "12+", seasons: null, duration: "10 daq", video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantDream.mp4",                 emoji: "🐘", hue: 200 },
  { id: 3,  title: "Bigger Blazes",     year: 2013, genre: "Triller",        rating: 7.8, age: "16+", seasons: null, duration: "15 daq", video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",               emoji: "🔥", hue: 15  },
  { id: 4,  title: "Bigger Escapes",    year: 2013, genre: "Jangovar",       rating: 8.3, age: "18+", seasons: null, duration: "15 daq", video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",              emoji: "🚀", hue: 240 },
  { id: 5,  title: "For Bigger Fun",    year: 2013, genre: "Komediya",       rating: 7.2, age: "0+",  seasons: null, duration: "15 daq", video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",                  emoji: "😄", hue: 45  },
  { id: 6,  title: "Bigger Joyrides",   year: 2013, genre: "Drama",          rating: 8.0, age: "12+", seasons: null, duration: "15 daq", video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",             emoji: "🎢", hue: 280 },
  { id: 7,  title: "Meltdown City",     year: 2013, genre: "Drama",          rating: 7.6, age: "16+", seasons: null, duration: "15 daq", video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",            emoji: "💥", hue: 340 },
  { id: 8,  title: "Subaru Outback",    year: 2014, genre: "Priklyucheniya", rating: 7.9, age: "0+",  seasons: null, duration: "30 daq", video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",  emoji: "🚗", hue: 160 },
  { id: 9,  title: "Tears of Steel",    year: 2012, genre: "Sci-Fi",         rating: 8.4, age: "12+", seasons: null, duration: "12 daq", video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",                  emoji: "🤖", hue: 190 },
  { id: 10, title: "Volkswagen GTI",    year: 2015, genre: "Sport",          rating: 7.3, age: "0+",  seasons: null, duration: "20 daq", video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",           emoji: "🏎️", hue: 60  },
  { id: 11, title: "We Are Going",      year: 2013, genre: "Priklyucheniya", rating: 8.2, age: "12+", seasons: 2,    duration: "25 daq", video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",            emoji: "🏁", hue: 300 },
  { id: 12, title: "What Car",          year: 2013, genre: "Komediya",       rating: 7.1, age: "0+",  seasons: null, duration: "10 daq", video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",     emoji: "🚘", hue: 30  },
  { id: 13, title: "Dream World",       year: 2010, genre: "Animatsiya",     rating: 8.5, age: "0+",  seasons: 2,    duration: "9 daq",  video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",                  emoji: "🌟", hue: 55  },
  { id: 14, title: "Steel Dreams",      year: 2015, genre: "Fantastika",     rating: 8.7, age: "16+", seasons: 3,    duration: "12 daq", video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",                  emoji: "⚔️", hue: 210 },
  { id: 15, title: "Thunder Road",      year: 2016, genre: "Jangovar",       rating: 7.8, age: "18+", seasons: null, duration: "15 daq", video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",               emoji: "⚡", hue: 50  },
  { id: 16, title: "Night Escape",      year: 2017, genre: "Triller",        rating: 8.9, age: "18+", seasons: 2,    duration: "45 daq", video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",              emoji: "🌙", hue: 250 },
  { id: 17, title: "Elephant Quest",    year: 2011, genre: "Drama",          rating: 7.4, age: "12+", seasons: null, duration: "10 daq", video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantDream.mp4",                 emoji: "🌿", hue: 140 },
  { id: 18, title: "Joy Ride",          year: 2019, genre: "Komediya",       rating: 8.0, age: "12+", seasons: null, duration: "15 daq", video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",             emoji: "🎉", hue: 320 },
  { id: 19, title: "Volcano Run",       year: 2020, genre: "Jangovar",       rating: 8.3, age: "18+", seasons: 3,    duration: "15 daq", video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",            emoji: "🌋", hue: 10  },
  { id: 20, title: "Off Road",          year: 2021, genre: "Priklyucheniya", rating: 7.7, age: "0+",  seasons: null, duration: "30 daq", video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",  emoji: "🏔️", hue: 170 },
];

// Yulduzlar reyting uchun
const StarRating = ({ rating }) => {
  const full = Math.floor(rating / 2);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="10" height="10" viewBox="0 0 24 24"
          fill={i < full ? "#FFD700" : "rgba(255,255,255,0.2)"}
          stroke={i < full ? "#FFD700" : "rgba(255,255,255,0.2)"}
          strokeWidth="1">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ))}
      <span style={{ color: "#FFD700", fontSize: 11, fontWeight: 700, marginLeft: 2 }}>{rating}</span>
    </div>
  );
};

// Bitta premium karta
const MovieCard = ({ movie, onOpen, index }) => {
  const [hovered, setHovered] = useState(false);
  const h = movie.hue;
  const accent = `hsl(${h}, 80%, 55%)`;
  const accentDark = `hsl(${h}, 80%, 35%)`;
  const glow = `hsla(${h}, 80%, 55%, 0.45)`;

  return (
    <div
      onClick={() => onOpen(movie)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: 16,
        overflow: "hidden",
        cursor: "pointer",
        background: "#111",
        border: `1px solid ${hovered ? `hsla(${h},70%,55%,0.35)` : "rgba(255,255,255,0.07)"}`,
        boxShadow: hovered
          ? `0 24px 60px rgba(0,0,0,0.8), 0 0 0 1px ${glow}, inset 0 1px 0 rgba(255,255,255,0.08)`
          : "0 6px 24px rgba(0,0,0,0.5)",
        transform: hovered ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)",
        transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
        animationDelay: `${index * 0.05}s`,
        animation: "fadeSlideIn 0.5s ease forwards",
        opacity: 0,
      }}
    >
      {/* POSTER AREA */}
      <div style={{
        width: "100%",
        height: 280,
        position: "relative",
        overflow: "hidden",
        background: `
          radial-gradient(ellipse at 30% 20%, hsla(${h},60%,25%,0.8) 0%, transparent 60%),
          radial-gradient(ellipse at 70% 80%, hsla(${h+60},50%,15%,0.6) 0%, transparent 55%),
          linear-gradient(160deg, hsl(${h},30%,10%) 0%, hsl(${h+40},20%,6%) 100%)
        `,
      }}>
        {/* Shimmer overlay on hover */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 1,
          background: `linear-gradient(135deg, transparent 40%, hsla(${h},80%,70%,${hovered ? 0.06 : 0}) 60%, transparent 80%)`,
          transition: "all 0.4s ease",
        }}/>

        {/* Noise texture effect */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 1,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
          backgroundSize: "150px",
          opacity: 0.4,
          mixBlendMode: "overlay",
        }}/>

        {/* Decorative circles */}
        <div style={{
          position: "absolute", top: -30, right: -30, zIndex: 1,
          width: 120, height: 120, borderRadius: "50%",
          background: `radial-gradient(circle, hsla(${h},70%,50%,0.12) 0%, transparent 70%)`,
          filter: "blur(20px)",
        }}/>
        <div style={{
          position: "absolute", bottom: 20, left: -20, zIndex: 1,
          width: 80, height: 80, borderRadius: "50%",
          background: `radial-gradient(circle, hsla(${h+120},60%,50%,0.1) 0%, transparent 70%)`,
          filter: "blur(15px)",
        }}/>

        {/* Emoji — big, centered */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 2,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 72,
          filter: `drop-shadow(0 8px 24px ${glow})`,
          transform: hovered ? "scale(1.1) translateY(-4px)" : "scale(1) translateY(0)",
          transition: "transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
          userSelect: "none",
        }}>
          {movie.emoji}
        </div>

        {/* Top bar — rating + age */}
        <div style={{
          position: "absolute", top: 12, left: 12, right: 12, zIndex: 4,
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          {/* Rating pill */}
          <div style={{
            background: "rgba(0,0,0,0.7)",
            backdropFilter: "blur(12px)",
            borderRadius: 20,
            padding: "4px 10px",
            display: "flex", alignItems: "center", gap: 5,
            border: "1px solid rgba(255,255,255,0.1)",
          }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="#FFD700">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
            <span style={{ color: "#FFD700", fontSize: 12, fontWeight: 800, letterSpacing: "-0.02em" }}>
              {movie.rating}
            </span>
          </div>

          {/* Age badge */}
          <div style={{
            background: movie.age === "18+" ? "rgba(229,57,53,0.85)" : "rgba(0,0,0,0.7)",
            backdropFilter: "blur(12px)",
            borderRadius: 6,
            padding: "3px 8px",
            border: `1px solid ${movie.age === "18+" ? "rgba(229,57,53,0.5)" : "rgba(255,255,255,0.1)"}`,
          }}>
            <span style={{ color: "#fff", fontSize: 10, fontWeight: 800 }}>{movie.age}</span>
          </div>
        </div>

        {/* Bottom gradient */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "65%",
          background: "linear-gradient(to top, rgba(0,0,0,0.97) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)",
          zIndex: 3,
        }}/>

        {/* Film title inside poster */}
        <div style={{
          position: "absolute", bottom: 14, left: 14, right: 14, zIndex: 4,
        }}>
          <p style={{
            color: "#fff",
            fontWeight: 900,
            fontSize: 15,
            margin: 0,
            lineHeight: 1.2,
            letterSpacing: "0.02em",
            textShadow: "0 2px 12px rgba(0,0,0,0.9)",
            fontFamily: "'Bebas Neue', 'Oswald', 'Manrope', sans-serif",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}>
            {movie.title}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 4 }}>
            <span style={{
              color: accent,
              fontSize: 10,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}>{movie.genre}</span>
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 10 }}>·</span>
            <span style={{ color: "rgba(255,255,255,0.45)", fontSize: 10 }}>{movie.year}</span>
            {movie.seasons && (
              <>
                <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 10 }}>·</span>
                <span style={{ color: "rgba(255,255,255,0.45)", fontSize: 10 }}>{movie.seasons} mavsum</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* BOTTOM CARD SECTION */}
      <div style={{
        padding: "12px 14px 14px",
        background: `linear-gradient(180deg, #111 0%, #0d0d0d 100%)`,
        borderTop: `1px solid hsla(${h},50%,40%,0.15)`,
      }}>
        {/* Duration */}
        <div style={{
          display: "flex", alignItems: "center", gap: 5, marginBottom: 10,
        }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
          </svg>
          <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 11 }}>{movie.duration}</span>
        </div>

        {/* WATCH BUTTON */}
        <button style={{
          width: "100%",
          background: hovered
            ? `linear-gradient(135deg, ${accent} 0%, ${accentDark} 100%)`
            : "linear-gradient(135deg, #E53935 0%, #B71C1C 100%)",
          color: "#fff",
          border: "none",
          borderRadius: 10,
          padding: "10px 0",
          fontSize: 12,
          fontWeight: 800,
          cursor: "pointer",
          fontFamily: "'Manrope', sans-serif",
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          display: "flex", alignItems: "center", justifyContent: "center", gap: 7,
          boxShadow: hovered
            ? `0 6px 24px ${glow}`
            : "0 4px 16px rgba(229,57,53,0.3)",
          transition: "all 0.3s ease",
        }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="#fff">
            <polygon points="6 3 20 12 6 21 6 3"/>
          </svg>
          Ko'rish
        </button>
      </div>
    </div>
  );
};

const Movies = () => {
  const navigate = useNavigate();

  const handleOpen = (movie) => {
    sessionStorage.setItem("testVideo", JSON.stringify({
      title: movie.title,
      videoUrl: movie.video,
      genre: movie.genre,
      year: movie.year,
      rating: movie.rating,
    }));
    navigate(`/watch/test-${movie.id}`);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800;900&display=swap');

        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(20px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)    scale(1); }
        }

        .movies-grid::-webkit-scrollbar { display: none; }

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
          <div style={{ marginBottom: 32, position: "relative" }}>
            <div style={{
              position: "absolute", top: -20, left: -10,
              width: 200, height: 80,
              background: "radial-gradient(ellipse, rgba(229,57,53,0.12) 0%, transparent 70%)",
              filter: "blur(20px)",
              pointerEvents: "none",
            }}/>
            <h1 style={{
              color: "#fff",
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 900,
              margin: "0 0 6px",
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}>
              Filmlar
              <span style={{
                display: "inline-block",
                width: 6, height: 6,
                borderRadius: "50%",
                background: "#E53935",
                marginLeft: 8,
                verticalAlign: "middle",
                boxShadow: "0 0 12px #E53935",
              }}/>
            </h1>
            <p style={{
              color: "rgba(255,255,255,0.28)",
              fontSize: 13,
              margin: 0,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}>
              {MOVIES.length} ta film mavjud · Test rejimi
            </p>
          </div>

          {/* GRID */}
          <div
            className="movies-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))",
              gap: 18,
            }}
          >
            {MOVIES.map((movie, index) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onOpen={handleOpen}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Movies;
