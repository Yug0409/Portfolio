import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Icons = {
  LinkedIn: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  GitHub: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.419-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  ),
  Gmail: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
    </svg>
  ),
};

const inventory = [
  { icon: "🔥", name: "Unreal Engine 5", type: "Game Engine", rarity: "Legendary" },
  { icon: "🎮", name: "Unity", type: "Game Engine", rarity: "Legendary" },
  { icon: "🧠", name: "C#", type: "Language", rarity: "Epic" },
  { icon: "🎨", name: "Blender", type: "3D Tool", rarity: "Epic" },
  { icon: "🔷", name: "C++", type: "Language", rarity: "Rare" },
  { icon: "💻", name: "Game Design", type: "Concept", rarity: "Rare" },
  { icon: "🔮", name: "AR/VR", type: "Concept", rarity: "Rare" },
  { icon: "📜", name: "Python", type: "Language", rarity: "Common" },
  { icon: "☕", name: "Java", type: "Language", rarity: "Common" },
  { icon: "🖋️", name: "Figma", type: "Design Tool", rarity: "Common" },
];

const questLog = [
  {
    title: "Game Developer → Game Manager | Ansh Jain Global Networks LLP",
    date: "Dec 2025 – June 2026 · On-site · Kota",
    desc: "Core developer and promoted Game Manager on ICR – India Car Racing (Multiplayer), a Unity 3D racing game with 20+ Indian landmark tracks, real-time Photon PUN2 multiplayer, 19 cars, and an Open World India free-roam mode. Promoted to Game Manager in Week 8 — led a 4-person team, drove the full production roadmap, and single-handedly designed and built the complete Open World India multiplayer mode from concept to launch. Delivered a production-ready build published on Android, iOS, and Windows with cross-platform multiplayer.",
    current: true,
  },
  {
    title: "Game Developer Intern | IITian Craft (Remote)",
    date: "July 2025 – Aug 2025",
    desc: "Designed UI screens, token logic, and turn-handling for a multiplayer Ludo game in Unity. Collaborated with a 7-8 member team.",
  },
  {
    title: "Game Developer Intern | Parallel Galaxies",
    date: "May 2024 – July 2024",
    desc: "Developed 'Fish Frenzy' (2D Android match-3 game) and built a 3D open-world prototype in UE5 with combat and cinematics.",
  },
];

const achievements = [
  { title: "Unreal Engine Fundamentals", issuer: "Certification" },
  { title: "Introduction to C# & Unity", issuer: "Certification" },
  { title: "Introduction to Game Design", issuer: "Course Completion" },
  { title: "Game Development", issuer: "Certification" },
];

const skills = [
  { name: "Unity / C#", pct: 90, color: "#3b82f6" },
  { name: "Unreal Engine 5", pct: 85, color: "#6366f1" },
  { name: "Game Design", pct: 88, color: "#10b981" },
  { name: "Blender / 3D Art", pct: 75, color: "#f59e0b" },
  { name: "C++", pct: 65, color: "#8b5cf6" },
  { name: "AR / VR Dev", pct: 60, color: "#ec4899" },
];

const sideQuests = [
  { emoji: "🎸", label: "Guitar",      bg: "bg-pink-100",   text: "text-pink-800",   border: "border-pink-200",   hover: "hover:border-pink-400"   },
  { emoji: "⚽", label: "Man City Fan", bg: "bg-blue-100",   text: "text-blue-800",   border: "border-blue-200",   hover: "hover:border-blue-400"   },
  { emoji: "📺", label: "Anime",        bg: "bg-purple-100", text: "text-purple-800", border: "border-purple-200", hover: "hover:border-purple-400" },
  { emoji: "🏅", label: "Sportsman",   bg: "bg-green-100",  text: "text-green-800",  border: "border-green-200",  hover: "hover:border-green-400"  },
];

const rarityStyle = {
  Legendary: { border: "border-yellow-400", bg: "bg-yellow-50",  text: "text-yellow-600"  },
  Epic:      { border: "border-purple-300", bg: "bg-purple-50",  text: "text-purple-600"  },
  Rare:      { border: "border-blue-300",   bg: "bg-blue-50",    text: "text-blue-600"    },
  Common:    { border: "border-gray-200",   bg: "bg-gray-50",    text: "text-gray-500"    },
};

