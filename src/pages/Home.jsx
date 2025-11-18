import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";

import { HomeInfo, Loader } from "../components";
import { Bird, Island, Plane, Sky } from "../models";

const Home = () => {
  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);

  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
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

    if (window.innerWidth < 768) {
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

      {/* --- BEAUTIFIED CONTROLS INDICATOR --- */}
      <div className="absolute bottom-20 left-0 right-0 z-10 flex justify-center pointer-events-none">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 px-8 py-4 bg-white/20 backdrop-blur-xl rounded-2xl border border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] text-gray-800">
          
          {/* Mouse Control Hint */}
          <div className="flex items-center gap-3">
            <span className="text-3xl animate-[bounce_2s_infinite]">🖱️</span>
            <span className="text-sm font-bold uppercase tracking-wider text-slate-700">
              Drag to Explore
            </span>
          </div>

          {/* Vertical Divider (Hidden on mobile) */}
          <div className="hidden md:block w-px h-8 bg-gray-800/20"></div>

          {/* Keyboard Control Hint */}
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              {/* Keycap Style */}
              <div className="w-8 h-8 flex items-center justify-center bg-white rounded-lg border-b-4 border-gray-300 shadow-sm text-gray-700 font-bold text-lg">
                ←
              </div>
              <div className="w-8 h-8 flex items-center justify-center bg-white rounded-lg border-b-4 border-gray-300 shadow-sm text-gray-700 font-bold text-lg">
                →
              </div>
            </div>
            <span className="text-sm font-bold uppercase tracking-wider text-slate-700">
              Navigate
            </span>
          </div>
          
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