"use client";

import { useEffect, useRef } from "react";

/**
 * Attach IntersectionObserver to a container ref.
 * All `.reveal` children inside will get `.visible` added when they enter the viewport.
 *
 * Usage:
 *   const ref = useReveal();
 *   return <section ref={ref}> <div className="reveal">...</div> </section>
 */
export function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold }
    );

    const els = ref.current?.querySelectorAll(".reveal");
    els?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
