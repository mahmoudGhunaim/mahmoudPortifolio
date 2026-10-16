import { Canvas, useFrame } from '@react-three/fiber';
import { Billboard, Float, MeshDistortMaterial, Sparkles } from '@react-three/drei';
import { useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';

export interface HeroSceneProps {
  theme: 'dark' | 'light';
  /** Pause rendering when the hero is off-screen */
  active: boolean;
}

const PALETTE = {
  dark: { indigo: '#6366F1', cyan: '#22D3EE', wire: '#818CF8', sparkle: '#A5B4FC' },
  light: { indigo: '#818CF8', cyan: '#22D3EE', wire: '#6366F1', sparkle: '#6366F1' },
};

/** Draws a rounded "logo badge" onto a canvas texture (no external font/image fetch). */
function useBadgeTexture(label: string, bg: string, fg: string, shape: 'rounded' | 'circle' = 'rounded') {
  const texture = useMemo(() => {
    const size = 256;
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = size;
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = bg;
    if (shape === 'circle') {
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size / 2 - 6, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.beginPath();
      ctx.roundRect(8, 8, size - 16, size - 16, 44);
      ctx.fill();
    }
    ctx.fillStyle = fg;
    ctx.font = `700 ${label.length > 2 ? 84 : 104}px "Space Grotesk", "Segoe UI", system-ui, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(label, size / 2, size / 2 + 6);
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 4;
    return tex;
  }, [label, bg, fg, shape]);

  useEffect(() => () => texture.dispose(), [texture]);
  return texture;
}

function Badge({
  position,
  label,
  bg,
  fg,
  shape,
  speed = 1.4,
}: {
  position: [number, number, number];
  label: string;
  bg: string;
  fg: string;
  shape?: 'rounded' | 'circle';
  speed?: number;
}) {
  const map = useBadgeTexture(label, bg, fg, shape);
  return (
    <Float speed={speed} rotationIntensity={0.6} floatIntensity={1.4}>
      <Billboard position={position}>
        <mesh>
          <planeGeometry args={[0.72, 0.72]} />
          <meshBasicMaterial map={map} transparent toneMapped={false} />
        </mesh>
      </Billboard>
    </Float>
  );
}

/** Stylised React atom: three orbit rings around a nucleus. */
function ReactAtom({ position, color }: { position: [number, number, number]; color: string }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.z += dt * 0.6;
  });
  return (
    <Float speed={1.6} rotationIntensity={0.8} floatIntensity={1.2}>
      <group position={position} scale={0.34} ref={ref}>
        <mesh>
          <sphereGeometry args={[0.28, 24, 24]} />
          <meshBasicMaterial color={color} toneMapped={false} />
        </mesh>
        {[0, Math.PI / 3, (2 * Math.PI) / 3].map((rot) => (
          <mesh key={rot} rotation={[Math.PI / 2, rot, 0]} scale={[1, 0.38, 1]}>
            <torusGeometry args={[1, 0.06, 12, 64]} />
            <meshBasicMaterial color={color} toneMapped={false} />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

function Core({ theme }: { theme: 'dark' | 'light' }) {
  const group = useRef<THREE.Group>(null);
  const wire = useRef<THREE.Mesh>(null);
  const c = PALETTE[theme];

  useFrame((state, dt) => {
    const g = group.current;
    if (!g) return;
    // Gentle auto-rotation + smooth follow of the pointer
    g.rotation.y += dt * 0.15;
    const targetX = state.pointer.y * 0.35;
    const targetZ = -state.pointer.x * 0.2;
    g.rotation.x = THREE.MathUtils.damp(g.rotation.x, targetX, 3, dt);
    g.rotation.z = THREE.MathUtils.damp(g.rotation.z, targetZ, 3, dt);
    g.position.x = THREE.MathUtils.damp(g.position.x, state.pointer.x * 0.25, 2, dt);
    g.position.y = THREE.MathUtils.damp(g.position.y, state.pointer.y * 0.15, 2, dt);
    if (wire.current) wire.current.rotation.y -= dt * 0.25;
  });

  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[1.25, 12]} />
        <MeshDistortMaterial
          color={c.indigo}
          emissive={c.cyan}
          emissiveIntensity={theme === 'dark' ? 0.25 : 0.35}
          roughness={0.25}
          metalness={theme === 'dark' ? 0.6 : 0.35}
          distort={0.38}
          speed={1.6}
        />
      </mesh>
      <mesh ref={wire} scale={1.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial color={c.wire} wireframe transparent opacity={theme === 'dark' ? 0.35 : 0.5} />
      </mesh>

      <ReactAtom position={[-2.1, 1.1, 0.4]} color="#61DAFB" />
      <Badge position={[2.15, 1.0, 0.2]} label="JS" bg="#F7DF1E" fg="#1A1A1A" speed={1.2} />
      <Badge position={[-1.9, -1.25, 0.6]} label="PHP" bg="#777BB4" fg="#FFFFFF" shape="circle" speed={1.5} />
      <Badge position={[2.0, -1.2, 0.5]} label="WP" bg="#21759B" fg="#FFFFFF" shape="circle" speed={1.3} />
    </group>
  );
}

export default function HeroScene({ theme, active }: HeroSceneProps) {
  const c = PALETTE[theme];
  return (
    <Canvas
      dpr={[1, 1.5]}
      frameloop={active ? 'always' : 'never'}
      camera={{ position: [0, 0, 6.2], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ touchAction: 'pan-y' }}
    >
      <ambientLight intensity={theme === 'dark' ? 0.5 : 0.9} />
      <directionalLight position={[3, 4, 5]} intensity={1.6} color={c.cyan} />
      <pointLight position={[-4, -2, 3]} intensity={30} color={c.indigo} />
      <Core theme={theme} />
      <Sparkles count={50} scale={[8, 5, 3]} size={2} speed={0.3} color={c.sparkle} opacity={0.6} />
    </Canvas>
  );
}
