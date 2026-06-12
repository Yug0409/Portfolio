import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import { useEffect, useRef, useState, useMemo } from "react";

import Navbar from "./components/Navbar";
import { Home, About, Projects, Contact } from "./pages";

import sakura from "./assets/sakura.mp3";
import { soundoff, soundon } from "./assets/icons";

// Floating background particles — shown on all non-home pages
const Particles = () => {
  const particles = useMemo(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${((i * 4.7 + Math.sin(i * 0.9) * 25 + 50) % 100).toFixed(1)}%`,
      size: ((i % 3) + 2).toFixed(1),
      duration: `${13 + (i % 9)}s`,
      delay: `${((i * 1.4) % 11).toFixed(1)}s`,
      color:
        i % 3 === 0
          ? "rgba(99,102,241,0.22)"
          : i % 3 === 1
          ? "rgba(59,130,246,0.18)"
          : "rgba(167,139,250,0.18)",
    })),
  []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            bottom: "-8px",
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.color,
            borderRadius: "50%",
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
};

const AppContent = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Cursor spotlight — subtle blue radial glow that follows the mouse
  const [mouse, setMouse] = useState({ x: -1000, y: -1000 });
  useEffect(() => {
    const move = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // Music
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }
    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  const mainClassName = isHomePage ? "bg-transparent" : "game-dev-bg pt-24";

  return (
    <>
      {/* Cursor spotlight — desktop only, non-home pages */}
      {!isHomePage && (
        <div
          className="pointer-events-none fixed inset-0 z-40 hidden md:block"
          style={{
            background: `radial-gradient(500px circle at ${mouse.x}px ${mouse.y}px, rgba(59,130,246,0.08), transparent 40%)`,
          }}
        />
      )}

      {/* Floating particles — non-home pages */}
      {!isHomePage && <Particles />}

      <main className={mainClassName}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <div className="fixed bottom-2 left-2 z-50">
          <img
            src={!isPlayingMusic ? soundoff : soundon}
            alt="jukebox"
            onClick={() => setIsPlayingMusic(!isPlayingMusic)}
            className="w-10 h-10 cursor-pointer object-contain"
          />
        </div>
      </main>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
