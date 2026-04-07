import { useEffect, useRef } from 'react';
import type { ReactNode, CSSProperties } from 'react';

// --- Types -------------------------------------------------------------------

export type AnimationType =
  | 'fade'
  | 'slide-up'
  | 'slide-down'
  | 'slide-left'
  | 'slide-right'
  | 'scale'
  | 'scale-up';

export interface ScrollRevealProps {
  /** Content to animate */
  children: ReactNode;
  /** Animation variant */
  animation?: AnimationType;
  /** Duration in ms */
  duration?: number;
  /** Delay before animation starts (ms) */
  delay?: number;
  /** CSS easing function */
  easing?: string;
  /** IntersectionObserver threshold (0–1) */
  threshold?: number;
  /**
   * Stagger interval (ms) between direct children animations.
   * When provided, each direct child gets its own staggered reveal
   * instead of animating the wrapper as a single unit.
   */
  stagger?: number;
  /** Base delay offset when staggering (ms) */
  staggerBaseDelay?: number;
  /** Re-animate each time the element re-enters the viewport */
  repeat?: boolean;
  /** Extra class names applied to the wrapper element */
  className?: string;
  /** Extra inline styles applied to the wrapper element */
  style?: CSSProperties;
  /** HTML tag for the wrapper element @default "div" */
  as?: keyof JSX.IntrinsicElements;
}

// --- Helpers -----------------------------------------------------------------

const HIDDEN: Record<AnimationType, CSSProperties> = {
  fade:          { opacity: 0 },
  'slide-up':    { opacity: 0, transform: 'translateY(40px)' },
  'slide-down':  { opacity: 0, transform: 'translateY(-40px)' },
  'slide-left':  { opacity: 0, transform: 'translateX(40px)' },
  'slide-right': { opacity: 0, transform: 'translateX(-40px)' },
  scale:         { opacity: 0, transform: 'scale(0.85)' },
  'scale-up':    { opacity: 0, transform: 'scale(1.1)' },
};

function applyHidden(el: HTMLElement, animation: AnimationType) {
  const s = HIDDEN[animation];
  el.style.opacity = String(s.opacity ?? 1);
  el.style.transform = (s.transform as string) ?? 'none';
}

function applyVisible(el: HTMLElement) {
  el.style.opacity = '1';
  el.style.transform = 'none';
}

function setTransition(el: HTMLElement, duration: number, delay: number, easing: string) {
  el.style.transition = [
    `opacity ${duration}ms ${easing} ${delay}ms`,
    `transform ${duration}ms ${easing} ${delay}ms`,
  ].join(', ');
}

// --- Core Component ----------------------------------------------------------

/**
 * ScrollReveal — triggers CSS animations when elements scroll into view.
 *
 * **Single element mode** (default — animates the wrapper itself):
 * ```tsx
 * <ScrollReveal animation="slide-up" delay={200}>
 *   <MyCard />
 * </ScrollReveal>
 * ```
 *
 * **Staggered children mode** (pass `stagger` — animates each child individually):
 * ```tsx
 * <ScrollReveal stagger={80} className="grid grid-cols-3 gap-4">
 *   <Card /><Card /><Card />
 * </ScrollReveal>
 * ```
 */
export default function ScrollReveal({
  children,
  animation = 'slide-up',
  duration = 600,
  delay = 0,
  easing = 'cubic-bezier(0.22, 1, 0.36, 1)',
  threshold = 0.15,
  stagger,
  staggerBaseDelay = 0,
  repeat = false,
  className,
  style,
  as: Tag = 'div',
}: ScrollRevealProps) {
  const wrapperRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const isStaggered = typeof stagger === 'number' && stagger > 0;

    // When staggered: observe each direct child. Otherwise: observe wrapper.
    const targets: HTMLElement[] = isStaggered
      ? (Array.from(wrapper.children) as HTMLElement[])
      : [wrapper];

    targets.forEach((el, i) => {
      const itemDelay = isStaggered ? staggerBaseDelay + i * stagger! : delay;
      applyHidden(el, animation);
      setTransition(el, duration, itemDelay, easing);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            applyVisible(entry.target as HTMLElement);
            if (!repeat) observer.unobserve(entry.target);
          } else if (repeat) {
            applyHidden(entry.target as HTMLElement, animation);
          }
        });
      },
      { threshold },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animation, duration, delay, easing, threshold, stagger, staggerBaseDelay, repeat]);

  return (
    // @ts-expect-error — polymorphic tag ref typing
    <Tag ref={wrapperRef} className={className} style={style}>
      {children}
    </Tag>
  );
}

// --- Convenience Wrappers ----------------------------------------------------

/** Fade only — no directional movement. */
export function FadeIn(props: Omit<ScrollRevealProps, 'animation'>) {
  return <ScrollReveal animation="fade" {...props} />;
}

/** Slide up + fade — the most common section entrance animation. */
export function SlideUp(props: Omit<ScrollRevealProps, 'animation'>) {
  return <ScrollReveal animation="slide-up" {...props} />;
}

/**
 * Stagger the direct children of a list or grid.
 *
 * ```tsx
 * <StaggerReveal stagger={80} className="grid grid-cols-3 gap-4">
 *   {items.map((item) => <Card key={item.id} {...item} />)}
 * </StaggerReveal>
 * ```
 */
export function StaggerReveal({
  stagger = 100,
  animation = 'slide-up',
  ...rest
}: ScrollRevealProps) {
  return <ScrollReveal animation={animation} stagger={stagger} {...rest} />;
}
