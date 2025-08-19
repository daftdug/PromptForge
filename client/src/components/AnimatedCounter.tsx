import { useEffect, useState, useRef } from "react";

interface AnimatedCounterProps {
  targetValue: string;
  duration?: number;
  className?: string;
  testId?: string;
}

export default function AnimatedCounter({ 
  targetValue, 
  duration = 2000, 
  className = "", 
  testId 
}: AnimatedCounterProps) {
  const [currentValue, setCurrentValue] = useState("0");
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  // Extract number and suffix from target value (e.g., "50K+" -> number: 50, suffix: "K+")
  const parseValue = (value: string) => {
    const match = value.match(/^(\d+)(.*)$/);
    if (match) {
      return { number: parseInt(match[1]), suffix: match[2] };
    }
    return { number: 0, suffix: "" };
  };

  const { number: targetNumber, suffix } = parseValue(targetValue);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentNumber = Math.floor(easeOutQuart * targetNumber);
      
      setCurrentValue(`${currentNumber}${suffix}`);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, targetNumber, suffix, duration]);

  return (
    <div ref={elementRef} className={className} data-testid={testId}>
      {currentValue}
    </div>
  );
}