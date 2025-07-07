"use client";

import { useEffect, useRef } from "react";

export class AnimationController {
  private static instance: AnimationController;
  private observers: Map<string, IntersectionObserver> = new Map();

  static getInstance(): AnimationController {
    if (!AnimationController.instance) {
      AnimationController.instance = new AnimationController();
    }
    return AnimationController.instance;
  }

  // Helper method to apply animation classes
  private animateElement(
    element: Element,
    animationClass: string,
    baseClasses: string = ""
  ) {
    element.classList.add(...baseClasses.split(" "));
    element.classList.add(animationClass);
  }

  // Hero Section Animations
  heroAnimation(container: string | Element) {
    const containerEl =
      typeof container === "string"
        ? document.querySelector(container)
        : container;

    if (!containerEl) return;

    const elements = {
      bg: containerEl.querySelector(".hero-bg"),
      title: containerEl.querySelector(".hero-title"),
      subtitle: containerEl.querySelector(".hero-subtitle"),
      cta: containerEl.querySelector(".hero-cta"),
      mascot: containerEl.querySelector(".hero-mascot"),
    };

    if (elements.bg) {
      this.animateElement(
        elements.bg,
        "animate-[fade-in_2s_ease-out_forwards]",
        "opacity-0 scale-110"
      );
    }

    if (elements.title) {
      this.animateElement(
        elements.title,
        "animate-[slide-in-down_1.2s_ease-out_forwards_0.5s]",
        "opacity-0 translate-y-24"
      );
    }

    if (elements.subtitle) {
      this.animateElement(
        elements.subtitle,
        "animate-[fade-in-up_1s_ease-out_forwards_0.7s]",
        "opacity-0 translate-y-12"
      );
    }

    if (elements.cta) {
      this.animateElement(
        elements.cta,
        "animate-[scale-in_0.8s_back-out_forwards_1s]",
        "opacity-0 scale-90"
      );
    }

    if (elements.mascot) {
      this.animateElement(
        elements.mascot,
        "animate-[slide-in-left_1.2s_elastic-out_forwards_0.8s]",
        "opacity-0 translate-x-24 rotate-3"
      );
    }
  }

