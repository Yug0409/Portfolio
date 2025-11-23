import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useEffect } from "react";

import { HomeInfo, Loader } from "../components";
import { Bird, Island, Plane, Sky } from "../models";

const Home = () => {
  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (isMobile) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (isMobile) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition];
  };

  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  const [islandScale, islandPosition] = adjustIslandForScreenSize();

  return (
    <section className='w-full h-screen relative'>
      {/* Popup Info */}
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      {/* --- 1. GHOST NAVIGATION ARROWS (No Button Look) --- */}
      {/* These are purely visual hints, no borders or backgrounds to imply "clicking" */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div className="w-full max-w-xl md:max-w-4xl lg:max-w-7xl flex justify-between px-6">
          
          {/* LEFT GHOST ARROW */}
          <div className="animate-float-left">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={3} 
              stroke="white" 
              className="w-12 h-12 md:w-16 md:h-16 drop-shadow-lg opacity-80"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </div>

          {/* RIGHT GHOST ARROW */}
          <div className="animate-float-right">
             <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={3} 
              stroke="white" 
              className="w-12 h-12 md:w-16 md:h-16 drop-shadow-lg opacity-80"
            >
               <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
             </svg>
          </div>

        </div>
      </div>

      {/* --- 2. BOTTOM CONTROL INDICATOR (Horizontal Animation) --- */}
      <div className="absolute bottom-20 left-0 right-0 z-10 flex justify-center pointer-events-none">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 px-8 py-4 bg-black/20 backdrop-blur-sm rounded-full border border-white/30 shadow-lg text-white">
          
          {/* Mouse/Touch Control Hint */}
          <div className="flex items-center gap-4">
            {/* This icon now sways Left/Right instead of bouncing Up/Down */}
            <span className="text-3xl animate-sway">
              {isMobile ? "👆" : "↔️"}
            </span>
            <span className="text-sm font-bold uppercase tracking-wider">
              {isMobile ? "Swipe Left / Right" : "Drag Left / Right"}
            </span>
          </div>

          {/* Keyboard Control Hint (Only show on Desktop) */}
          {!isMobile && (
            <>
              <div className="w-px h-6 bg-white/30"></div>
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  <div className="w-7 h-7 flex items-center justify-center bg-white/20 rounded border border-white/50 font-bold text-xs">
                    ←
                  </div>
                  <div className="w-7 h-7 flex items-center justify-center bg-white/20 rounded border border-white/50 font-bold text-xs">
                    →
                  </div>
                </div>
              </div>
            </>
          )}
          
        </div>
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            skyColor='#b1e1ff'
            groundColor='#000000'
            intensity={1}
          />

          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition}
            rotation={[0.1, 4.7077, 0]}
            scale={islandScale}
          />
          <Plane
            isRotating={isRotating}
            position={biplanePosition}
            rotation={[0, 20.1, 0]}
            scale={biplaneScale}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;