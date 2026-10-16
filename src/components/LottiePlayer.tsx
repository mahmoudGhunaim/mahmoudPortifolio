import { lazy, Suspense, useEffect, useState } from 'react';
import type { DotLottie } from '@lottiefiles/dotlottie-react';
import { useInView } from '../hooks/useInView';
import { usePrefersReducedMotion } from '../hooks/useMediaQuery';

const DotLottieReact = lazy(() => import('./DotLottieLazy'));

interface LottiePlayerProps {
  /** Path inside /public, e.g. "/lottie/coding.lottie" */
  src: string;
  /** Accessible description. Pass an empty string for purely decorative use. */
  label: string;
  className?: string;
  loop?: boolean;
  /** Play even when the user prefers reduced motion (e.g. a short one-shot animation) */
  forcePlay?: boolean;
  speed?: number;
}

/**
 * Lazily loads the dotLottie runtime, only plays while on-screen and
 * shows a still frame when the user prefers reduced motion.
 */
export default function LottiePlayer({ src, label, className = '', loop = true, forcePlay = false, speed = 1 }: LottiePlayerProps) {
  const [ref, inView] = useInView<HTMLDivElement>('150px');
  const reduced = usePrefersReducedMotion();
  const [player, setPlayer] = useState<DotLottie | null>(null);
  const [mounted, setMounted] = useState(false);

  const shouldAnimate = forcePlay || !reduced;

  // Mount the runtime the first time the element nears the viewport.
  useEffect(() => {
    if (inView) setMounted(true);
  }, [inView]);

  useEffect(() => {
    if (!player) return;
    if (inView && shouldAnimate) player.play();
    else player.pause();
  }, [player, inView, shouldAnimate]);

  const decorative = label === '';

  return (
    <div
      ref={ref}
      className={className}
      role={decorative ? undefined : 'img'}
      aria-label={decorative ? undefined : label}
      aria-hidden={decorative || undefined}
    >
      {mounted && (
        <Suspense fallback={null}>
          <DotLottieReact
            src={src}
            loop={loop}
            autoplay={shouldAnimate}
            speed={speed}
            dotLottieRefCallback={setPlayer}
            renderConfig={{ autoResize: true, devicePixelRatio: Math.min(window.devicePixelRatio, 2) }}
            style={{ width: '100%', height: '100%' }}
            aria-hidden
          />
        </Suspense>
      )}
    </div>
  );
}
