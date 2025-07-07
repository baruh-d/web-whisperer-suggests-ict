import { useEffect, useRef, RefObject } from 'react';
import { useInView } from 'react-intersection-observer';
import { animator, fadeIn, slideInFromLeft, slideInFromRight, scaleIn } from '../lib/animations';

export interface AnimationOptions {
  delay?: number;
  duration?: number;
  trigger?: 'viewport' | 'immediate' | 'hover' | 'click';
  direction?: 'up' | 'down' | 'left' | 'right';
  stagger?: number;
  repeat?: boolean;
}

export const useAnimation = (
  animationType: 'fadeIn' | 'slideLeft' | 'slideRight' | 'scaleIn' | 'custom',
  options: AnimationOptions = {},
  customAnimation?: (element: Element) => void
) => {
  const elementRef = useRef<HTMLElement>(null);
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: !options.repeat,
    threshold: 0.1,
  });

  // Combine refs
  const setRefs = (element: HTMLElement | null) => {
    elementRef.current = element;
    inViewRef(element);
  };

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    const { delay = 0, trigger = 'viewport' } = options;

    const executeAnimation = () => {
      switch (animationType) {
        case 'fadeIn':
          fadeIn(element, delay);
          break;
        case 'slideLeft':
          slideInFromLeft(element, delay);
          break;
        case 'slideRight':
          slideInFromRight(element, delay);
          break;
        case 'scaleIn':
          scaleIn(element, delay);
          break;
        case 'custom':
          customAnimation?.(element);
          break;
      }
    };

    if (trigger === 'immediate') {
      executeAnimation();
    } else if (trigger === 'viewport' && inView) {
      executeAnimation();
    }
  }, [inView, animationType, options, customAnimation]);

  return { ref: setRefs, inView };
};

export const useHeroAnimation = (containerRef: RefObject<HTMLElement>) => {
  useEffect(() => {
    if (!containerRef.current) return;
    animator.heroAnimation(containerRef.current);
  }, [containerRef]);
};

export const useServicesAnimation = (containerRef: RefObject<HTMLElement>) => {
  useEffect(() => {
    if (!containerRef.current) return;
    animator.servicesAnimation(containerRef.current);
  }, [containerRef]);
};

export const usePartnersAnimation = (containerRef: RefObject<HTMLElement>) => {
  useEffect(() => {
    if (!containerRef.current) return;
    animator.partnersAnimation(containerRef.current);
  }, [containerRef]);
};

export const useMascotFloat = (elementRef: RefObject<HTMLElement>) => {
  useEffect(() => {
    if (!elementRef.current) return;
    animator.mascotFloat(elementRef.current);
  }, [elementRef]);
};

export const useCounterAnimation = (
  elementRef: RefObject<HTMLElement>,
  endValue: number
) => {
  useEffect(() => {
    if (!elementRef.current) return;
    animator.counterAnimation(elementRef.current, endValue);
  }, [elementRef, endValue]);
};

export const useTypewriter = (
  elementRef: RefObject<HTMLElement>,
  text: string
) => {
  useEffect(() => {
    if (!elementRef.current) return;
    animator.typewriterEffect(elementRef.current, text);
  }, [elementRef, text]);
};

export const useStaggerAnimation = (
  selector: string,
  direction: 'up' | 'down' | 'left' | 'right' = 'up'
) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    animator.staggerReveal(selector, direction);
  }, [selector, direction]);

  return containerRef;
};

export const usePageTransition = () => {
  const executeTransition = (fromPage: HTMLElement, toPage: HTMLElement) => {
    return animator.pageTransition(fromPage, toPage);
  };

  return { executeTransition };
};

export const useScrollAnimation = (
  callback: () => void,
  options: {
    threshold?: number;
    triggerOnce?: boolean;
  } = {}
) => {
  const { ref, inView } = useInView({
    threshold: options.threshold || 0.1,
    triggerOnce: options.triggerOnce !== false,
  });

  useEffect(() => {
    if (inView) {
      callback();
    }
  }, [inView, callback]);

  return ref;
};

export const useHoverAnimation = (
  elementRef: RefObject<HTMLElement>,
  hoverIn: () => void,
  hoverOut: () => void
) => {
  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    
    const handleMouseEnter = () => hoverIn();
    const handleMouseLeave = () => hoverOut();

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [elementRef, hoverIn, hoverOut]);
};