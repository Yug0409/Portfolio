import React, { useState, useEffect } from "react";

// --- PROJECT DATA ---
const projects = [
  {
    title: "ICR – India Car Racing",
    logo: null,
    placeholderGradient: "linear-gradient(135deg, #1e3a8a 0%, #4c1d95 100%)",
    placeholderIcon: "🏎️",
    type: "3D Multiplayer Racing Game",
    status: "In Development",
    tags: ["Unity", "C#", "Photon PUN2", "Android", "iOS", "Windows"],
    desc: "A full-featured 3D racing game set across 20+ circuits inspired by real Indian landmarks — Delhi Metro, Varanasi Ghats, Budh International Circuit, Marina Beach, Atal Tunnel, Jaipur, and more. Published on Android, iOS, and Windows with cross-platform multiplayer — players on any platform race together in real time via Photon PUN2. Packed with physics-based driving (Unity Wheel Colliders), a 6-type combat powerup system (homing missiles, mines, thunder shock, shield...), rubber-band AI, Google Ads + Firebase analytics, an addressable track download system, and a full Open World India free-roam multiplayer mode. Started as Game Developer and promoted to Game Manager in Week 8 — led a 4-person team and personally architected the entire Open World India mode from scratch.",
    videoUrl: "/Images/ICR/YTDown.com_YouTube_ICR-Gameplay-Indian-Car-Racing-Simulator_Media_vPhAA3kv1B8_002_720p.mp4",
    gallery: [],
    downloadLinkAndroid: "https://play.google.com/store/apps/details?id=com.ANSHJAINGLOBALNETWORS.ICR",
    downloadLabelAndroid: "Play Store",
    downloadLinkAndroidExternal: true,
    downloadLinkPC: null,
    githubLink: null,
    walkthroughLink: null,
  },
  {
    title: "Fish Frenzy",
    logo: "/Images/Fish Frenzy/Logo.jpg",
    type: "2D Mobile & PC Game",
    tags: ["Unity", "C#", "Cross-Platform"],
    desc: "Dive into an underwater puzzle adventure! Developed as a match-3 game with a robust save/load system and dynamic difficulty scaling. I handled the full development cycle, optimizing the UI for both touch (Android) and mouse (PC) inputs.",
    videoUrl: null, 
    gallery: [
      "/Images/Fish Frenzy/Picture1.jpg",
      "/Images/Fish Frenzy/Picture2.jpg",
      "/Images/Fish Frenzy/Picture3.jpg",
      "/Images/Fish Frenzy/Picture4.jpg",
      "/Images/Fish Frenzy/Picture5.jpg",
    ],
    downloadLinkAndroid: "/builds/FishFrenzy.apk",
    downloadLinkPC: "/builds/FishFrenzy.exe",
    githubLink: null,
    walkthroughLink: null,
  },
  {
    title: "Line Up! Sliding Puzzle",
    logo: "/Images/LineUp/IconLogo.png",
    type: "2D Puzzle",
    tags: ["Unity", "Android"],
    desc: "A sleek, minimalist sliding puzzle game designed for Android. The core mechanic revolves around vertical slider rails and satisfying snap-based tile movement. I focused heavily on 'game feel'—polishing the touch inputs and designing smooth animated transitions.",
    videoUrl: "/Images/LineUp/Demo.mp4",
    gallery: [
       "/Images/LineUp/Splash.png",
       "/Images/LineUp/Home.png",
       "/Images/LineUp/Settings.png",
       "/Images/LineUp/Level1.png",
       "/Images/LineUp/Level4.png",
       "/Images/LineUp/Level7.png",
    ],
    githubLink: "https://github.com/Yug0409/PuzzleGame", 
    walkthroughLink: null,
  },
  {
    title: "Timewalker",
    logo: "/Images/TimeWalker/Screenshot 2025-04-25 182045.png",
    type: "3D Adventure",
    tags: ["UE5", "Blender"],
    desc: "A narrative-driven 3D adventure built in Unreal Engine 5. This project showcases my technical art skills, utilizing Blender for custom 3D assets and multi-biome environment design. I implemented complex gameplay systems including branching dialogue and quest tracking.",
    videoUrl: "/Images/TimeWalker/Trailer.mp4", 
    gallery: [
       "/Images/TimeWalker/Screenshot 2025-04-25 174153.png",
       "/Images/TimeWalker/Screenshot 2025-04-25 174350.png",
       "/Images/TimeWalker/Screenshot 2025-04-25 174803.png",
       "/Images/TimeWalker/Screenshot 2025-04-25 175114.png",
       "/Images/TimeWalker/Screenshot 2025-04-25 175304.png",
       "/Images/TimeWalker/Screenshot 2025-04-25 175847.png",
       "/Images/TimeWalker/Screenshot 2025-04-25 180324.png",
       "/Images/TimeWalker/Screenshot 2025-04-25 180403.png",
       "/Images/TimeWalker/Screenshot 2025-04-25 180502.png",
       "/Images/TimeWalker/Screenshot 2025-04-25 180547.png",
       "/Images/TimeWalker/Screenshot 2025-04-25 180631.png",
       "/Images/TimeWalker/Screenshot 2025-04-25 180711.png",
       "/Images/TimeWalker/Screenshot 2025-04-25 180820.png",
       "/Images/TimeWalker/Screenshot 2025-04-25 180935.png",
       "/Images/TimeWalker/Screenshot 2025-04-25 181057.png",
       "/Images/TimeWalker/Screenshot 2025-04-25 181153.png",
       "/Images/TimeWalker/Screenshot 2025-04-25 181435.png",
       "/Images/TimeWalker/Screenshot 2025-04-25 181539.png",
       "/Images/TimeWalker/Screenshot 2025-04-25 181625.png",
       "/Images/TimeWalker/Screenshot 2025-04-25 181714.png",
       "/Images/TimeWalker/Screenshot 2025-04-25 181906.png",
       "/Images/TimeWalker/Screenshot 2025-04-25 181934.png",
       "/Images/TimeWalker/Screenshot 2025-04-25 182005.png",
    ],
    githubLink: null,
    walkthroughLink: "https://1drv.ms/v/c/02e0ce9f388722e5/IQA5HXXcjJGfSKjtniUgENuRAfF9TB8HPVuySLhU5dDllqg?e=3Vbhxt",
  },
  {
    title: "Winterfell's Destiny",
    logo: "/Images/WinterfellDestiny/Logo.jpg",
    type: "Open World RPG",
    tags: ["UE5", "Blueprints"],
    desc: "An ambitious open-world RPG prototype developed in Unreal Engine 5. My primary focus was on level design and AI behavior. I sculpted vast terrains, set up tactical NPC combat zones with custom enemy AI, and directed cinematic sequences to bring the world to life.",
    videoUrl: null,
    gallery: [
       "/Images/WinterfellDestiny/Church.jpeg",
       "/Images/WinterfellDestiny/Coloseum.jpeg",
       "/Images/WinterfellDestiny/Dragon.jpeg",
       "/Images/WinterfellDestiny/Gate.jpeg",
       "/Images/WinterfellDestiny/Winterfell.jpeg",
    ],
    githubLink: null,
    walkthroughLink: null,
  },
];

