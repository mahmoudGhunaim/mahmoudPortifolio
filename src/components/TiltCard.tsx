import { m as motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';
import type { PointerEvent, ReactNode } from 'react';
import { useMediaQuery, usePrefersReducedMotion } from '../hooks/useMediaQuery';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  /** Max tilt in degrees */
  max?: number;
}

/** 3D hover tilt with a cursor-following glare. Disabled for touch & reduced motion. */
export default function TiltCard({ children, className = '', max = 8 }: TiltCardProps) {
  const reduced = usePrefersReducedMotion();
  const finePointer = useMediaQuery('(hover: hover) and (pointer: fine)');
  const enabled = finePointer && !reduced;

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const spring = { stiffness: 220, damping: 20, mass: 0.4 };
  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), spring);
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), spring);
  const glareX = useTransform(px, (v) => `${v * 100}%`);
  const glareY = useTransform(py, (v) => `${v * 100}%`);
  const glare = useMotionTemplate`radial-gradient(420px circle at ${glareX} ${glareY}, color-mix(in srgb, var(--accent-2) 16%, transparent), transparent 45%)`;

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!enabled) return;
    const rect = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };
  const reset = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <div style={{ perspective: 1000 }} className="h-full">
      <motion.div
        onPointerMove={onMove}
        onPointerLeave={reset}
        style={enabled ? { rotateX, rotateY, transformStyle: 'preserve-3d' } : undefined}
        className={`glass glow-hover relative h-full overflow-hidden rounded-2xl ${className}`}
      >
        {enabled && (
          <motion.div aria-hidden className="pointer-events-none absolute inset-0 z-10" style={{ background: glare }} />
        )}
        {children}
      </motion.div>
    </div>
  );
}
