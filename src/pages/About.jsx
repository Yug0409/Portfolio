import React from "react";
import { Link } from "react-router-dom";

// --- ICONS (Official SVGs) ---
const Icons = {
  LinkedIn: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  GitHub: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.419-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  ),
  Gmail: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
    </svg>
  ),
  Phone: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z"/>
      <path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a5.252 5.252 0 0 1-3.996-3.972l-.97 1.643c.196.74.714 1.678 1.803 2.766 1.088 1.089 2.025 1.606 2.765 1.803l.422-.714.976-1.526z"/>
      <path d="M14.017 14.939a1.75 1.75 0 0 1-.501-.086 9.037 9.037 0 0 1-4.453-3.104 8.989 8.989 0 0 1-1.629-4.404 1.743 1.743 0 0 1 1.167-1.839l.029-.01 1.535-1.023a1.75 1.75 0 0 1 2.33.404l1.644 2.055a1.746 1.746 0 0 1-.281 2.426l-.487.364-.012.014c-.126.165-.268.646.157 1.071.425.425.906.283 1.071.158l.014-.012.364-.487a1.75 1.75 0 0 1 2.427-.281l2.055 1.644a1.748 1.748 0 0 1 .403 2.33l-1.022 1.535a1.746 1.746 0 0 1-1.429.795h-.003c-.01 0-.021 0-.031-.001z"/>
    </svg>
  )
};

// --- INVENTORY DATA (from your resume) ---
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

// --- QUEST DATA (from your resume) ---
const questLog = [
  {
    status: "Completed",
    title: "Game Developer Intern | IITian Craft (Remote)",
    date: "July 2025 - Aug 2025",
    desc: "Designed UI screens, token logic, and turn-handling for a multiplayer Ludo game in Unity. Collaborated with a 7-8 member team.",
  },
  {
    status: "Completed",
    title: "Game Developer Intern | Parallel Galaxies",
    date: "May 2024 - July 2024",
    desc: "Developed 'Fish Frenzy' (2D Android match-3 game) and built a 3D open-world prototype in UE5 with combat and cinematics.",
  },
];

// --- ACHIEVEMENTS DATA (Game Dev Only) ---
const achievements = [
  { title: "Unreal Engine Fundamentals", issuer: "Certification" },
  { title: "Introduction to C# & Unity", issuer: "Certification" },
  { title: "Introduction to Game Design", issuer: "Course Completion" },
  { title: "Game Development", issuer: "Certification" },
];

