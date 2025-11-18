import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import { useEffect, useRef, useState } from "react"; // Import hooks

import Navbar from "./components/Navbar";
import { Home, About, Projects, Contact } from "./pages";

// Import Audio Assets (Adjust path if your App.jsx is in src/)
import sakura from "./assets/sakura.mp3";
import { soundoff, soundon } from "./assets/icons";

const AppContent = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // --- MUSIC LOGIC (Moved Global) ---
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

  // --- BG LOGIC ---
  const mainClassName = isHomePage
    ? "bg-transparent"
    : "game-dev-bg pt-24";

  return (
    <main className={mainClassName}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* --- MUSIC BUTTON (Fixed to bottom-left of screen) --- */}
      <div className='fixed bottom-2 left-2 z-50'>
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt='jukebox'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className='w-10 h-10 cursor-pointer object-contain'
        />
      </div>
    </main>
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