// Animates the bar when it scrolls into view
const SkillBar = ({ name, pct, color }) => {
  const [animated, setAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="font-bold text-gray-800 text-sm">{name}</span>
        <span
          className="text-xs font-mono font-bold px-2 py-0.5 rounded-full text-white"
          style={{ backgroundColor: color }}
        >
          {pct}%
        </span>
      </div>
      <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden border border-gray-200">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: animated ? `${pct}%` : "0%",
            background: `linear-gradient(90deg, ${color}88, ${color})`,
            boxShadow: animated ? `3px 0 10px ${color}, 1px 0 4px ${color}99` : "none",
          }}
        />
      </div>
    </div>
  );
};

const About = () => {
  const equippedItems = [inventory[0], inventory[1]];
  const backpackItems = inventory.slice(2);

  return (
    <section className="max-w-7xl mx-auto p-8 lg:p-12 pt-24 animate-fade-in-up">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* ── LEFT COLUMN ── */}
        <div className="lg:col-span-2 flex flex-col gap-10">

          {/* Player Header */}
          <div className="neo-panel p-8">
            <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-6">
              <div className="text-center md:text-left">
                <p className="text-base font-semibold text-gray-400 uppercase tracking-widest mb-1">
                  Player Profile
                </p>
                <h1 className="text-5xl font-bold text-black">Yug Mittal</h1>
                <p className="mt-2 text-gray-500 font-medium text-sm">
                  Game Developer · Class of 2026
                </p>
              </div>
              <div className="w-48 h-48 md:w-60 md:h-60 rounded-full border-4 border-blue-500 overflow-hidden shadow-lg shrink-0 glow-pulse">
                <img
                  src="/Images/me.jpeg"
                  alt="Yug Profile"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentNode.innerHTML =
                      '<div class="w-full h-full bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center text-6xl">🧑‍💻</div>';
                  }}
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
              <SocialLink
                href="https://www.linkedin.com/in/yug-mittal-red0409/?profileId=ACoAAD-cQ74BX7hYp21ePFbtP50bAUkS6BWDYcI"
                label="LinkedIn"
                icon={Icons.LinkedIn}
              />
              <SocialLink href="https://github.com/Yug0409" label="GitHub" icon={Icons.GitHub} />
              <SocialLink label="yugmittal2412@gmail.com" icon={Icons.Gmail} />
            </div>

            <Link to="/contact" className="neo-btn w-full text-center block bg-blue-50">
              <span className="btn-text text-lg">💬 Start Chat / Contact Me</span>
              <span className="arrow">→</span>
            </Link>
          </div>

          {/* Player Summary */}
          <div className="neo-panel p-8">
            <h2 className="text-3xl font-bold text-black mb-4">Player Summary</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Game Developer specializing in{" "}
              <span className="font-bold text-blue-600">Unity</span>,{" "}
              <span className="font-bold text-indigo-600">Unreal Engine 5</span>, and{" "}
              <span className="font-bold text-green-600">Game Design</span>. Experienced in
              mobile and PC game mechanics, UI/UX, and asset integration. Passionate about
              creating polished, engaging player experiences.
            </p>
          </div>

          {/* Character Stats */}
          <div className="neo-panel p-8">
            <h2 className="text-3xl font-bold text-black mb-6">Character Stats</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <StatBox icon="⚔️" label="Class"    value="Game Developer"     />
              <StatBox icon="⭐" label="Level"    value="22"                  />
              <StatBox icon="🧭" label="Status"   value="Seeking Quests"      />
              <StatBox icon="📍" label="Location" value="Kota"                />
              <StatBox icon="🏫" label="Guild"    value="J.K. Lakshmipat Uni" />
              <StatBox icon="📊" label="CGPA"     value="7.135"               />
            </div>
          </div>

          {/* Skill Tree */}
          <div className="neo-panel p-8">
            <h2 className="text-3xl font-bold text-black mb-6">Skill Tree</h2>
            {skills.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>

          {/* Quest Log */}
          <div className="neo-panel p-8">
            <h2 className="text-3xl font-bold text-black mb-6">Quest Log</h2>
            <div className="relative border-l-4 border-blue-200 pl-8">
              {questLog.map((quest) => (
                <div key={quest.title} className="mb-8 relative group">
                  <div className={`absolute -left-12 -top-1 w-10 h-10 rounded-full border-4 border-white flex items-center justify-center font-bold text-white shadow-md group-hover:scale-110 transition-transform duration-200 ${
                    quest.current
                      ? "bg-gradient-to-br from-blue-500 to-indigo-600"
                      : "bg-gradient-to-br from-green-400 to-emerald-600"
                  }`}>
                    {quest.current ? "⚡" : "✓"}
                  </div>
                  <div className={`p-5 rounded-xl border transition-all duration-200 hover:bg-white hover:shadow-md ${
                    quest.current
                      ? "bg-blue-50/60 border-blue-200 hover:border-blue-400"
                      : "bg-gray-50 border-gray-100 hover:border-blue-200"
                  }`}>
                    <div className="flex items-start justify-between gap-2 flex-wrap mb-1">
                      <h3 className="text-lg font-bold text-black leading-snug">{quest.title}</h3>
                      {quest.current && (
                        <span className="flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-blue-100 px-2.5 py-1 rounded-full border border-blue-300 shrink-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse inline-block" />
                          Active
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-blue-500 font-semibold mb-2">{quest.date}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{quest.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div className="lg:col-span-1 flex flex-col gap-10">

          {/* Inventory */}
          <div className="neo-panel p-8">
            <h2 className="text-3xl font-bold text-black mb-6 text-center">Inventory</h2>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
              Equipped
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {equippedItems.map((item) => (
                <ItemSlot key={item.name} item={item} equipped />
              ))}
            </div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
              Backpack
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {backpackItems.map((item) => (
                <ItemSlot key={item.name} item={item} />
              ))}
            </div>
          </div>

          {/* Training */}
          <div className="neo-panel p-8">
            <h2 className="text-3xl font-bold text-black mb-5">Training</h2>
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-3xl shadow-md shrink-0">
                🎓
              </div>
              <div>
                <h3 className="text-xl font-bold text-black">B.Tech, Comp. Sci</h3>
                <p className="text-gray-600 text-sm">J.K. Lakshmipat University</p>
                <p className="text-blue-500 font-semibold text-sm mt-0.5">2022 – 2026</p>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="neo-panel p-8">
            <h2 className="text-3xl font-bold text-black mb-5">Achievements</h2>
            <ul className="space-y-3">
              {achievements.map((ach, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200 hover:border-yellow-400 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl badge-shimmer flex items-center justify-center text-lg shadow shrink-0">
                    🏆
                  </div>
                  <div>
                    <h4 className="font-bold text-black text-sm leading-snug">{ach.title}</h4>
                    <p className="text-xs text-amber-600 font-semibold mt-0.5">{ach.issuer}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Side Quests */}
          <div className="neo-panel p-8">
            <h2 className="text-3xl font-bold text-black mb-5">Side Quests</h2>
            <div className="flex flex-wrap gap-2">
              {sideQuests.map(({ emoji, label, bg, text, border, hover }) => (
                <span
                  key={label}
                  className={`px-3 py-2 ${bg} ${text} rounded-xl font-bold text-sm border ${border} ${hover} hover:shadow-sm transition-all duration-200 cursor-default`}
                >
                  {emoji} {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, label, icon }) => {
  const base =
    "flex items-center gap-2 px-4 py-2 bg-gray-100 border-2 border-gray-200 rounded-lg font-medium text-black transition-all duration-200 group hover:shadow-sm";
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} hover:bg-blue-50 hover:border-blue-300 cursor-pointer`}
      >
        <span className="text-gray-600 group-hover:text-blue-600 transition-colors">{icon}</span>
        <span className="text-sm group-hover:text-blue-700">{label}</span>
      </a>
    );
  }
  return (
    <div className={`${base} cursor-default select-text`}>
      <span className="text-gray-600">{icon}</span>
      <span className="text-sm">{label}</span>
    </div>
  );
};

const StatBox = ({ icon, label, value }) => (
  <div className="neo-panel p-4 flex items-center gap-4 hover:border-blue-300 transition-colors">
    <div className="text-3xl">{icon}</div>
    <div>
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{label}</p>
      <p className="text-xl font-bold text-black leading-tight">{value}</p>
    </div>
  </div>
);

const ItemSlot = ({ item, equipped = false }) => {
  const { border, bg, text } = rarityStyle[item.rarity];
  return (
    <div
      className={`p-3 border-2 ${border} ${bg} rounded-xl flex flex-col items-center justify-center text-center aspect-square hover:scale-105 hover:shadow-md transition-all duration-200 ${
        equipped ? "ring-2 ring-yellow-400 ring-offset-2" : ""
      }`}
      title={`${item.type}: ${item.name}`}
    >
      <div className="text-3xl mb-1">{item.icon}</div>
      <h4 className="text-xs font-bold text-gray-900 leading-tight">{item.name}</h4>
      <p className={`text-xs font-semibold mt-0.5 ${text}`}>{item.rarity}</p>
    </div>
  );
};

export default About;