const About = () => {
  const equippedItems = [inventory[0], inventory[1]];
  const backpackItems = inventory.slice(2);

  return (
    <section className="max-w-7xl mx-auto p-8 lg:p-12 pt-24">
      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* --- LEFT COLUMN --- */}
        <div className="lg:col-span-2 flex flex-col gap-10">
          
          {/* Player Header Panel */}
          <div className="neo-panel p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-xl font-semibold text-gray-500 uppercase">
                  Player Profile
                </p>
                <h1 className="text-5xl font-bold text-black">Yug Mittal</h1>
              </div>
              <div className="text-6xl">🧑‍💻</div>
            </div>

            {/* Comms Channels (Updated) */}
            <div className="flex flex-wrap gap-3 mb-8">
              {/* Clickable Links */}
              <SocialLink 
                href="https://www.linkedin.com/in/yug-mittal-red0409/?profileId=ACoAAD-cQ74BX7hYp21ePFbtP50bAUkS6BWDYcI" 
                label="LinkedIn" 
                icon={Icons.LinkedIn} 
              />
              <SocialLink 
                href="https://github.com/Yug0409" 
                label="GitHub" 
                icon={Icons.GitHub} 
              />
              
              {/* Static Text (Non-clickable) */}
              <SocialLink 
                label="yugmittal2412@gmail.com" 
                icon={Icons.Gmail} 
              />
              <SocialLink 
                label="+91 77270 82315" 
                icon={Icons.Phone} 
              />
            </div>

            {/* Contact Button */}
            <Link to="/contact" className="neo-btn w-full text-center block bg-blue-50">
              <span className="btn-text text-lg">💬 Start Chat / Contact Me</span>
              <span className="arrow">→</span>
            </Link>
          </div>

          {/* Player Summary Panel */}
          <div className="neo-panel p-8">
            <h2 className="text-3xl font-bold text-black mb-4">
              Player Summary
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Game Developer specializing in Unity, Unreal Engine 5, and Game
              Design. Experienced in mobile and PC game mechanics, UI/UX, and
              asset integration. Passionate about creating polished, engaging
              player experiences.
            </p>
          </div>

          {/* Character Stats Panel */}
          <div className="neo-panel p-8">
            <h2 className="text-3xl font-bold text-black mb-6">
              Character Stats
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <StatBox icon="⚔️" label="Class" value="Game Developer" />
              <StatBox icon="⭐" label="Level" value="22" />
              <StatBox icon="🧭" label="Status" value="Seeking Quests" />
              <StatBox icon="📍" label="Location" value="Kota" />
              <StatBox icon="🏫" label="Guild" value="J.K. Lakshmipat Uni" />
              <StatBox icon="📊" label="CGPA" value="7.135" />
            </div>
          </div>

          {/* Quest Log Panel */}
          <div className="neo-panel p-8">
            <h2 className="text-3xl font-bold text-black mb-6">Quest Log</h2>
            <div className="relative border-l-4 border-blue-300 pl-8">
              {questLog.map((quest) => (
                <div key={quest.title} className="mb-10 relative">
                  <div className="absolute -left-12 -top-1 w-10 h-10 bg-green-500 rounded-full border-4 border-white flex items-center justify-center font-bold text-lg">
                    ✓
                  </div>
                  <h3 className="text-2xl font-semibold">{quest.title}</h3>
                  <p className="text-md text-gray-600 mb-2">{quest.date}</p>
                  <p className="text-gray-700">{quest.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN --- */}
        <div className="lg:col-span-1 flex flex-col gap-10">
          
          {/* Inventory Panel */}
          <div className="neo-panel p-8">
            <h2 className="text-3xl font-bold text-black mb-6 text-center">
              Inventory
            </h2>

            {/* Equipped Items */}
            <h3 className="text-xl font-bold text-black mb-4">Equipped</h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {equippedItems.map((item) => (
                <ItemSlot
                  key={item.name}
                  item={item}
                  className="border-yellow-400 bg-yellow-50"
                />
              ))}
            </div>

            {/* Backpack Items */}
            <h3 className="text-xl font-bold text-black mb-4">Backpack</h3>
            <div className="grid grid-cols-3 gap-3">
              {backpackItems.map((item) => (
                <ItemSlot key={item.name} item={item} />
              ))}
            </div>
          </div>

          {/* Training Panel */}
          <div className="neo-panel p-8">
            <h2 className="text-3xl font-bold text-black mb-4">Training</h2>
            <div className="flex items-center">
              <span className="text-5xl mr-6">🎓</span>
              <div>
                <h3 className="text-xl font-semibold">
                  B.Tech, Comp. Sci
                </h3>
                <p className="text-md text-gray-600">
                  J.K. Lakshmipat University
                </p>
                <p className="text-md text-gray-600">2022-2026</p>
              </div>
            </div>
          </div>

          {/* Achievements Panel */}
          <div className="neo-panel p-8">
            <h2 className="text-3xl font-bold text-black mb-4">Achievements</h2>
            <ul className="space-y-4">
              {achievements.map((ach, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-2xl">🏆</span>
                  <div>
                    <h4 className="font-bold text-black">{ach.title}</h4>
                    <p className="text-sm text-gray-500">{ach.issuer}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Side Quests Panel */}
          <div className="neo-panel p-8">
            <h2 className="text-3xl font-bold text-black mb-4">Side Quests</h2>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full font-bold text-sm">
                🎸 Guitar
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-bold text-sm">
                ⚽ Man City Fan
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full font-bold text-sm">
                📺 Anime
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full font-bold text-sm">
                🏅 Sportsman
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- Helper: Smart Social Link (Handles links vs static text) ---
const SocialLink = ({ href, label, icon }) => {
  const baseClasses = "flex items-center gap-2 px-4 py-2 bg-gray-100 border-2 border-gray-200 rounded-lg text-black font-medium transition-colors group";
  
  // If href exists, render an anchor tag (clickable)
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} hover:bg-blue-100 cursor-pointer`}
      >
        <span className="text-gray-700 group-hover:text-blue-600 transition-colors">{icon}</span>
        <span>{label}</span>
      </a>
    );
  }

  // If no href, render a div (static, non-clickable)
  return (
    <div className={`${baseClasses} cursor-default`}>
      <span className="text-gray-700">{icon}</span>
      <span>{label}</span>
    </div>
  );
};

const StatBox = ({ icon, label, value }) => (
  <div className="neo-panel p-4 flex items-center gap-4">
    <div className="text-4xl">{icon}</div>
    <div>
      <p className="text-sm font-semibold text-gray-500 uppercase">{label}</p>
      <p className="text-2xl font-bold text-black">{value}</p>
    </div>
  </div>
);

const ItemSlot = ({ item, className = "" }) => {
  const rarityColor = {
    Legendary: "text-yellow-600",
    Epic: "text-purple-600",
    Rare: "text-blue-600",
    Common: "text-gray-600",
  };

  return (
    <div
      className={`p-3 border-2 border-gray-200 rounded-lg flex flex-col items-center justify-center text-center aspect-square ${className} hover:bg-gray-100 transition-colors`}
      title={`${item.type}: ${item.name}`}
    >
      <div className="text-4xl mb-1">{item.icon}</div>
      <h4 className="text-sm font-bold text-gray-900">{item.name}</h4>
      <p className={`text-xs font-semibold ${rarityColor[item.rarity]}`}>
        {item.rarity}
      </p>
    </div>
  );
};

export default About;