// --- COMPONENT: THE GAME MODAL ---
const ProjectModal = ({ project, onClose, onNextProject, onPrevProject }) => {
  const mediaList = [];
  if (project.videoUrl) {
    mediaList.push({ type: "video", url: project.videoUrl });
  }
  if (project.gallery) {
    project.gallery.forEach((img) => {
      mediaList.push({ type: "image", url: img });
    });
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [project]);

  const handleNextMedia = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % mediaList.length);
  };

  const handlePrevMedia = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + mediaList.length) % mediaList.length);
  };

  const currentMedia = mediaList[currentIndex];
  const isYouTube = (url) => url.includes("youtube.com") || url.includes("youtu.be");

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-2 md:p-4 animate-fade-in"
      onClick={onClose}
    >
      {/* --- PROJECT NAVIGATION ARROWS (Fixed) --- */}
      {/* Hidden on very small screens to prevent overlay issues, visible on larger phones and up */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrevProject(); }}
        className="fixed left-2 md:left-8 top-1/2 -translate-y-1/2 z-50 bg-white/10 hover:bg-white hover:text-black text-white w-10 h-10 md:w-16 md:h-16 rounded-full flex items-center justify-center text-xl md:text-3xl font-bold transition-all border-2 border-white/20 backdrop-blur-md shadow-xl"
      >
        &lt;
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onNextProject(); }}
        className="fixed right-2 md:right-8 top-1/2 -translate-y-1/2 z-50 bg-white/10 hover:bg-white hover:text-black text-white w-10 h-10 md:w-16 md:h-16 rounded-full flex items-center justify-center text-xl md:text-3xl font-bold transition-all border-2 border-white/20 backdrop-blur-md shadow-xl"
      >
        &gt;
      </button>

      {/* --- MODAL CONTENT --- */}
      <div
        className="bg-white border-4 border-black shadow-[0px_0px_40px_rgba(0,0,0,0.5)] w-[95%] md:w-full max-w-5xl relative flex flex-col overflow-hidden max-h-[90vh] rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-white bg-black hover:bg-red-600 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-xl md:text-2xl font-bold transition-colors border-2 border-white rounded-md"
        >
          &times;
        </button>

        {/* Main Media Display - Height adjusted for mobile */}
        <div className="relative w-full h-[35vh] md:h-[60vh] bg-neutral-900 flex items-center justify-center border-b-4 border-black">
          {mediaList.length === 0 ? (
            <div
              className="w-full h-full flex flex-col items-center justify-center gap-3"
              style={{ background: project.placeholderGradient || "linear-gradient(135deg,#1e3a8a,#4c1d95)" }}
            >
              <span className="text-8xl drop-shadow-2xl">{project.placeholderIcon || "🎮"}</span>
              <p className="text-white/70 font-bold text-sm tracking-widest uppercase">Screenshots Coming Soon</p>
              <p className="text-white/40 text-xs">Game currently in development</p>
            </div>
          ) : currentMedia?.type === "video" ? (
            isYouTube(currentMedia.url) ? (
              <iframe
                src={currentMedia.url}
                title={project.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <video
                src={currentMedia.url}
                className="w-full h-full object-contain"
                controls
                autoPlay
                loop
              >
                Your browser does not support the video tag.
              </video>
            )
          ) : (
            <img
              src={currentMedia?.url}
              alt="Gameplay"
              className="w-full h-full object-contain"
            />
          )}

          {mediaList.length > 1 && (
            <>
              <button
                onClick={handlePrevMedia}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white hover:text-black text-white p-2 md:p-3 rounded-full backdrop-blur-md transition-all border border-white/20"
              >
                ◀
              </button>
              <button
                onClick={handleNextMedia}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white hover:text-black text-white p-2 md:p-3 rounded-full backdrop-blur-md transition-all border border-white/20"
              >
                ▶
              </button>
            </>
          )}
        </div>

        {/* Info Section */}
        <div className="p-4 md:p-8 overflow-y-auto bg-white">
          <div className="flex flex-col gap-4 mb-6 border-b-2 border-gray-100 pb-6">
            <div>
              {/* Responsive Text Size */}
              <h2 className="text-2xl md:text-4xl font-black text-black uppercase tracking-tight leading-tight">
                {project.title}
              </h2>
              <p className="text-blue-600 font-bold text-sm md:text-lg mt-1 tracking-wide">
                {project.type}
              </p>
            </div>
            
            {/* Buttons stack on mobile, row on desktop */}
            <div className="flex flex-col sm:flex-row gap-3">
              {project.downloadLinkAndroid && (
                <a
                  href={project.downloadLinkAndroid}
                  {...(project.downloadLinkAndroidExternal
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : { download: true })}
                  className="neo-btn flex items-center justify-center gap-2 w-full sm:w-auto min-w-[160px] bg-green-50 hover:bg-green-100 text-green-700 border-green-200 py-3"
                >
                  <span className="text-xl">🤖</span>
                  <span className="btn-text text-sm font-bold">{project.downloadLabelAndroid || "Android APK"}</span>
                </a>
              )}

              {project.downloadLinkPC && (
                <a href={project.downloadLinkPC} download className="neo-btn flex items-center justify-center gap-2 w-full sm:w-auto min-w-[160px] bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-200 py-3">
                  <span className="text-xl">💻</span>
                  <span className="btn-text text-sm font-bold">PC (EXE)</span>
                </a>
              )}

              {project.walkthroughLink && (
                <a href={project.walkthroughLink} target="_blank" rel="noopener noreferrer" className="neo-btn flex items-center justify-center gap-2 w-full sm:w-auto min-w-[160px] bg-yellow-50 hover:bg-yellow-100 text-yellow-700 border-yellow-200 py-3">
                  <span className="text-xl">📺</span>
                  <span className="btn-text text-sm font-bold">Walkthrough</span>
                </a>
              )}

              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="neo-btn flex items-center justify-center gap-2 w-full sm:w-auto min-w-[160px] bg-gray-50 hover:bg-gray-100 text-gray-800 border-gray-200 py-3">
                  <span className="text-xl">🐙</span>
                  <span className="btn-text text-sm font-bold">GitHub</span>
                </a>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-gray-900 text-white rounded-full text-xs md:text-sm font-bold tracking-wide shadow-sm">
                {tag}
              </span>
            ))}
          </div>

          <div className="prose max-w-none">
            <h3 className="text-lg md:text-xl font-black uppercase mb-3 flex items-center gap-2">
              <span className="w-2 h-6 md:h-8 bg-blue-600 block rounded-sm"></span>
              Mission Briefing
            </h3>
            <p className="text-sm md:text-lg text-gray-600 leading-relaxed font-medium">
              {project.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- COMPONENT: PROJECT CARD ---
const ProjectCard = ({ project, onClick }) => {
  const handleTilt = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const rotX = ((e.clientY - rect.top  - rect.height / 2) / rect.height) * 10;
    const rotY = ((rect.width / 2 - (e.clientX - rect.left)) / rect.width)  * 10;
    el.style.transition = "transform 0.1s ease";
    el.style.transform  = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.03)`;
  };
  const resetTilt = (e) => {
    const el = e.currentTarget;
    el.style.transition = "transform 0.5s ease";
    el.style.transform  = "";
  };

  return (
  <div
    onClick={() => onClick(project)}
    onMouseMove={handleTilt}
    onMouseLeave={resetTilt}
    className="group relative bg-white rounded-2xl border-2 border-slate-200 hover:border-blue-500 shadow-md hover:shadow-[0_8px_30px_rgba(59,130,246,0.2)] cursor-pointer overflow-hidden flex flex-col h-full"
    style={{ willChange: "transform" }}
  >
    <div className="relative w-full h-48 md:h-56 overflow-hidden border-b border-gray-200">
      {project.logo ? (
        <img
          src={project.logo}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      ) : (
        <div
          className="w-full h-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
          style={{ background: project.placeholderGradient || "linear-gradient(135deg,#3b82f6,#6366f1)" }}
        >
          <span className="text-7xl drop-shadow-lg">{project.placeholderIcon || "🎮"}</span>
        </div>
      )}
      {project.status && (
        <div className="absolute top-3 left-3 z-10">
          <span className="flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full bg-orange-500 text-white shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse inline-block" />
            {project.status}
          </span>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
        <span className="bg-blue-600 text-white font-bold py-2 px-6 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          View Project
        </span>
      </div>
    </div>

    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
        {project.title}
      </h3>
      <p className="text-xs md:text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wide">
        {project.type}
      </p>
      
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
  );
};

// --- MAIN PAGE ---
const Projects = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const oneDriveLink = "https://1drv.ms/f/c/02e0ce9f388722e5/IgDDADhGvFiOQp7cvz5mp7TiAYRG-O751omeHelmluzsPmk?e=4Rn6md";

  const handleNextProject = () => {
    setSelectedIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrevProject = () => {
    setSelectedIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="max-w-7xl mx-auto p-4 md:p-8 lg:p-12 relative overflow-x-hidden">
      
      <div className="absolute top-0 right-0 -z-10 w-64 h-64 md:w-96 md:h-96 bg-blue-100 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>

      <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
        <p className="text-sm md:text-lg font-bold text-blue-600 uppercase tracking-[0.2em] mb-2">
          My Portfolio
        </p>
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight mb-4">
          Game <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 glitch-anim">Library</span>
        </h1>
        <p className="text-gray-500 text-sm md:text-lg max-w-2xl mx-auto px-4">
          A collection of playable prototypes, tech demos, and full releases. 
          Click on a card to explore gameplay footage, download builds, or view the code.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mb-20 md:mb-24 px-2 animate-fade-in-up delay-200">
        {projects.map((proj, index) => (
          <ProjectCard 
            key={index} 
            project={proj} 
            onClick={() => setSelectedIndex(index)} 
          />
        ))}
      </div>

      <div className="w-full flex justify-center px-2">
        <div className="neo-panel p-6 md:p-10 max-w-3xl w-full text-center relative overflow-hidden group bg-white">
          <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50 group-hover:scale-110 transition-transform duration-700"></div>
          
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-black text-black mb-4 tracking-tight">Unlock The Archives</h2>
            <p className="text-gray-600 text-sm md:text-lg mb-6 md:mb-8 max-w-xl mx-auto font-medium">
              Access a treasure trove of unreleased prototypes, game jam entries, and experimental mechanics stored securely in the cloud vault.
            </p>
            <a
              href={oneDriveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-yellow-400/50 border-2 border-black text-sm md:text-base"
            >
              <span className="text-xl">📂</span>
              <span>Access Full Drive</span>
              <span className="text-xl">→</span>
            </a>
          </div>
        </div>
      </div>

      {selectedIndex !== null && (
        <ProjectModal
          project={projects[selectedIndex]}
          onClose={() => setSelectedIndex(null)}
          onNextProject={handleNextProject}
          onPrevProject={handlePrevProject}
        />
      )}
    </section>
  );
};

export default Projects;
