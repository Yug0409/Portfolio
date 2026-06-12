import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";

import planeScene from "../assets/3d/plane.glb";

const easeIn  = (t) => t * t;
const easeOut = (t) => 1 - (1 - t) * (1 - t);

export function Plane({ isRotating, flyingRef, ...props }) {
  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  const isRotatingRef = useRef(isRotating);
  const phase        = useRef("idle"); // "idle" | "out" | "in"
  const flyProgress  = useRef(0);
  const basePos      = useRef(null);
  const baseRotX     = useRef(0);

  useEffect(() => {
    isRotatingRef.current = isRotating;
    if (isRotating) {
      actions["Take 001"].play();
    } else if (phase.current === "idle") {
      actions["Take 001"].stop();
    }
  }, [actions, isRotating]);

  useFrame((_, delta) => {
    if (!ref.current) return;

    // Kick off fly sequence when arrow button is clicked
    if (flyingRef?.current && phase.current === "idle") {
      basePos.current = ref.current.position.clone();
      baseRotX.current = ref.current.rotation.x;
      phase.current = "out";
      flyProgress.current = 0;
      actions["Take 001"].play();
    }

    // Phase 1 – fly up and away
    if (phase.current === "out") {
      flyProgress.current = Math.min(flyProgress.current + delta * 1.5, 1);
      const t = easeIn(flyProgress.current);
      ref.current.position.y = basePos.current.y + t * 22;
      ref.current.rotation.x = baseRotX.current - t * 0.65;

      if (flyProgress.current >= 1) {
        // Teleport below screen to set up the landing approach
        phase.current = "in";
        flyProgress.current = 0;
        ref.current.position.y = basePos.current.y - 22;
        ref.current.rotation.x = baseRotX.current + 0.3;
      }
      return;
    }

    // Phase 2 – fly back in from below
    if (phase.current === "in") {
      flyProgress.current = Math.min(flyProgress.current + delta * 1.2, 1);
      const t = easeOut(flyProgress.current);
      ref.current.position.y = basePos.current.y - 22 + t * 22;
      ref.current.rotation.x = baseRotX.current + 0.3 - t * 0.3;

      if (flyProgress.current >= 1) {
        ref.current.position.copy(basePos.current);
        ref.current.rotation.x = baseRotX.current;
        phase.current = "idle";
        flyingRef.current = null;
        if (!isRotatingRef.current) actions["Take 001"].stop();
      }
    }
  });

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
}
