import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

/**
 * FAYL: src/pages/Watch/WatchPage.jsx
 * ROUTE: /watch/:id  (id = episodeId yoki "test-N")
 */

const WatchPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  const [currentEpisode, setCurrentEpisode] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ── TEST REJIMI: Movies sahifasidan kelgan ──
    if (id?.startsWith("test-")) {
      const saved = sessionStorage.getItem("testVideo");
      if (saved) {
        const data = JSON.parse(saved);
        setMovie({ title: data.title, audioTracks: ["Русский", "English", "O'zbekcha"], subtitles: ["Выкл", "Русский", "English", "O'zbek"] });
        setCurrentEpisode({ id: 0, season: 1, episode: 1, title: data.title, videoUrl: data.videoUrl, duration: "~15 min" });
        setEpisodes([{ id: 0, season: 1, episode: 1, title: data.title, videoUrl: data.videoUrl, duration: "~15 min" }]);
      } else {
        navigate("/movies");
      }
      setLoading(false);
      return;
    }

    // ── ASOSIY REJIM: db.json dan ──
    const load = async () => {
      try {
        const res = await fetch("/db.json");
        const data = await res.json();

        const ep = data.episodes.find(e => e.id === parseInt(id));
        if (!ep) { navigate("/404"); return; }

        const mv = data.movies.find(m => m.id === ep.movieId);
        const eps = data.episodes.filter(e => e.movieId === ep.movieId);

        setMovie(mv);
        setEpisodes(eps);
        setCurrentEpisode(ep);
      } catch {
        navigate("/500");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [id, navigate]);

  const handleEpisodeChange = (ep) => {
    setCurrentEpisode(ep);
    if (!id?.startsWith("test-")) {
      navigate(`/watch/${ep.id}`, { replace: true });
    }
  };

  if (loading) return (
    <div style={{
      width: "100vw", height: "100vh", background: "#000",
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <div style={{
        width: 36, height: 36,
        border: "3px solid rgba(255,255,255,0.15)",
        borderTopColor: "#E53935",
        borderRadius: "50%",
        animation: "spin .8s linear infinite",
      }}/>
      <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
    </div>
  );

  return (
    <VideoPlayer
      movie={movie}
      episode={currentEpisode}
      episodes={episodes}
      onClose={() => navigate(-1)}
      onEpisodeChange={handleEpisodeChange}
    />
  );
};

export default WatchPage;
