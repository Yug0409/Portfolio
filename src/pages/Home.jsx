import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useEffect, useRef } from "react";

import { HomeInfo, Loader } from "../components";
import { Bird, Island, Plane, Sky } from "../models";

const Home = () => {
  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const targetRotationRef = useRef(null);
  const flyingRef        = useRef(null);
  const rotateTimer      = useRef(null);

  const STAGE_ANGLES = { 1: 4.5, 2: 2.5, 3: 1.075, 4: 5.65 };
  const STAGE_NEXT   = { 1: 2, 2: 3, 3: 4, 4: 1 };
  const STAGE_PREV   = { 1: 4, 2: 1, 3: 2, 4: 3 };

  const handleNext = () => {
    if (flyingRef.current) return; // already mid-flight
    const next = STAGE_NEXT[currentStage] ?? 2;
    flyingRef.current = true;
    clearTimeout(rotateTimer.current);
    // Rotate island while plane is climbing (mid-flight sync)
    rotateTimer.current = setTimeout(() => {
      targetRotationRef.current = STAGE_ANGLES[next];
    }, 500);
  };

  const handlePrev = () => {
    if (flyingRef.current) return;
    const prev = STAGE_PREV[currentStage] ?? 4;
    flyingRef.current = true;
    clearTimeout(rotateTimer.current);
    rotateTimer.current = setTimeout(() => {
      targetRotationRef.current = STAGE_ANGLES[prev];
    }, 500);
  };

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
        {currentStage && <HomeInfo currentStage={currentStage} key={currentStage} />}
      </div>

      {/* --- 1. NAVIGATION ARROWS --- */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div className="w-full max-w-xl md:max-w-4xl lg:max-w-7xl flex justify-between px-4 md:px-6">

          {/* LEFT ARROW */}
          <button
            onClick={handlePrev}
            aria-label="Previous stage"
            className="pointer-events-auto animate-float-left group p-3 md:p-4 rounded-full
              bg-white/10 backdrop-blur-sm border border-white/30
              hover:bg-white/25 hover:border-white/60 hover:scale-110
              active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="white"
              className="w-10 h-10 md:w-14 md:h-14 drop-shadow-lg opacity-80 group-hover:opacity-100 transition-opacity"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={handleNext}
            aria-label="Next stage"
            className="pointer-events-auto animate-float-right group p-3 md:p-4 rounded-full
              bg-white/10 backdrop-blur-sm border border-white/30
              hover:bg-white/25 hover:border-white/60 hover:scale-110
              active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="white"
              className="w-10 h-10 md:w-14 md:h-14 drop-shadow-lg opacity-80 group-hover:opacity-100 transition-opacity"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

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
            targetRotationRef={targetRotationRef}
            position={islandPosition}
            rotation={[0.1, 4.7077, 0]}
            scale={islandScale}
          />
          <Plane
            isRotating={isRotating}
            flyingRef={flyingRef}
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