  // Services Cards Animation
  servicesAnimation(container: string | Element) {
    const containerEl =
      typeof container === "string"
        ? document.querySelector(container)
        : container;

    if (!containerEl) return;

    const cards = Array.from(containerEl.querySelectorAll(".service-card"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const delay = index * 200;
            setTimeout(() => {
              entry.target.classList.add(
                "animate-[fade-in-up_0.8s_ease-out_forwards]",
                "opacity-100",
                "translate-y-0",
                "rotate-y-0"
              );
              entry.target.classList.remove(
                "opacity-0",
                "translate-y-24",
                "rotate-y-45"
              );
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach((card) => {
      card.classList.add(
        "opacity-0",
        "translate-y-24",
        "rotate-y-45",
        "transform-gpu",
        "transition-all",
        "duration-800",
        "ease-out",
        "will-change-transform,opacity"
      );
      observer.observe(card);
    });

    this.observers.set("services", observer);
  }

  // Partners Logo Animation
  partnersAnimation(container: string | Element) {
    const containerEl =
      typeof container === "string"
        ? document.querySelector(container)
        : container;

    if (!containerEl) return;

    const logos = Array.from(containerEl.querySelectorAll(".partner-logo"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            logos.forEach((logo, index) => {
              setTimeout(() => {
                logo.classList.add(
                  "animate-[scale-in_0.5s_back-out_forwards]",
                  "opacity-100",
                  "scale-100",
                  "rotate-0"
                );
                logo.classList.remove(
                  "opacity-0",
                  "scale-0",
                  "rotate-180"
                );
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    logos.forEach((logo) => {
      logo.classList.add(
        "opacity-0",
        "scale-0",
        "rotate-180",
        "transform-gpu",
        "transition-all",
        "duration-500",
        "ease-out",
        "will-change-transform,opacity"
      );
    });

    observer.observe(containerEl);
    this.observers.set("partners", observer);
  }

  // Mascot Floating Animation
  mascotFloat(element: string | Element) {
    const el =
      typeof element === "string" ? document.querySelector(element) : element;
    if (!el) return;

    el.classList.add("animate-[float_3s_ease-in-out_infinite]");
  }

  // Counter Animation
  counterAnimation(element: string | Element, endValue: number) {
    const el =
      typeof element === "string" ? document.querySelector(element) : element;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animateCounter(el, endValue);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    this.observers.set(`counter-${el.id}`, observer);
  }

  private animateCounter(element: Element, endValue: number) {
    const duration = 2000; // 2 seconds
    const startTime = performance.now();
    const startValue = 0;

    const updateCounter = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const currentValue = Math.floor(progress * endValue);

      element.textContent = currentValue.toLocaleString();

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = endValue.toLocaleString();
      }
    };

    requestAnimationFrame(updateCounter);
  }

  // Page Transition
  pageTransition(fromPage: string | Element, toPage: string | Element) {
    const fromEl =
      typeof fromPage === "string" ? document.querySelector(fromPage) : fromPage;
    const toEl =
      typeof toPage === "string" ? document.querySelector(toPage) : toPage;

    if (!fromEl || !toEl) return;

    fromEl.classList.add(
      "animate-[fade-out-up_0.3s_ease-in_forwards]",
      "opacity-0",
      "-translate-y-12"
    );
    toEl.classList.add(
      "animate-[fade-in-up_0.5s_ease-out_forwards_0.3s]",
      "opacity-100",
      "translate-y-0"
    );
    toEl.classList.remove("opacity-0", "translate-y-12");
  }

  // Typewriter Effect
  typewriterEffect(element: string | Element, text: string) {
    const el =
      typeof element === "string" ? document.querySelector(element) : element;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animateTypewriter(el, text);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    this.observers.set(`typewriter-${el.id}`, observer);
  }

  private animateTypewriter(element: Element, text: string) {
    let i = 0;
    const speed = 50; // milliseconds per character

    const type = () => {
      if (i < text.length) {
        element.textContent = text.substring(0, i + 1);
        i++;
        setTimeout(type, speed);
      }
    };

    type();
  }

  // Stagger Reveal Animation
  staggerReveal(
    elements: string,
    direction: "up" | "down" | "left" | "right" = "up"
  ) {
    const directionClasses = {
      up: "translate-y-24",
      down: "-translate-y-24",
      left: "-translate-x-24",
      right: "translate-x-24",
    };

    const items = Array.from(document.querySelectorAll(elements));
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add(
                  "animate-[fade-in_0.8s_ease-out_forwards]",
                  "opacity-100",
                  "translate-x-0",
                  "translate-y-0"
                );
                item.classList.remove(
                  "opacity-0",
                  directionClasses[direction]
                );
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    items.forEach((item) => {
      item.classList.add(
        "opacity-0",
        directionClasses[direction],
        "transform-gpu",
        "transition-all",
        "duration-800",
        "ease-out",
        "will-change-transform,opacity"
      );
      observer.observe(item);
    });

    this.observers.set(`stagger-${elements}`, observer);
  }

  // Cleanup method
  killAnimation(name: string) {
    const observer = this.observers.get(name);
    if (observer) {
      observer.disconnect();
      this.observers.delete(name);
    }
  }

  // Kill all animations
  killAll() {
    this.observers.forEach((observer) => observer.disconnect());
    this.observers.clear();
  }
}

// Utility functions for common animations
export const fadeIn = (element: string | Element, delay: number = 0) => {
  const el = typeof element === "string" ? document.querySelector(element) : element;
  if (!el) return;

  setTimeout(() => {
    el.classList.add(
      "animate-[fade-in-up_0.8s_ease-out_forwards]",
      "opacity-100",
      "translate-y-0"
    );
    el.classList.remove("opacity-0", "translate-y-8");
  }, delay);
};

export const slideInFromLeft = (element: string | Element, delay: number = 0) => {
  const el = typeof element === "string" ? document.querySelector(element) : element;
  if (!el) return;

  setTimeout(() => {
    el.classList.add(
      "animate-[slide-in-left_0.8s_ease-out_forwards]",
      "opacity-100",
      "translate-x-0"
    );
    el.classList.remove("opacity-0", "-translate-x-24");
  }, delay);
};

export const slideInFromRight = (element: string | Element, delay: number = 0) => {
  const el = typeof element === "string" ? document.querySelector(element) : element;
  if (!el) return;

  setTimeout(() => {
    el.classList.add(
      "animate-[slide-in-right_0.8s_ease-out_forwards]",
      "opacity-100",
      "translate-x-0"
    );
    el.classList.remove("opacity-0", "translate-x-24");
  }, delay);
};

export const scaleIn = (element: string | Element, delay: number = 0) => {
  const el = typeof element === "string" ? document.querySelector(element) : element;
  if (!el) return;

  setTimeout(() => {
    el.classList.add(
      "animate-[scale-in_0.6s_back-out_forwards]",
      "opacity-100",
      "scale-100"
    );
    el.classList.remove("opacity-0", "scale-90");
  }, delay);
};

// Export singleton instance
export const animator = AnimationController.getInstance();

