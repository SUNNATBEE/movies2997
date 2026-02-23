import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

/**
 * FAYL: src/pages/Watch/WatchPage.jsx
 * ROUTE: /watch/:id  (id = episodeId)
 */

// =============================================
// TEST KARTOCHKA — ko'rib bolgandan keyin
// bu komponentni va pastdagi if(!id) ni o'chiring
// =============================================
const TestCard = ({ onClick }) => (
  <div style={{
    minHeight:"100vh", background:"#0f0f0f",
    display:"flex", flexDirection:"column",
    alignItems:"center", justifyContent:"center",
    fontFamily:"'Manrope',sans-serif", padding:20, gap:16,
  }}>
    <p style={{color:"rgba(255,255,255,0.25)",fontSize:11,textTransform:"uppercase",letterSpacing:"0.1em",margin:0}}>
      Test — bosing, video ochiladi
    </p>

    <div
      onClick={onClick}
      style={{
        width:260, borderRadius:14, overflow:"hidden",
        cursor:"pointer", position:"relative",
        boxShadow:"0 20px 60px rgba(0,0,0,0.7)",
        transition:"transform 0.2s ease",
      }}
      onMouseEnter={e => e.currentTarget.style.transform="scale(1.04)"}
      onMouseLeave={e => e.currentTarget.style.transform="scale(1)"}
    >
      {/* Poster */}
      <div style={{
        width:"100%", height:360,
        background:"linear-gradient(160deg,#1c2b1c 0%,#2d1b1b 40%,#1a1a2e 100%)",
        position:"relative", overflow:"hidden",
        display:"flex", alignItems:"center", justifyContent:"center",
      }}>
        {/* gradient overlay */}
        <div style={{
          position:"absolute", bottom:0, left:0, right:0, height:"50%",
          background:"linear-gradient(to top,rgba(0,0,0,0.9) 0%,transparent 100%)",
          zIndex:2,
        }}/>

        {/* emoji poster */}
        <div style={{fontSize:72, userSelect:"none", opacity:0.8}}>🎬</div>

        {/* Rating */}
        <div style={{
          position:"absolute", top:11, left:11, zIndex:3,
          background:"rgba(0,0,0,0.55)", backdropFilter:"blur(6px)",
          borderRadius:7, padding:"4px 9px",
          display:"flex", alignItems:"center", gap:4,
        }}>
          <span style={{fontSize:13}}>🌾</span>
          <span style={{color:"#fff",fontWeight:800,fontSize:13}}>8.3</span>
          <span style={{fontSize:13}}>🌾</span>
        </div>

        {/* Play */}
        <div style={{
          position:"absolute", top:"50%", left:"50%",
          transform:"translate(-50%,-50%)", zIndex:3,
          width:56, height:56, borderRadius:"50%",
          background:"rgba(229,57,53,0.88)",
          display:"flex", alignItems:"center", justifyContent:"center",
          boxShadow:"0 4px 20px rgba(229,57,53,0.5)",
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><polygon points="6 3 20 12 6 21 6 3"/></svg>
        </div>

        {/* Title */}
        <div style={{position:"absolute",bottom:13,left:13,right:13,zIndex:3}}>
          <p style={{color:"#fff",fontWeight:800,fontSize:20,margin:0,lineHeight:1.1,textShadow:"0 2px 8px rgba(0,0,0,0.6)"}}>
            ГАННИБАЛ
          </p>
        </div>
      </div>

      {/* Info */}
      <div style={{background:"#1a1a1a",padding:"13px 13px 15px",borderTop:"1px solid rgba(255,255,255,0.06)"}}>
        <div style={{display:"flex",alignItems:"center",gap:7,marginBottom:10,flexWrap:"wrap"}}>
          <span style={{background:"rgba(229,57,53,0.15)",color:"#E53935",fontSize:10,fontWeight:700,padding:"3px 7px",borderRadius:5,border:"1px solid rgba(229,57,53,0.25)"}}>18+</span>
          <span style={{color:"rgba(255,255,255,0.4)",fontSize:11}}>2013</span>
          <span style={{color:"rgba(255,255,255,0.2)"}}>·</span>
          <span style={{color:"rgba(255,255,255,0.4)",fontSize:11}}>Триллер</span>
          <span style={{color:"rgba(255,255,255,0.2)"}}>·</span>
          <span style={{color:"rgba(255,255,255,0.4)",fontSize:11}}>3 сезона</span>
        </div>
        <button style={{
          width:"100%",
          background:"linear-gradient(135deg,#E53935 0%,#C62828 100%)",
          color:"#fff", border:"none", borderRadius:8,
          padding:"10px 0", fontSize:13, fontWeight:700,
          cursor:"pointer", fontFamily:"'Manrope',sans-serif",
          display:"flex", alignItems:"center", justifyContent:"center", gap:6,
          boxShadow:"0 4px 14px rgba(229,57,53,0.3)",
        }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="#fff"><polygon points="6 3 20 12 6 21 6 3"/></svg>
          Смотреть · 1 серия
        </button>
      </div>
    </div>

    <p style={{color:"rgba(255,255,255,0.12)",fontSize:10,marginTop:0}}>
      Ko'rib bolgandan keyin TestCard ni o'chiring
    </p>
  </div>
);
// =============================================

const WatchPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  const [currentEpisode, setCurrentEpisode] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) { setLoading(false); return; }

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
    navigate(`/watch/${ep.id}`, { replace: true });
  };

  // TEST — ko'rib bolgandan keyin shu 3 qatorni o'chiring:
  if (!id) return <TestCard onClick={() => navigate("/watch/3")} />;

  if (loading) return (
    <div style={{width:"100vw",height:"100vh",background:"#000",display:"flex",alignItems:"center",justifyContent:"center"}}>
      <div style={{width:36,height:36,border:"3px solid rgba(255,255,255,0.15)",borderTopColor:"#E53935",borderRadius:"50%",animation:"spin .8s linear infinite"}}/>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
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
