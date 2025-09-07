"use client";

import React, { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
  end: number;
  start?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  start = 0,
  duration = 2000,
  prefix = '',
  suffix = ''
}) => {
  const [count, setCount] = useState(start);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            const startTime = Date.now();
            const startValue = start;
            const endValue = end;
            
            const animate = () => {
              const currentTime = Date.now();
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              
              // Easing function for smooth animation
              const easeOutQuart = 1 - Math.pow(1 - progress, 4);
              const currentCount = Math.round(startValue + (endValue - startValue) * easeOutQuart);
              
              setCount(currentCount);
              
              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };
            
            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [end, start, duration, hasAnimated]);

  return (
    <span ref={counterRef}>
      {prefix}{count}{suffix}
    </span>
  );
};

export default AnimatedCounter;